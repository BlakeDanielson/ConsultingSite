"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl md:text-2xl gradient-text">BT Advising</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] bg-card border border-border">
                    <div className="grid gap-1">
                      <Link
                        href="/services/business-growth"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Business Growth & Strategy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Strategic growth that actually gets executed
                        </p>
                      </Link>
                      <Link
                        href="/services/operations"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Operations & Efficiency</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Turn your operations into your competitive advantage
                        </p>
                      </Link>
                      <Link
                        href="/services/sales"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Sales & Revenue Optimization</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Build a sales engine that scales with your ambition
                        </p>
                      </Link>
                      <Link
                        href="/services/ai-implementation"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">AI Implementation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          AI solutions that actually work for real businesses
                        </p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/about" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  About
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/results" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Results
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/contact" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="btn-primary ml-4 px-6 py-2 h-10">
            <Link href="/strategy-session">Get Free Strategy Session</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <Button className="btn-primary px-3 py-2 h-9 text-xs">
            <Link href="/strategy-session">Get Session</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-background backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 h-full bg-background border-t border-border">
            <nav className="flex flex-col space-y-4">
              {/* Services Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Services</h3>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/services/business-growth"
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Business Growth & Strategy
                  </Link>
                  <Link
                    href="/services/operations"
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Operations & Efficiency
                  </Link>
                  <Link
                    href="/services/sales"
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Sales & Revenue Optimization
                  </Link>
                  <Link
                    href="/services/ai-implementation"
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    AI Implementation
                  </Link>
                </div>
              </div>

              {/* Other Navigation Items */}
              <Link
                href="/about"
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-t border-border"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link
                href="/results"
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-t border-border"
                onClick={toggleMobileMenu}
              >
                Results
              </Link>
              <Link
                href="/contact"
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-t border-border"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 