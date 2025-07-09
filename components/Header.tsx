"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between px-6 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-bold text-2xl gradient-text">BT Advising</div>
        </Link>

        <div className="flex items-center space-x-8">
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
      </div>
    </header>
  )
} 