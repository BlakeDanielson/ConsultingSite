import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import Link from "next/link"

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="hero-glow absolute inset-0 z-0"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
              Build a Sales Engine That{" "}
              <span className="gradient-text">Scales With Your Ambition</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For businesses with inconsistent sales or untapped revenue potential
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
              Your sales performance is unpredictable, leaving money on the table and limiting growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">Inconsistent Sales Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your sales results vary wildly from month to month, making it impossible to plan for growth or predict cash flow accurately.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">No Clear Sales Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your team wings it on every sales call, with no standardized methodology or documented process to ensure consistent results.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">Underutilized CRM Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your CRM is either unused, poorly configured, or filled with outdated data that doesn&apos;t help drive sales decisions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">Unpredictable Revenue Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can&apos;t accurately forecast revenue, making it difficult to make strategic decisions or secure financing for growth.
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
              Systematic sales transformation that creates predictable, scalable revenue growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Sales Process Design & Documentation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Create a proven, repeatable sales methodology tailored to your industry and customer base, with clear stages and success criteria.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">CRM Optimization & Automation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transform your CRM into a powerful sales engine with automated workflows, intelligent lead scoring, and actionable insights.
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
                  <h3 className="font-semibold text-xl mb-3">Team Training & Performance Systems</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive sales training and performance management systems that ensure consistent execution and continuous improvement.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Revenue Forecasting & Pipeline Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced forecasting models and pipeline management systems that provide accurate revenue predictions and strategic insights.
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
              A complete sales transformation that drives predictable revenue growth
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Documented Sales Methodology & Processes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A complete sales playbook with proven methodologies, scripts, objection handling, and closing techniques tailored to your business and industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Optimized CRM with Automation Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A fully configured CRM system with automated lead nurturing, follow-up sequences, and intelligent pipeline management that works for your team.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Sales Team Training & Ongoing Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Comprehensive training programs and ongoing coaching to ensure your team consistently executes the new processes and continuously improves performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Predictable Revenue Growth Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Advanced forecasting models, pipeline management systems, and performance dashboards that provide accurate revenue predictions and strategic insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sales Transformation Process */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Sales Transformation Process</h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to building a high-performing sales organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-center">Assessment & Analysis</h3>
              <p className="text-muted-foreground text-center">
                Comprehensive analysis of your current sales process, team performance, and market opportunities to identify gaps and opportunities.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-center">Design & Implementation</h3>
              <p className="text-muted-foreground text-center">
                Design and implement customized sales processes, CRM systems, and training programs that align with your business goals and culture.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-center">Optimization & Scaling</h3>
              <p className="text-muted-foreground text-center">
                Continuous monitoring, optimization, and scaling of your sales systems to ensure sustained growth and performance improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Typical Results</h2>
            <p className="text-lg text-muted-foreground">
              Real improvements our clients achieve within 6 months
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold gradient-text">45%</div>
              <h3 className="text-xl font-semibold">Increase in Close Rate</h3>
              <p className="text-muted-foreground">Average improvement in sales conversion rates</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold gradient-text">30%</div>
              <h3 className="text-xl font-semibold">Shorter Sales Cycle</h3>
              <p className="text-muted-foreground">Reduction in average time to close deals</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold gradient-text">85%</div>
              <h3 className="text-xl font-semibold">Forecast Accuracy</h3>
              <p className="text-muted-foreground">Improvement in revenue forecasting precision</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Build a Predictable Sales Engine?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Stop leaving revenue on the table with inconsistent sales performance. Get a free sales assessment to identify your biggest opportunities for improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
              <Link href="/strategy-session">Get Your Free Strategy Session</Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
              <Link href="/services/business-growth">Learn About Strategic Growth</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 