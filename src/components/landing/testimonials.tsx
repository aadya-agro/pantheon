import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Tech Startup",
    avatar: "PS",
    content: "Adya has completely transformed how I manage my expenses. I went from spending 30 minutes daily on expense tracking to zero manual work. The SMS integration is pure magic!",
    rating: 5,
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Freelancer",
    company: "Digital Marketing",
    avatar: "AP",
    content: "The categorization accuracy is incredible. It correctly identified 'Swiggy' as food, 'Uber' as transport, and even my irregular expenses. Saves me hours every week.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "Product Manager",
    company: "E-commerce",
    avatar: "SR",
    content: "Privacy was my biggest concern, but Adya's local processing and encryption gave me confidence. The insights helped me reduce spending by 25% in just 2 months.",
    rating: 5,
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-purple-50/30 dark:from-blue-950/10 dark:to-purple-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Thousands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users say about their experience with automated expense tracking
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Quote className="w-3 h-3 text-white" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats below testimonials */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">₹50Cr+</div>
            <div className="text-sm text-muted-foreground">Expenses Tracked</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">94.2%</div>
            <div className="text-sm text-muted-foreground">Automation Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
            <div className="text-sm text-muted-foreground">Avg. Savings</div>
          </div>
        </div>
      </div>
    </section>
  )
}
