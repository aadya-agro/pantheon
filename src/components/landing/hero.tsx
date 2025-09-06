import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/50 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
            <Sparkles className="w-4 h-4" />
            Smart Expense Automation
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block">Redefining</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Effortless Tracking
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Say goodbye to manual expense entry. Adya automatically captures, categorizes, and tracks your expenses from SMS, emails, and receipts with AI-powered precision.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>Instant categorization</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Privacy-first design</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Zero manual entry</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/dashboard">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 h-auto text-base"
              >
                Try Dashboard Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-3 h-auto text-base">
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 text-xs text-muted-foreground">
            <p className="mb-2">Trusted by financial enthusiasts</p>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2">5.0 • 100% privacy guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
