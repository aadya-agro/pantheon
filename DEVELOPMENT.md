# 👩‍💻 Development Guide

This guide provides detailed information for developers working on the Adya expense automation application.

## 🏗️ Architecture Overview

### Technology Stack
- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Language**: TypeScript
- **Build Tool**: Turbopack (Next.js built-in)

### Project Architecture
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # Dashboard pages
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Base UI components (shadcn/ui)
│   └── landing/           # Landing page specific components
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🎨 Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --primary: #2563eb;           /* Blue-600 */
  --primary-foreground: #ffffff;

  /* Secondary Colors */
  --secondary: #f1f5f9;         /* Slate-100 */
  --secondary-foreground: #0f172a; /* Slate-900 */

  /* Accent Colors */
  --accent: #10b981;            /* Emerald-500 */
  --accent-foreground: #ffffff;

  /* Neutral Colors */
  --background: #ffffff;
  --foreground: #0f172a;        /* Slate-900 */
  --muted: #f8fafc;             /* Slate-50 */
  --muted-foreground: #64748b;  /* Slate-500 */

  /* Border & Ring */
  --border: #e2e8f0;            /* Slate-200 */
  --ring: #2563eb;              /* Blue-600 */
}
```

### Typography Scale
- **Heading 1**: `text-4xl md:text-5xl lg:text-6xl` (36-60px)
- **Heading 2**: `text-3xl md:text-4xl` (24-36px)
- **Heading 3**: `text-2xl md:text-3xl` (24-30px)
- **Body Large**: `text-lg` (18px)
- **Body**: `text-base` (16px)
- **Body Small**: `text-sm` (14px)

### Spacing System
Following Tailwind's spacing scale (4px base unit):
- `space-y-4` (16px) - Default section spacing
- `space-y-8` (32px) - Large section spacing
- `px-4` (16px) - Default horizontal padding
- `py-12` (48px) - Section vertical padding

## 🔧 Development Workflow

### Getting Started
1. **Install dependencies**: `pnpm install`
2. **Start development**: `pnpm dev`
3. **Open browser**: `http://localhost:3000`

### Code Style Guidelines

#### TypeScript
```typescript
// Use interface for object shapes
interface User {
  id: string;
  name: string;
  email: string;
}

// Use type for unions and primitives
type Status = 'loading' | 'success' | 'error';

// Use const assertions for readonly arrays
const CATEGORIES = ['Food', 'Travel', 'Shopping'] as const;
```

#### React Components
```tsx
// Use function declarations for components
function ExpenseCard({ expense }: { expense: Expense }) {
  return (
    <Card className="p-4">
      <h3 className="font-semibold">{expense.title}</h3>
      <p className="text-muted-foreground">{expense.amount}</p>
    </Card>
  );
}

// Export at the bottom
export default ExpenseCard;
```

#### CSS Classes
```tsx
// Use Tailwind utility classes
<div className="flex items-center justify-between p-4 border rounded-lg">
  
// Group related classes
<div className="
  flex items-center justify-between
  p-4 border rounded-lg
  hover:bg-muted transition-colors
">

// Use cn() utility for conditional classes
<button className={cn(
  "px-4 py-2 rounded-md",
  isActive && "bg-primary text-primary-foreground",
  isDisabled && "opacity-50 cursor-not-allowed"
)}>
```

### File Naming Conventions
- **Components**: PascalCase (`ExpenseCard.tsx`)
- **Pages**: lowercase with hyphens (`expense-tracker/page.tsx`)
- **Utilities**: camelCase (`formatCurrency.ts`)
- **Types**: PascalCase (`Expense.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)

## 📁 Adding New Features

### 1. Adding a New Page
```bash
# Create page directory
mkdir src/app/expenses

# Create page component
touch src/app/expenses/page.tsx

# Create layout if needed
touch src/app/expenses/layout.tsx
```

### 2. Adding a New Component
```bash
# Create component file
touch src/components/ExpenseForm.tsx

# Add to index if creating multiple related components
touch src/components/expenses/index.ts
```

### 3. Adding shadcn/ui Components
```bash
# Example: Adding a Dialog component
npx shadcn@latest add dialog

# The component will be added to src/components/ui/dialog.tsx
```

## 🧪 Testing Strategy

### Unit Testing (Recommended Setup)
```bash
# Install testing dependencies
pnpm add -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

### Component Testing
```tsx
// __tests__/ExpenseCard.test.tsx
import { render, screen } from '@testing-library/react';
import ExpenseCard from '@/components/ExpenseCard';

test('renders expense information', () => {
  const expense = {
    id: '1',
    title: 'Coffee',
    amount: 450,
    category: 'Food'
  };
  
  render(<ExpenseCard expense={expense} />);
  
  expect(screen.getByText('Coffee')).toBeInTheDocument();
  expect(screen.getByText('₹450')).toBeInTheDocument();
});
```

## 🚀 Deployment

### Environment Variables
```env
# Production
NEXT_PUBLIC_APP_URL=https://your-domain.com
DATABASE_URL=postgresql://...
OPENAI_API_KEY=sk-...
```

### Build Process
```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Or deploy to Vercel
vercel --prod
```

## 🔍 Debugging

### Common Issues
1. **Hydration Errors**: Check for server/client rendering differences
2. **Tailwind Classes Not Applied**: Restart dev server after config changes
3. **TypeScript Errors**: Run `tsc --noEmit` to check types

### Development Tools
- **React Developer Tools**: Browser extension for component inspection
- **Tailwind CSS IntelliSense**: VS Code extension for class completion
- **TypeScript Hero**: VS Code extension for import management

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)

### Learning Resources
- [Next.js Learn Course](https://nextjs.org/learn)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/utility-first)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/new-feature`
3. **Commit** changes: `git commit -m "Add new feature"`
4. **Push** to branch: `git push origin feature/new-feature`
5. **Create** a Pull Request

### Commit Message Format
```
type(scope): description

feat(dashboard): add expense filtering
fix(api): resolve date formatting issue
docs(readme): update installation guide
style(ui): improve button hover states
```

---

Happy coding! 🎉
