import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Smartphone, 
  Mail, 
  Receipt, 
  Brain, 
  Shield, 
  BarChart3,
  Zap,
  Bell,
  Lock
} from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "SMS Integration",
    description: "Automatically captures expense data from banking SMS notifications and payment alerts",
    color: "text-blue-600 bg-blue-100 dark:bg-blue-900/20"
  },
  {
    icon: Mail,
    title: "Email Parsing",
    description: "Extracts transaction details from email receipts, confirmations, and invoices",
    color: "text-green-600 bg-green-100 dark:bg-green-900/20"
  },
  {
    icon: Receipt,
    title: "OCR Scanning",
    description: "Smart receipt scanning with AI-powered text extraction and data recognition",
    color: "text-purple-600 bg-purple-100 dark:bg-purple-900/20"
  },
  {
    icon: Brain,
    title: "Smart Categorization",
    description: "AI automatically categorizes expenses: Swiggy → Food, Uber → Transport",
    color: "text-orange-600 bg-orange-100 dark:bg-orange-900/20"
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Instant expense logging with zero lag between transaction and tracking",
    color: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Detailed insights, trends, and spending patterns with visual dashboards",
    color: "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/20"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "End-to-end encryption with local data processing and no data sharing",
    color: "text-red-600 bg-red-100 dark:bg-red-900/20"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Intelligent alerts for budget limits, unusual spending, and financial insights",
    color: "text-cyan-600 bg-cyan-100 dark:bg-cyan-900/20"
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Bank-grade security with AES-256 encryption and secure cloud storage",
    color: "text-pink-600 bg-pink-100 dark:bg-pink-900/20"
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50/50 dark:from-background dark:to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Effortless Tracking
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of expense management with our intelligent automation and security-first approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
