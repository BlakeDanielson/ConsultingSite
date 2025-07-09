import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import Link from "next/link"

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="hero-glow absolute inset-0 z-0"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
              Turn Your Operations Into Your{" "}
              <span className="gradient-text">Competitive Advantage</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For companies drowning in manual processes and inefficiencies that limit growth
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your operations are holding you back from scaling efficiently and profitably
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">Manual Process Overload</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your team spends countless hours on manual tasks that could be automated, creating errors and eating up valuable time that should be spent on growth activities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">No Business Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You lack real-time visibility into what&apos;s actually happening in your business, making it impossible to make data-driven decisions or identify problems early.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">Scaling Bottlenecks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your operational systems can&apos;t handle growth, creating bottlenecks that slow down everything from customer service to product delivery.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">Team Overwhelm</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your team is overwhelmed by repetitive tasks, leading to burnout, errors, and difficulty attracting and retaining top talent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-muted-foreground">
              Systematic operational transformation that creates sustainable competitive advantages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Operational Assessment & Process Mapping</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive analysis of your current operations to identify inefficiencies, bottlenecks, and automation opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">AI & Automation Implementation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategic deployment of AI tools and automation systems that integrate seamlessly with your existing workflows.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Custom Dashboard & Reporting Systems</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Real-time business intelligence dashboards that give you complete visibility into your operations and performance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Team Training & Change Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive training and change management to ensure smooth adoption and maximize the value of new systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">What You Get</h2>
            <p className="text-lg text-muted-foreground">
              Operational transformation that scales with your business
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Streamlined Processes & Automated Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Eliminate manual bottlenecks with intelligent automation that handles routine tasks, reduces errors, and frees your team to focus on high-value activities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Real-Time Business Intelligence Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Custom dashboards that give you complete visibility into your operations, performance metrics, and key indicators - accessible from anywhere, anytime.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Improved Efficiency & Reduced Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Measurable improvements in operational efficiency, typically resulting in 30-50% reduction in process times and significant cost savings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Scalable Operational Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Systems and processes designed to scale with your growth, eliminating the need to rebuild operations as you expand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Typical Results</h2>
            <p className="text-lg text-muted-foreground">
              Real improvements our clients achieve within 90 days
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold gradient-text">40%</div>
              <h3 className="text-xl font-semibold">Faster Process Times</h3>
              <p className="text-muted-foreground">Average reduction in time to complete core business processes</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold gradient-text">60%</div>
              <h3 className="text-xl font-semibold">Fewer Manual Tasks</h3>
              <p className="text-muted-foreground">Reduction in repetitive manual work through intelligent automation</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold gradient-text">25%</div>
              <h3 className="text-xl font-semibold">Cost Reduction</h3>
              <p className="text-muted-foreground">Average operational cost savings within the first year</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Operations?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Stop letting inefficient operations hold back your growth. Get a free operational assessment to identify your biggest opportunities for improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
              <Link href="/strategy-session">Get Your Free Strategy Session</Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
              <Link href="/services/ai-implementation">Learn About AI Implementation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 