import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="hero-glow absolute inset-0 z-0"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
              Two Perspectives.{" "}
              <span className="gradient-text">One Powerful Partnership.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where battle-tested business wisdom meets cutting-edge innovation to create extraordinary results for growing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A decade ago, we came together at an AgTech startup with a shared vision: combine proven business wisdom with innovative technology to create something extraordinary. After successfully raising and deploying $80M together, we discovered that our complementary skills created outcomes neither of us could achieve alone.
              </p>
            </div>
            
            <div className="text-center pt-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we bring that same partnership approach to growing businesses across America. Our unique combination of strategic thinking and tactical execution helps companies break through growth barriers and achieve sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Profiles */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet the Partnership</h2>
            <p className="text-lg text-muted-foreground">
              Equal partners bringing complementary expertise to every challenge
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Partner 1 - The Strategist */}
            <Card className="card-hover p-8">
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">TK</span>
                </div>
                <CardTitle className="text-2xl">The Strategist</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Sales & Operations Expert
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Decades of building and scaling businesses across multiple industries</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Expert in sales methodology, operations optimization, and strategic growth</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Battle-tested across various market conditions and business challenges</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Proven track record of navigating every challenge a growing business faces</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;I&apos;ve seen what works and what doesn&apos;t. My focus is on proven strategies that deliver real results, not theory.&rdquo;
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Partner 2 - The Innovator */}
            <Card className="card-hover p-8">
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">BD</span>
                </div>
                <CardTitle className="text-2xl">The Innovator</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Financial & Technology Expert
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Financial analysis and strategic transaction specialist</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Operational excellence and process optimization leader</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">AI and technology implementation expert for real-world business applications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Transforms strategic vision into measurable, actionable results</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;Technology should serve the business, not the other way around. I focus on practical solutions that drive real ROI.&rdquo;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-muted-foreground">
              Why the combination creates better outcomes for our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Equal Partnership Means Balanced Perspective</h3>
                  <p className="text-muted-foreground">You get both strategic thinking and tactical execution, ensuring solutions are both visionary and practical.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proven + Innovative</h3>
                  <p className="text-muted-foreground">We combine time-tested business principles with cutting-edge technology to create sustainable competitive advantages.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Focus on Sustainable Solutions</h3>
                  <p className="text-muted-foreground">We build systems and processes that scale with your business, not quick fixes that break under pressure.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Client Success Over Consulting Fees</h3>
                  <p className="text-muted-foreground">Our success is measured by your results, not billable hours. We&apos;re invested in your long-term growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Our Commitment to American Business</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We believe that strong businesses create strong communities. Our partnership is dedicated to helping American companies compete globally while creating jobs and opportunities at home. Every client we work with contributes to a stronger, more innovative economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
              <Link href="/strategy-session">Get Your Free Strategy Session</Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
              <Link href="/results">See Our Results</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 