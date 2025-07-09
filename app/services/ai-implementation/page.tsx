import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import Link from "next/link"

export default function AIImplementationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="hero-glow absolute inset-0 z-0"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
              Transform Your Business With{" "}
              <span className="gradient-text">Strategic AI Implementation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For forward-thinking businesses ready to leverage AI for competitive advantage
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
              AI is transforming business, but most companies struggle to implement it effectively
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">AI Overwhelm & Confusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The AI landscape is vast and confusing, making it difficult to know where to start or which tools will actually benefit your business.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">Scattered AI Experiments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your team is trying various AI tools without a strategic approach, leading to wasted time and resources with minimal impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">Fear of Being Left Behind</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You know AI is important for staying competitive, but you&apos;re concerned about falling behind while competitors gain an advantage.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-red-400">No Clear ROI Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can&apos;t see a clear path to measurable ROI from AI investments, making it difficult to justify the time and resources required.
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
              Strategic AI implementation that delivers measurable business value
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">AI Readiness Assessment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive evaluation of your current processes, data infrastructure, and team capabilities to identify the best AI opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Custom AI Strategy Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tailored AI roadmap that aligns with your business goals, prioritizes high-impact use cases, and ensures sustainable implementation.
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
                  <h3 className="font-semibold text-xl mb-3">Phased Implementation & Training</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Systematic rollout of AI solutions with comprehensive team training and change management to ensure successful adoption.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Performance Monitoring & Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Continuous monitoring, measurement, and optimization of AI implementations to maximize ROI and business impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">High-Impact AI Use Cases</h2>
            <p className="text-lg text-muted-foreground">
              Proven AI applications that deliver immediate business value
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl gradient-text">Customer Service Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intelligent chatbots and automated response systems that handle routine inquiries, freeing your team for complex customer issues.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl gradient-text">Sales Process Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-powered lead scoring, automated follow-ups, and predictive analytics to increase conversion rates and shorten sales cycles.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl gradient-text">Content Creation & Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automated content generation, personalized marketing campaigns, and social media management to scale your marketing efforts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl gradient-text">Data Analysis & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced analytics and predictive modeling to uncover hidden patterns and make data-driven decisions faster.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl gradient-text">Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intelligent automation of repetitive tasks, document processing, and workflow management to improve efficiency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl gradient-text">Financial Forecasting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-powered financial modeling and forecasting to improve budgeting, cash flow management, and strategic planning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">What You Get</h2>
            <p className="text-lg text-muted-foreground">
              Complete AI transformation with measurable business impact
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Custom AI Strategy & Implementation Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A comprehensive AI strategy tailored to your business, with a phased implementation roadmap that prioritizes high-impact use cases and ensures sustainable adoption.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Deployed AI Solutions & Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fully implemented AI tools and systems that integrate seamlessly with your existing workflows and deliver immediate business value.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Team Training & Change Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Comprehensive training programs and change management support to ensure your team embraces and effectively uses AI tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl gradient-text">Performance Monitoring & Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ongoing monitoring, measurement, and optimization of AI implementations to ensure continuous improvement and maximum ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Typical Results</h2>
            <p className="text-lg text-muted-foreground">
              Real improvements our clients achieve within 90 days
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold gradient-text">50%</div>
              <h3 className="text-xl font-semibold">Time Savings</h3>
              <p className="text-muted-foreground">Average reduction in time spent on routine tasks</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold gradient-text">35%</div>
              <h3 className="text-xl font-semibold">Productivity Increase</h3>
              <p className="text-muted-foreground">Improvement in overall team productivity</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold gradient-text">200%</div>
              <h3 className="text-xl font-semibold">ROI Within 12 Months</h3>
              <p className="text-muted-foreground">Average return on AI investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Stop being overwhelmed by AI possibilities. Get a free AI readiness assessment to identify your highest-impact opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
              <Link href="/strategy-session">Get Your Free Strategy Session</Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
              <Link href="/services/operations">Learn About Operations Optimization</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 