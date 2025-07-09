# Codebase Summary - BT Advising Website Project

## Project Overview
Building a lead generation website for a consulting partnership specializing in AI-powered operational and sales solutions for US businesses under 100 employees/$50M revenue.

## 📁 **Clean Project Structure**
```
ConsultingSite/
├── cursor_docs/           # 📚 Project documentation & strategy
│   ├── projectRoadmap.md         # High-level goals & progress tracker
│   ├── currentTask.md            # Current objectives & next steps
│   ├── techStack.md              # Technology decisions & architecture
│   ├── codebaseSummary.md        # This file - project overview
│   └── websiteContentFramework.md # Content strategy & messaging
└── my-app/               # 🚀 Main Next.js project (shadcn/ui)
    ├── app/
    │   ├── page.tsx              # Homepage with hero, services, CTAs
    │   ├── layout.tsx            # Root layout
    │   └── globals.css           # Global styles + custom components
    ├── components/
    │   ├── ui/                   # Shadcn/ui components
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── navigation-menu.tsx
    │   │   ├── form.tsx
    │   │   └── ...
    │   └── Header.tsx            # Custom navigation header
    ├── lib/
    │   └── utils.ts              # Utility functions (cn, etc.)
    ├── public/                   # Static assets
    ├── package.json              # Dependencies & scripts
    └── [Next.js config files]
```

## Key Components and Their Interactions

### 🏠 Homepage Structure (`app/page.tsx`)
```
Homepage
├── Header (sticky navigation)
├── Hero Section ("Scale Your Business the Smart Way")
├── Problem/Solution Section (pain points + solution)
├── Services Overview (4 service cards)
├── Partnership Teaser ("Two Perspectives. One Partnership")
└── Final CTA (Free Strategy Session)
```

### 🧭 Navigation (`components/Header.tsx`)
- **Services Dropdown**: 4 service areas with descriptions
- **Main Navigation**: About, Results, Contact
- **Primary CTA**: "Get Free Strategy Session" button
- **Responsive Design**: Mobile-friendly navigation

### 🎨 Design System
- **Colors**: Professional blue/purple gradient (`gradient-text`)
- **Components**: Shadcn/ui for consistency and accessibility
- **Animations**: Card hover effects (`card-hover`)
- **Layout**: Container max-width 6xl, consistent spacing

## Primary User Journey
1. **Discovery** → Homepage (hero section)
2. **Problem Recognition** → Pain points checklist
3. **Solution Exploration** → Services overview
4. **Trust Building** → Partnership teaser
5. **Conversion** → Free Strategy Session CTA

## Data Flow
- **Static Content**: Directly in React components (no CMS)
- **Forms**: React Hook Form + Zod validation (planned)
- **Email**: Resend API for lead notifications (planned)
- **Analytics**: None currently (basic conversion KPIs planned)

## External Dependencies
### Production Dependencies
- **Next.js 14+**: React framework with SSR
- **React 18+**: UI library
- **Tailwind CSS**: Utility-first styling
- **Shadcn/ui**: Accessible component library
- **React Hook Form**: Form handling
- **Zod**: TypeScript-first validation
- **Resend**: Email API service
- **Framer Motion**: Animations library

### Development Tools
- **TypeScript**: Type safety
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Vercel**: Deployment platform

## Recent Significant Changes
- ✅ **Directory Cleanup (Latest)**: Consolidated scattered files into clean structure
- ✅ **Tech Stack Finalized**: Switched from Aceternity UI to Shadcn/ui
- ✅ **Homepage Implementation**: Complete homepage with all sections
- ✅ **Navigation System**: Professional header with dropdown menus
- ✅ **Design System**: Custom CSS classes and professional color scheme

## Performance Optimizations
- **Static Generation**: Next.js SSG for fast loading
- **Image Optimization**: Next.js built-in image optimization
- **Code Splitting**: Automatic with Next.js
- **CSS Optimization**: Tailwind CSS purging

## Security Considerations
- **TypeScript**: Compile-time type checking
- **Form Validation**: Zod schemas for input validation
- **Environment Variables**: Secure API key management (planned)

## Deployment Strategy
- **Platform**: Vercel (free tier)
- **Domain**: Temporary .vercel.app domain
- **CI/CD**: Automatic deployments from Git
- **Performance**: Global CDN distribution

## Next Development Priorities
1. **Service Pages**: Individual pages for each service area
2. **Lead Capture**: Strategy session landing page with forms
3. **About Page**: Partnership story and individual profiles
4. **Results Page**: Case studies and social proof
5. **Contact Page**: Contact form and business information 