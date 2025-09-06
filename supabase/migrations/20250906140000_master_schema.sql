-- Create the expenses table first, defining its essential columns
CREATE TABLE public.expenses (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    merchant text,
    amount numeric,
    category text,
    source_data text,
    status text DEFAULT 'draft'::text NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Drop the constraint if it exists, to prevent errors on re-runs
ALTER TABLE public.expenses
DROP CONSTRAINT IF EXISTS expenses_status_check;

-- First update existing expenses to use the new status values
UPDATE public.expenses
SET status = 'submitted'
WHERE status = 'pending';

-- Update any other non-standard statuses to draft
UPDATE public.expenses
SET status = 'draft'
WHERE status NOT IN ('draft', 'submitted', 'approved', 'rejected', 'reimbursed');

-- Now add the constraint
ALTER TABLE public.expenses
ADD CONSTRAINT expenses_status_check
CHECK (status = ANY (ARRAY['draft'::text, 'submitted'::text, 'approved'::text, 'rejected'::text, 'reimbursed'::text]));

-- Add approval fields
ALTER TABLE public.expenses
ADD COLUMN IF NOT EXISTS approved_by uuid,
ADD COLUMN IF NOT EXISTS approved_at timestamp with time zone,
ADD COLUMN IF NOT EXISTS rejection_reason text,
ADD COLUMN IF NOT EXISTS submitted_at timestamp with time zone;

-- Create function to handle expense submission
CREATE OR REPLACE FUNCTION public.submit_expense(expense_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  UPDATE public.expenses
  SET
    status = 'submitted',
    submitted_at = now(),
    updated_at = now()
  WHERE id = expense_id
    AND user_id = auth.uid()
    AND status = 'draft';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Expense not found or cannot be submitted';
  END IF;
END;
$$;

-- Create function to approve expense (admin only)
CREATE OR REPLACE FUNCTION public.approve_expense(expense_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- This function assumes you have another function is_current_user_admin() that returns boolean.
  -- You will need to create that helper function yourself.
  -- IF NOT public.is_current_user_admin() THEN
  --   RAISE EXCEPTION 'Only admins can approve expenses';
  -- END IF;

  UPDATE public.expenses
  SET
    status = 'approved',
    approved_by = auth.uid(),
    approved_at = now(),
    updated_at = now()
  WHERE id = expense_id
    AND status = 'submitted';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Expense not found or not in submitted status';
  END IF;
END;
$$;

-- Create function to reject expense (admin only)
CREATE OR REPLACE FUNCTION public.reject_expense(expense_id uuid, reason text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- This function assumes you have another function is_current_user_admin() that returns boolean.
  -- You will need to create that helper function yourself.
  -- IF NOT public.is_current_user_admin() THEN
  --   RAISE EXCEPTION 'Only admins can reject expenses';
  -- END IF;

  UPDATE public.expenses
  SET
    status = 'rejected',
    approved_by = auth.uid(),
    approved_at = now(),
    rejection_reason = reason,
    updated_at = now()
  WHERE id = expense_id
    AND status = 'submitted';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Expense not found or not in submitted status';
  END IF;
END;
$$;