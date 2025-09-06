import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, PieChart, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

interface StatsData {
  totalExpenses: number
  monthlyChange: number
  categoryBreakdown: {
    category: string
    amount: number
    percentage: number
    color: string
  }[]
  recentTransactions: {
    id: string
    merchant: string
    amount: number
    category: string
    date: string
    isAutomated: boolean
  }[]
}

const mockData: StatsData = {
  totalExpenses: 45820,
  monthlyChange: 12.5,
  categoryBreakdown: [
    { category: "Food & Dining", amount: 15240, percentage: 33.3, color: "bg-orange-500" },
    { category: "Transportation", amount: 8950, percentage: 19.5, color: "bg-blue-500" },
    { category: "Shopping", amount: 7600, percentage: 16.6, color: "bg-purple-500" },
    { category: "Bills & Utilities", amount: 6800, percentage: 14.8, color: "bg-green-500" },
    { category: "Entertainment", amount: 4230, percentage: 9.2, color: "bg-pink-500" },
    { category: "Others", amount: 3000, percentage: 6.6, color: "bg-gray-500" }
  ],
  recentTransactions: [
    { id: "1", merchant: "Swiggy", amount: 420, category: "Food", date: "2 hours ago", isAutomated: true },
    { id: "2", merchant: "Uber", amount: 185, category: "Transport", date: "4 hours ago", isAutomated: true },
    { id: "3", merchant: "Amazon", amount: 1299, category: "Shopping", date: "1 day ago", isAutomated: true },
    { id: "4", merchant: "Netflix", amount: 799, category: "Entertainment", date: "2 days ago", isAutomated: true }
  ]
}

export function ExpenseStats() {
  const isPositiveChange = mockData.monthlyChange > 0
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 dark:from-background dark:to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-time
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Analytics
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant insights into your spending patterns with automated categorization and intelligent reporting
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Total Expenses */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Expenses
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(mockData.totalExpenses)}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                {isPositiveChange ? (
                  <ArrowUpRight className="h-3 w-3 text-red-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-green-500 mr-1" />
                )}
                <span className={isPositiveChange ? "text-red-500" : "text-green-500"}>
                  {Math.abs(mockData.monthlyChange)}%
                </span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Automation Rate */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Automation Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <div className="text-xs text-muted-foreground">
                Expenses captured automatically
              </div>
            </CardContent>
          </Card>
          
          {/* Categories Tracked */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Categories
              </CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-muted-foreground">
                Smart categories identified
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Category Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Category Breakdown</CardTitle>
              <CardDescription>Your spending distribution this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockData.categoryBreakdown.map((item) => (
                <div key={item.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm font-medium">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{formatCurrency(item.amount)}</div>
                    <div className="text-xs text-muted-foreground">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Automatically captured expenses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockData.recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                      {transaction.merchant.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{transaction.merchant}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <span>{transaction.category}</span>
                        {transaction.isAutomated && (
                          <Badge variant="secondary" className="text-xs py-0 px-1.5">
                            Auto
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">-{formatCurrency(transaction.amount)}</div>
                    <div className="text-xs text-muted-foreground">{transaction.date}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
