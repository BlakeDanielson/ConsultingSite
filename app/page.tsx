import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="hero-glow absolute inset-0 z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-glow">
              Scale Your Business{" "}
              <span className="gradient-text">the Smart Way</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We partner with ambitious business leaders to break through growth barriers using proven strategies and cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
                <Link href="/strategy-session">Get Your Free Strategy Session</Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
                <Link href="/about">See How We Help Businesses Like Yours</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 px-4 section-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold mb-8">Sound Familiar?</h2>
              <ul className="space-y-6 text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 mt-1 text-xl">✓</span>
                  <span>You&apos;re growing but profits aren&apos;t keeping pace</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 mt-1 text-xl">✓</span>
                  <span>Your team is overwhelmed by manual processes</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 mt-1 text-xl">✓</span>
                  <span>Sales are inconsistent and unpredictable</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 mt-1 text-xl">✓</span>
                  <span>You know technology could help but don&apos;t know where to start</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 mt-1 text-xl">✓</span>
                  <span>You&apos;re working IN the business instead of ON the business</span>
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold mb-8">We Fix That.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our unique partnership combines battle-tested business wisdom with cutting-edge technology implementation to create sustainable, scalable solutions for your growing business.
              </p>
              <Button className="btn-primary">
                <Link href="/about">Learn About Our Partnership</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How We Help You Scale</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Four proven service areas designed to transform your business operations and accelerate growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Business Growth & Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Strategic growth that actually gets executed with clear roadmaps and milestone tracking.
                </CardDescription>
                <Button variant="outline" size="sm" className="btn-secondary">
                  <Link href="/services/business-growth">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Operations & Efficiency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Turn your operations into your competitive advantage with AI-powered automation.
                </CardDescription>
                <Button variant="outline" size="sm" className="btn-secondary">
                  <Link href="/services/operations">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Sales & Revenue Optimization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Build a sales engine that scales with your ambition and delivers predictable results.
                </CardDescription>
                <Button variant="outline" size="sm" className="btn-secondary">
                  <Link href="/services/sales">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">AI Implementation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  AI solutions that actually work for real businesses, integrated with your existing systems.
                </CardDescription>
                <Button variant="outline" size="sm" className="btn-secondary">
                  <Link href="/services/ai-implementation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Partnership Teaser */}
      <section className="py-24 px-4 section-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Two Perspectives. One Powerful Partnership.</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Where battle-tested business wisdom meets cutting-edge innovation. 
            We bring the perfect combination of strategic thinking and tactical execution to every challenge.
          </p>
          <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
            <Link href="/about">Meet the Partnership</Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Scale Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Get your custom growth roadmap in a 45-minute strategy session - completely free.
          </p>
          <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
            <Link href="/strategy-session">Get Your Free Strategy Session</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
