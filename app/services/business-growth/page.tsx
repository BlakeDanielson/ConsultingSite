import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import Link from "next/link"

export default function BusinessGrowthPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="hero-glow absolute inset-0 z-0"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
              Strategic Growth That{" "}
              <span className="gradient-text">Actually Gets Executed</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For business owners ready to scale systematically with clear roadmaps and milestone tracking
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
              Many businesses hit a growth plateau around $5-10M and struggle to break through to the next level
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">Strategy Sessions That Collect Dust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You've paid for strategic planning sessions that resulted in impressive binders that now sit on your shelf, unused and forgotten.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">No Clear Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You know where you want to go, but lack a clear, actionable path from your current state to your desired future.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">Growth Plateau</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Revenue has stagnated, and the strategies that got you here aren't working to get you to the next level.
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
              Strategic planning with implementation focus - because execution is everything
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Strategic Planning with Implementation Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't just create strategies - we build detailed implementation plans with clear ownership, timelines, and success metrics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Financial Modeling and Scenario Planning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Understand the financial implications of your growth decisions with detailed modeling and multiple scenario analysis.
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
                  <h3 className="font-semibold text-xl mb-3">Growth Roadmap with Clear Milestones</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A step-by-step roadmap that breaks down your growth goals into achievable milestones with regular check-ins.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">M&A Readiness Preparation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Position your business for potential acquisition or investment with proper systems, processes, and documentation.
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
              Comprehensive strategic support that drives real results
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Custom Growth Strategy & Implementation Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A detailed strategic plan tailored to your business, industry, and goals, complete with implementation timelines, resource requirements, and success metrics.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Financial Projections & Milestone Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Comprehensive financial modeling with multiple scenarios, cash flow projections, and milestone tracking systems to keep you on course.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Monthly Strategy Reviews & Adjustments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Regular strategic reviews to assess progress, address challenges, and adjust the plan based on market conditions and business performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Access to Our Network of Growth Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Introductions to key partners, vendors, and resources that can accelerate your growth, from technology providers to potential investors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Break Through Your Growth Plateau?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Get a custom strategic growth plan that actually gets executed. Start with a free strategy session to identify your biggest growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
              <Link href="/strategy-session">Get Your Free Strategy Session</Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
              <Link href="/about">Learn About Our Partnership</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 