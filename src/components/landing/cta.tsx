import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Mail, CheckCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/20 blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-white/15 blur-xl" />
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block">Expense Tracking?</span>
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who have already automated their expense management with Adya. Start your free trial today.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>Cancel anytime</span>
            </div>
          </div>
          
          {/* Email signup */}
          <Card className="max-w-md mx-auto bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-lg">Start Your Free Trial</CardTitle>
              <CardDescription className="text-blue-100">
                Get started in less than 2 minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white/40"
                  />
                </div>
                <Button 
                  className="bg-white text-blue-600 hover:bg-white/90 font-medium"
                  size="default"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-3 text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>
          
          {/* Alternative CTA */}
          <div className="mt-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8"
            >
              <Mail className="w-4 h-4 mr-2" />
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
