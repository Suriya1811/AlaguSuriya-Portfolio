# Design Guidelines: Alagu Suriya Portfolio Website

## Design Approach
**Reference-Based Portfolio Design**: Drawing inspiration from modern portfolio sites like Vercel, Linear, and Stripe careers pages, with emphasis on clean aesthetics, subtle animations, and professional presentation.

## Core Design Elements

### A. Color Palette

**Light Mode (Primary)**
- Background: Pure white (#FFFFFF) with soft pastel overlays
- Primary Gradient: Soft blue-to-violet (220 60% 90% → 270 50% 88%)
- Accent Blue: 220 70% 55%
- Accent Violet: 270 60% 60%
- Text Primary: 220 15% 20%
- Text Secondary: 220 10% 50%
- Card Background: White with subtle shadow
- Borders: 220 20% 90%

### B. Typography
**Font Stack**: Poppins (headings) and Inter (body text) via Google Fonts

**Hierarchy**:
- Hero Name: 4xl to 6xl, font-bold (Poppins)
- Hero Tagline: xl to 2xl, font-medium, gradient text effect
- Section Titles: 3xl to 4xl, font-semibold (Poppins)
- Subsection Headers: xl to 2xl, font-semibold
- Body Text: base to lg, font-normal, leading-relaxed (Inter)
- Labels/Meta: sm, font-medium, text-secondary

### C. Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24
- Container max-width: max-w-6xl
- Card gaps: gap-6 to gap-8
- Element spacing: space-y-4 to space-y-6

### D. Component Library

**Navigation**
- Sticky navbar with backdrop blur effect
- Links: About, Skills, Projects, Experience, Contact
- Smooth scroll behavior to sections
- White background with subtle shadow on scroll

**Hero Section**
- Full-width section with subtle gradient background
- Centered content layout
- Name with fade-up animation (delay: 0s)
- Tagline with fade-up animation (delay: 0.2s)
- Intro paragraph with fade-up animation (delay: 0.4s)
- Two CTA buttons: Primary ("View Projects") + Secondary outline ("Download Resume")
- Buttons with rounded-lg, smooth hover transitions (scale + shadow)
- Background: Minimalist pattern or soft gradient mesh

**About Section**
- Single column layout, max-w-3xl centered
- Clean paragraph text with generous line-height
- Professional headshot placeholder (optional rounded image)

**Skills Section**
- Grid layout for skill categories (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each category card with:
  - Title (Languages, Frameworks, Tools, Competencies)
  - List of skills with subtle icons or colored dots
  - Rounded cards with soft shadows
  - Hover effect: slight lift (transform + shadow)

**Projects Section**
- Masonry or responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Project cards with:
  - Title and brief description
  - Tech stack tags (small rounded pills)
  - "View Live" link button
  - Hover effect: scale-102 with shadow increase
  - Rounded corners (rounded-xl)
  - Featured project (VentureLoop) gets larger card or special styling

**Experience Section**
- Timeline layout with vertical line connector
- Experience card with:
  - Company logo placeholder (circular)
  - Job title, company, location, dates
  - Bullet points of achievements
  - Rounded card with left border accent

**Education Section**
- Two-column grid on desktop, stacked on mobile
- Education cards with institution details, dates
- Diploma icon/badge styling

**Certifications Section**
- Badge-style grid layout (grid-cols-2 md:grid-cols-4)
- Small rounded cards with certification name and issuer
- Icons for IBM, GeeksforGeeks, Guvi

**Contact Section**
- Two-column layout: Form + Contact Info
- Form fields: Name, Email, Message (textarea)
- Submit button with primary styling
- Social icons (GitHub, LinkedIn, Email, Phone) with hover color transitions
- Icons from Heroicons

**Footer**
- Centered text with heart emoji
- Copyright and attribution
- Subtle top border

### E. Animations
**Scroll-triggered fade-in**: Sections fade up on scroll (using Intersection Observer or CSS)
**Hover interactions**:
- Buttons: scale-105 + shadow increase
- Cards: scale-102 + shadow
- Links: color transition
**Smooth scroll**: All anchor links use smooth scroll behavior

### F. Responsive Breakpoints
- Mobile: base (< 768px) - single column, stacked layout
- Tablet: md (768px+) - 2 columns where appropriate
- Desktop: lg (1024px+) - full multi-column grids

## Images

**Hero Section**: No large hero image. Use subtle gradient background with optional geometric pattern overlay or mesh gradient.

**About Section**: Optional professional headshot (300x300px, rounded-full or rounded-lg)

**Projects**: Thumbnail images for each project (16:9 aspect ratio, rounded corners)
- VentureLoop: Dashboard/platform screenshot
- Woolen Flower: Product showcase image
- Nike Clone: Landing page preview
- Marvel Blog: Character grid preview
- To-Do List: App interface screenshot

**Experience**: DataSwitch company logo placeholder (100x100px, circular)

## Key Design Principles
1. **Minimalism with Purpose**: Every element serves a clear function
2. **Soft & Approachable**: Rounded corners, soft shadows, gentle gradients
3. **Professional Polish**: Clean typography hierarchy, consistent spacing
4. **Smooth Interactions**: Subtle animations that feel natural, not distracting
5. **Mobile-First**: Fully responsive with graceful degradation

## Technical Notes
- Use CSS custom properties for consistent colors
- Implement intersection observer for scroll animations
- All external links open in new tab
- Form validation for contact section
- Optimized for static hosting (Neocities/Netlify/GitHub Pages)