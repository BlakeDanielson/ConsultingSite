"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/Header"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="hero-glow absolute inset-0 z-0"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Extraordinary Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? We&apos;re here to help you achieve breakthrough results. Get in touch to start your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Choose the way that works best for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Free Strategy Session */}
            <Card className="card-hover p-6 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Free Strategy Session</CardTitle>
                <CardDescription>
                  45-minute consultation to discuss your business goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Get personalized insights and a clear roadmap for your business growth.
                </p>
                <Button className="btn-primary w-full">
                  <Link href="/strategy-session">Book Your Session</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card className="card-hover p-6 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Direct Contact</CardTitle>
                <CardDescription>
                  Speak directly with our team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>hello@btadvising.com</span>
                  </div>
                </div>
                <Button variant="outline" className="btn-secondary w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* Message Us */}
            <Card className="card-hover p-6 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <CardDescription>
                  Use the form below to get in touch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>
                <Button 
                  variant="outline" 
                  className="btn-secondary w-full"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Go to Form
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your business and how we can help you achieve your goals
            </p>
          </div>
          
          <Card className="p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Message Sent Successfully!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <Button className="btn-primary">
                  <Link href="/strategy-session">Book Your Free Strategy Session</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What can we help you with?"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your business, current challenges, and goals..."
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    type="submit" 
                    className="btn-primary flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <Button variant="outline" className="btn-secondary flex-1">
                    <Link href="/strategy-session">Or Book a Free Strategy Session</Link>
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Business Information</h2>
            <p className="text-lg text-muted-foreground">
              Professional consulting services for growing American businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover p-6 text-center">
              <CardHeader>
                <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Serving businesses across the United States
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Remote consultations available
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover p-6 text-center">
              <CardHeader>
                <Clock className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM EST</p>
                  <p className="text-sm mt-2">
                    Emergency support available
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover p-6 text-center">
              <CardHeader>
                <Phone className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">
                  (555) 123-4567
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Direct line to our team
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover p-6 text-center">
              <CardHeader>
                <Mail className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">
                  hello@btadvising.com
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  We respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 section-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Don&apos;t let another day pass without taking action. Your competitors aren&apos;t waiting, and neither should you. Let&apos;s build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
              <Link href="/strategy-session">Get Your Free Strategy Session</Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
              <Link href="/services/business-growth">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 