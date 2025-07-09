import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/Header"

export default function StrategySessionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="hero-glow absolute inset-0 z-0"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
              Get Your Custom{" "}
              <span className="gradient-text">Growth Roadmap</span>
              {" "}Free
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              45-minute strategy session to identify your biggest opportunities and create a clear action plan
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - What You'll Discover */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">What You&apos;ll Discover</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">The #1 bottleneck limiting your growth</h3>
                      <p className="text-muted-foreground">We&apos;ll identify the single biggest obstacle preventing your business from scaling efficiently.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Which AI and automation opportunities will give you the biggest ROI</h3>
                      <p className="text-muted-foreground">Discover specific technology solutions that will transform your operations and bottom line.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">A clear 90-day action plan to accelerate your results</h3>
                      <p className="text-muted-foreground">Walk away with a concrete roadmap and immediate next steps you can implement.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">How businesses like yours have achieved 30-50% efficiency gains</h3>
                      <p className="text-muted-foreground">Real examples and case studies from companies in your industry and size range.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Elements */}
              <div className="space-y-4 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">No sales pitch - just strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">Typically worth $2,500 - yours free</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">Available for US businesses only</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <Card className="card-hover p-8">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-center">Book Your Free Strategy Session</CardTitle>
                  <CardDescription className="text-center text-muted-foreground">
                    Fill out the form below and we&apos;ll contact you within 24 hours to schedule your session.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your Company Inc." required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="revenue">Annual Revenue Range</Label>
                      <select id="revenue" className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground">
                        <option value="">Select range...</option>
                        <option value="under-1m">Under $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-10m">$5M - $10M</option>
                        <option value="10m-25m">$10M - $25M</option>
                        <option value="25m-50m">$25M - $50M</option>
                        <option value="over-50m">Over $50M</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="challenge">What&apos;s your biggest business challenge right now?</Label>
                      <Textarea 
                        id="challenge" 
                        placeholder="Describe your main challenge or goal..."
                        className="min-h-[100px]"
                        required 
                      />
                    </div>
                    
                    <Button className="w-full btn-primary text-lg py-6" type="submit">
                      Get My Free Strategy Session
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to receive communications from BT Advising. 
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Growing Businesses Across America</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl font-bold gradient-text">40%</div>
              <p className="text-muted-foreground">Average efficiency improvement within 90 days</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold gradient-text">$2.3M</div>
              <p className="text-muted-foreground">Average additional revenue generated in year one</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold gradient-text">95%</div>
              <p className="text-muted-foreground">Client satisfaction and retention rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 