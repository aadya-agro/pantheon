export interface Expense {
  id: string
  amount: number
  category: ExpenseCategory
  description: string
  merchant?: string
  date: Date
  source: ExpenseSource
  isAutomated: boolean
  confidence?: number
}

export interface ExpenseCategory {
  id: string
  name: string
  color: string
  icon: string
  keywords: string[]
}

export interface ExpenseSource {
  type: 'sms' | 'email' | 'notification' | 'receipt' | 'manual'
  provider?: string
  rawData?: string
  confidence?: number
}

export interface DashboardStats {
  totalExpenses: number
  monthlyTotal: number
  categoryBreakdown: CategoryBreakdown[]
  recentExpenses: Expense[]
  trends: {
    thisMonth: number
    lastMonth: number
    percentageChange: number
  }
}

export interface CategoryBreakdown {
  category: ExpenseCategory
  amount: number
  count: number
  percentage: number
}

export interface User {
  id: string
  name: string
  email: string
  preferences: UserPreferences
}

export interface UserPreferences {
  currency: string
  categories: ExpenseCategory[]
  automationEnabled: boolean
  notifications: NotificationSettings
}

export interface NotificationSettings {
  weeklyReport: boolean
  monthlyReport: boolean
  budgetAlerts: boolean
  unusualSpending: boolean
}
