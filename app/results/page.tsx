import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import Link from "next/link"

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="hero-glow absolute inset-0 z-0"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
              Real Results From{" "}
              <span className="gradient-text">Real Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we've helped growing businesses break through barriers and achieve sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">The Numbers Don't Lie</h2>
            <p className="text-lg text-muted-foreground">
              Measurable impact across key business metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="card-hover p-6 text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold gradient-text mb-2">87%</div>
                <p className="text-muted-foreground">Average increase in operational efficiency</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6 text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold gradient-text mb-2">156%</div>
                <p className="text-muted-foreground">Average sales process improvement</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6 text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold gradient-text mb-2">42%</div>
                <p className="text-muted-foreground">Average reduction in manual processes</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6 text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold gradient-text mb-2">6-18</div>
                <p className="text-muted-foreground">Months to achieve target outcomes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real transformations from businesses just like yours
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Case Study 1 - Manufacturing */}
            <Card className="card-hover p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      Manufacturing • $12M Revenue
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Regional Manufacturer Doubles Production Capacity</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A family-owned manufacturing company was struggling with manual inventory tracking, 
                    inconsistent quality control, and production bottlenecks that limited their ability to take on larger contracts.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Implemented AI-powered inventory management and predictive maintenance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Streamlined quality control processes with automated tracking</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Optimized production scheduling and resource allocation</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">94%</div>
                    <p className="text-sm text-muted-foreground">Reduction in inventory waste</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">67%</div>
                    <p className="text-sm text-muted-foreground">Increase in production capacity</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">8 months</div>
                    <p className="text-sm text-muted-foreground">To full implementation</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case Study 2 - Construction */}
            <Card className="card-hover p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      Construction • $8M Revenue
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Construction Company Transforms Project Management</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A growing construction company was losing money on projects due to poor cost tracking, 
                    communication gaps, and inefficient resource management across multiple job sites.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Implemented integrated project management and cost tracking system</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Automated scheduling and resource allocation across job sites</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Streamlined communication between field teams and office</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">23%</div>
                    <p className="text-sm text-muted-foreground">Improvement in project margins</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">89%</div>
                    <p className="text-sm text-muted-foreground">Reduction in project delays</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">12 months</div>
                    <p className="text-sm text-muted-foreground">Full ROI achieved</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case Study 3 - Logistics */}
            <Card className="card-hover p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      Logistics • $25M Revenue
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Logistics Company Scales Operations with AI</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A regional logistics company was struggling with route optimization, customer service response times, 
                    and manual processes that prevented them from competing with larger players.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Deployed AI-powered route optimization and demand forecasting</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Automated customer service and shipment tracking</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Integrated real-time analytics and performance dashboards</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">31%</div>
                    <p className="text-sm text-muted-foreground">Reduction in fuel costs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">78%</div>
                    <p className="text-sm text-muted-foreground">Faster customer response times</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">6 months</div>
                    <p className="text-sm text-muted-foreground">To measurable results</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from business leaders who've transformed their operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover p-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael R.</h4>
                    <p className="text-sm text-muted-foreground">CEO, Regional Manufacturing</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "The partnership approach was exactly what we needed. We got both the strategic vision and the 
                  technical execution. Our production efficiency increased by 67% in just 8 months, and we're 
                  now taking on contracts we never could have handled before."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="card-hover p-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah L.</h4>
                    <p className="text-sm text-muted-foreground">President, Construction Company</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "Finally, consultants who actually understand our business. They didn't just give us a report - 
                  they worked alongside us to implement real solutions. Our project margins improved by 23% 
                  and we're completing projects ahead of schedule."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="card-hover p-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    D
                  </div>
                  <div>
                    <h4 className="font-semibold">David K.</h4>
                    <p className="text-sm text-muted-foreground">Owner, Logistics Company</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "The AI implementation was seamless and practical. No complex systems we couldn't understand - 
                  just solutions that made sense for our business. We're now competing with companies 10x our size 
                  and winning contracts we never thought possible."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="card-hover p-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div>
                    <h4 className="font-semibold">Jennifer M.</h4>
                    <p className="text-sm text-muted-foreground">VP of Operations, Distribution</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "What impressed me most was their commitment to our success. They didn't disappear after 
                  implementation - they stayed involved until we achieved our goals. Our operational efficiency 
                  increased by 89% and we're finally scalable."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Proven Process</h2>
            <p className="text-lg text-muted-foreground">
              How we deliver consistent results for growing businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Discovery & Assessment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive analysis of your current operations, challenges, and growth opportunities 
                    to create a tailored strategy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Strategic Planning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Development of a clear roadmap with specific milestones, timelines, and success metrics 
                    aligned with your business goals.
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
                  <h3 className="font-semibold text-xl mb-3">Implementation & Execution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hands-on implementation of solutions with your team, ensuring smooth adoption and 
                    minimal disruption to operations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Optimization & Growth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Continuous monitoring and refinement to maximize results and prepare your business 
                    for sustainable long-term growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the growing businesses that have transformed their operations and achieved sustainable growth 
              with our proven approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary">
                <Link href="/strategy-session">Get Your Free Strategy Session</Link>
              </Button>
              <Button asChild variant="outline" className="btn-secondary">
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Free 45-minute session • No sales pitch • Custom roadmap included
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 