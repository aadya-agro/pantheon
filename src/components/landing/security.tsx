import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, FileCheck, Server, Zap } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "All data encrypted with AES-256 before transmission and storage",
    color: "text-green-600 bg-green-100 dark:bg-green-900/20"
  },
  {
    icon: Lock,
    title: "Local Processing",
    description: "OCR and categorization happen on your device when possible",
    color: "text-blue-600 bg-blue-100 dark:bg-blue-900/20"
  },
  {
    icon: Eye,
    title: "Zero Data Sharing",
    description: "Your financial data is never shared with third parties",
    color: "text-purple-600 bg-purple-100 dark:bg-purple-900/20"
  },
  {
    icon: FileCheck,
    title: "Audit Trails",
    description: "Complete transparency with detailed logs of all data access",
    color: "text-orange-600 bg-orange-100 dark:bg-orange-900/20"
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "SOC 2 compliant infrastructure with regular security audits",
    color: "text-red-600 bg-red-100 dark:bg-red-900/20"
  },
  {
    icon: Zap,
    title: "Minimal Data Collection",
    description: "Only collect essential data required for core functionality",
    color: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20"
  }
]

export function Security() {
  return (
    <section id="security" className="py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-background/50 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Bank-Grade Security
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Privacy is
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Our Priority
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the sensitivity of financial data. That's why we've built Adya with privacy-first principles and enterprise-grade security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature) => {
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
        
        {/* Security commitment */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/10 dark:to-blue-950/10">
            <CardContent className="p-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Security Promise</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We commit to maintaining the highest standards of data protection. Your financial information 
                  is encrypted, processed securely, and never used for any purpose beyond providing you with 
                  the best expense tracking experience.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>SOC 2 Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>GDPR Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Regular Audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>24/7 Monitoring</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
