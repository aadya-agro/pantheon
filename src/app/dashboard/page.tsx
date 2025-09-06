import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Plus, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Settings,
  Bell,
  User,
  Filter,
  Download,
  Calendar
} from "lucide-react"
import { formatCurrency } from "@/lib/utils"

const mockExpenses = [
  { id: 1, merchant: "Swiggy", amount: 420, category: "Food & Dining", date: "2024-01-15", time: "2:30 PM", isAutomated: true, source: "SMS" },
  { id: 2, merchant: "Uber", amount: 185, category: "Transportation", date: "2024-01-15", time: "10:15 AM", isAutomated: true, source: "SMS" },
  { id: 3, merchant: "Amazon", amount: 1299, category: "Shopping", date: "2024-01-14", time: "6:45 PM", isAutomated: true, source: "Email" },
  { id: 4, merchant: "Netflix", amount: 799, category: "Entertainment", date: "2024-01-14", time: "12:00 PM", isAutomated: true, source: "SMS" },
  { id: 5, merchant: "Starbucks", amount: 280, category: "Food & Dining", date: "2024-01-14", time: "9:30 AM", isAutomated: false, source: "Manual" },
  { id: 6, merchant: "Shell Petrol Pump", amount: 2500, category: "Transportation", date: "2024-01-13", time: "4:20 PM", isAutomated: true, source: "SMS" },
]

const categoryColors: Record<string, string> = {
  "Food & Dining": "bg-orange-500",
  "Transportation": "bg-blue-500",
  "Shopping": "bg-purple-500",
  "Entertainment": "bg-pink-500",
  "Bills & Utilities": "bg-green-500",
  "Healthcare": "bg-red-500"
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Adya Dashboard</span>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search expenses..."
                className="pl-10 w-80"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Expense
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                This Month
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹45,820</div>
              <div className="text-xs text-red-500 mt-1">+12.5% from last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Automated
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <div className="text-xs text-green-500 mt-1">of expenses captured</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Categories
              </CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-muted-foreground mt-1">active categories</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Avg. Daily
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹1,527</div>
              <div className="text-xs text-muted-foreground mt-1">spending per day</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Expense List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Expenses</CardTitle>
                <CardDescription>
                  Your latest transactions, automatically captured and categorized
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockExpenses.map((expense) => (
                    <div key={expense.id} className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                          {expense.merchant.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{expense.merchant}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${categoryColors[expense.category] || 'bg-gray-500'}`} />
                            <span>{expense.category}</span>
                            {expense.isAutomated && (
                              <Badge variant="secondary" className="text-xs py-0 px-1.5">
                                {expense.source}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">-{formatCurrency(expense.amount)}</div>
                        <div className="text-sm text-muted-foreground">{expense.date} • {expense.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Top Category</span>
                  <span className="text-sm font-medium">Food & Dining</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Most Used Merchant</span>
                  <span className="text-sm font-medium">Swiggy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Biggest Expense</span>
                  <span className="text-sm font-medium">₹2,500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Budget Remaining</span>
                  <span className="text-sm font-medium text-green-600">₹14,180</span>
                </div>
              </CardContent>
            </Card>

            {/* Automation Status */}
            <Card>
              <CardHeader>
                <CardTitle>Automation Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SMS Banking</span>
                    <Badge variant="default" className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email Receipts</span>
                    <Badge variant="default" className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">UPI Notifications</span>
                    <Badge variant="default" className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Receipt Scanning</span>
                    <Badge variant="secondary">Setup Required</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
