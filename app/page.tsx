import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Scale Your Business{" "}
              <span className="gradient-text">the Smart Way</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We partner with ambitious business leaders to break through growth barriers using proven strategies and cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/strategy-session">Get Your Free Strategy Session</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">See How We Help Businesses Like Yours</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sound Familiar?</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  You're growing but profits aren't keeping pace
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  Your team is overwhelmed by manual processes
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  Sales are inconsistent and unpredictable
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  You know technology could help but don't know where to start
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  You're working IN the business instead of ON the business
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">We Fix That.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our unique partnership combines battle-tested business wisdom with cutting-edge technology implementation to create sustainable, scalable solutions for your growing business.
              </p>
              <Button asChild>
                <Link href="/about">Learn About Our Partnership</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Help You Scale</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four proven service areas designed to transform your business operations and accelerate growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Business Growth & Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Strategic growth that actually gets executed with clear roadmaps and milestone tracking.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/business-growth">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Operations & Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Turn your operations into your competitive advantage with AI-powered automation.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/operations">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Sales & Revenue Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Build a sales engine that scales with your ambition and delivers predictable results.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/sales">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">AI Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  AI solutions that actually work for real businesses, integrated with your existing systems.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/ai-implementation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Partnership Teaser */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Two Perspectives. One Powerful Partnership.</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Where battle-tested business wisdom meets cutting-edge innovation. 
            We bring the perfect combination of strategic thinking and tactical execution to every challenge.
          </p>
          <Button size="lg" asChild>
            <Link href="/about">Meet the Partnership</Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get your custom growth roadmap in a 45-minute strategy session - completely free.
          </p>
          <Button size="lg" asChild>
            <Link href="/strategy-session">Get Your Free Strategy Session</Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 