import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Connect Your Sources",
    description: "Link your SMS, email, and payment apps for automatic data capture",
    details: "Secure integration with banking SMS, email receipts, and payment notifications"
  },
  {
    number: "02",
    title: "AI Processes Data",
    description: "Our intelligent engine extracts and categorizes expense information",
    details: "Advanced NLP and machine learning algorithms ensure 95%+ accuracy"
  },
  {
    number: "03",
    title: "Review & Confirm",
    description: "Quick review of automatically generated expense entries",
    details: "Smart suggestions with confidence scores for manual verification"
  },
  {
    number: "04",
    title: "Track & Analyze",
    description: "Get insights, trends, and reports without any manual work",
    details: "Real-time dashboards with spending patterns and budget tracking"
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Adya
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From setup to insights in minutes. Our AI handles the complexity while you focus on what matters.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 md:left-16 top-20 w-0.5 h-16 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800" />
              )}
              
              <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                
                {/* Step content */}
                <Card className="flex-1 border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      {step.title}
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </CardTitle>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {step.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.details}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200/30">
            <span className="text-sm text-muted-foreground">Ready to get started?</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  )
}
