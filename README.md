# Modern Personal Portfolio — Next.js & WhatsApp Cloud API Automation

A high-performance personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide React**, integrated with an **n8n** automation workflow and the official **Meta WhatsApp Cloud API**.

Designed intentionally with a refined, monochromatic, content-first aesthetic that emphasizes readability, accessibility, and architectural clarity.

---

## 🌟 Key Architecture & Features

- **Next.js 14 App Router & React 18**: Server components by default, client components isolated to interactive navigation, popups, and forms.
- **Monochromatic Editorial Design**: Clean off-white background (`#F7F7F7`), near-black typography (`#171717`), neutral grays (`#737373`), and restrained muted blue interactive accents (`#2563EB`).
- **Contextual Section Description Popups (`SectionInfoPopup`)**:
  - Consistent across **all** main sections (Home, About, Skills, Experience, Projects, Education, Certifications, Contact).
  - Floating contextual popover on desktop with boundary detection, outside click, and `Escape` key dismissal.
  - Responsive bottom sheet / modal on mobile and tablet viewports.
  - Fully accessible ARIA dialog attributes and keyboard focus management.
- **Independent Section Pagination (`usePagination`)**:
  - Independent pagination state for Skills, Work Experience, Projects, Education, and Certifications.
  - Smooth page transitions with previous/next controls, direct page navigation, and zero interference with navbar scrolling.
- **Glass Floating Navigation**:
  - Semi-transparent backdrop blur (`backdrop-blur-md`) with smooth scroll-spy navigation.
  - Intersection Observer API for active section tracking with blue indicators.
  - Responsive mobile drawer navigation menu.
- **Calibrated Skill Level Indicators**:
  - Strict 5-tier evaluation scale: Beginner (1–30%), Basic (31–50%), Intermediate (51–70%), Advanced (71–90%), Expert (91–100%).
  - Horizontal progress indicators with blue accent fills.
  - Category filtering tabs and pagination.
- **Full-Stack Contact Form with n8n + WhatsApp Cloud API**:
  - Frontend input validation using **Zod**.
  - Server-side Next.js Route Handler (`/api/contact`) acting as a secure proxy to prevent credential leakage.
  - Honeypot anti-spam protection and sliding-window IP rate limiting.
  - Dispatches validated inquiry to an **n8n Webhook** which formats and delivers real-time notifications to the portfolio owner's mobile via **Meta WhatsApp Cloud API**.
  - Direct WhatsApp messaging fallback button (`wa.me`) for seamless reliability.
- **Data-Driven Architecture**:
  - All content is editable in `src/data/` without modifying UI component code.

---

## 📁 Project Architecture

```text
portfolio/
├── public/
│   ├── projects/                  # SVG and image project previews
│   └── resume.pdf                 # ATS-friendly resume file
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       # Secure Next.js contact route handler
│   │   ├── globals.css            # Tailwind directives, color vars, scroll rules
│   │   ├── layout.tsx             # Root layout, metadata & OpenGraph tags
│   │   └── page.tsx               # Primary single-page portfolio layout
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Container.tsx      # Responsive max-width wrapper
│   │   │   └── SectionHeading.tsx # Reusable section title with contextual popup
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Floating glass navbar with active state
│   │   │   └── Footer.tsx         # Monochromatic footer with social links
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   └── ui/
│   │       ├── SectionInfoPopup.tsx # Reusable contextual info popup (desktop & mobile)
│   │       ├── Pagination.tsx       # Reusable pagination controls
│   │       ├── SkillIndicator.tsx   # Skill progress bar & tier badge
│   │       ├── ProjectShowcase.tsx  # Editorial showcase layout
│   │       └── ContactForm.tsx      # Validated interactive contact form
│   │
│   ├── data/
│   │   ├── profile.ts             # Bio, highlights, career aspirations, socials
│   │   ├── skills.ts              # Categorized skills & 5-tier percentages
│   │   ├── experience.ts          # Professional & organizational roles
│   │   ├── projects.ts            # Project case studies & architecture details
│   │   ├── education.ts           # Academic credentials & coursework
│   │   ├── certifications.ts      # Industry certifications & verification links
│   │   └── sections.ts            # Contextual metadata for all section popups
│   │
│   ├── hooks/
│   │   ├── useActiveSection.ts    # Scroll-spy & active section tracking
│   │   └── usePagination.ts       # Independent section pagination state
│   │
│   ├── lib/
│   │   ├── utils.ts               # Tailwind merge & proficiency tier helpers
│   │   └── validations.ts         # Zod schemas for contact form
│   │
│   └── types/
│       └── index.ts               # TypeScript interface definitions
│
├── n8n/
│   └── portfolio-whatsapp-workflow.json # Importable n8n workflow definition
├── .env.example
├── .env.local
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.18.0 or v20+ (Node v22 recommended)
- **npm**: v9+ or modern package manager

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your variables in `.env.local`:
```env
# Base site URL for metadata & OG tags
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# n8n Automation Webhook
# When empty, contact submissions run in simulated dev mode
N8N_WEBHOOK_URL=https://your-n8n-instance.app.n8n.cloud/webhook/portfolio-contact
N8N_WEBHOOK_SECRET=your_secure_webhook_secret_here
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📲 n8n + WhatsApp Cloud API Setup Guide

This portfolio features a production-ready integration pattern:

```text
Visitor fills form 
       ↓
Next.js Route Handler (/api/contact)
       ↓ (POST + X-Webhook-Secret)
n8n Webhook Trigger Node
       ↓
Process & Format Node
       ↓
Meta WhatsApp Cloud API (Graph API v21.0)
       ↓
Portfolio Owner's Mobile Device
```

### Step 1: Meta for Developers Setup
1. Go to [Meta for Developers](https://developers.facebook.com/) and create a Business App.
2. Add **WhatsApp** to your application products.
3. In the WhatsApp API Setup panel:
   - Note your **Phone Number ID**.
   - Note your temporary or permanent **System User Access Token**.
   - Verify the recipient phone number (your WhatsApp number) if using test credentials.

### Step 2: Import Workflow into n8n
1. Open your n8n workspace (Cloud or Self-Hosted).
2. Go to **Workflows** → **Import from File**.
3. Select `n8n/portfolio-whatsapp-workflow.json`.
4. Configure the following environment variables or node parameters inside n8n:
   - `WHATSAPP_PHONE_NUMBER_ID`: Your Meta Phone Number ID.
   - `WHATSAPP_ACCESS_TOKEN`: Your Meta Graph API Bearer Token.
   - `OWNER_WHATSAPP_NUMBER`: Your target mobile number with country code (e.g. `6281234567890`).
   - `N8N_WEBHOOK_SECRET`: The shared secret matching `.env.local`.
5. Activate the workflow and copy the **Production Webhook URL**.

### Step 3: Connect to Next.js
Set `N8N_WEBHOOK_URL` in your `.env.local` or hosting environment:
```env
N8N_WEBHOOK_URL=https://your-n8n.cloud/webhook/portfolio-contact
N8N_WEBHOOK_SECRET=your_secure_webhook_secret_here
```

---

## 🛠️ Data Customization

All portfolio data is separated cleanly from UI components. Customize the following files in `src/data/`:

| File | Content Description |
| :--- | :--- |
| `src/data/profile.ts` | Name, title, short/full bio, metrics, socials, goals |
| `src/data/skills.ts` | Technical skills, 1–100 proficiency, 5 tiers, categories |
| `src/data/experience.ts` | Job title, company, dates, responsibilities, impact |
| `src/data/projects.ts` | Project title, problem solved, features, stack, URLs |
| `src/data/education.ts` | Degree, institution, period, coursework, achievements |
| `src/data/certifications.ts` | Title, issuer, credential ID, verification links |
| `src/data/sections.ts` | Explanations, purpose, and tips for all section popups |

---

## 🚢 Deployment to Vercel

1. Push your repository to GitHub or GitLab.
2. In the [Vercel Dashboard](https://vercel.com/), click **Add New Project** and import the repository.
3. Configure the environment variables:
   - `NEXT_PUBLIC_SITE_URL`: Your live domain (e.g. `https://ziddan.dev`).
   - `N8N_WEBHOOK_URL`: Your production n8n webhook URL.
   - `N8N_WEBHOOK_SECRET`: Your shared webhook secret.
4. Click **Deploy**. Vercel will build and host the Next.js App Router application with automatic SSL and edge CDN caching.

---

## 📄 License

MIT License &copy; 2026 Ziddan Fadillah. Built with care for engineering excellence.
