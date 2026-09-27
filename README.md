# EchoGPT Redesign

A modern, responsive, and high-performance redesign of **EchoGPT** — a unified multi-model AI platform bringing together leading LLMs (EchoGPT 2.0, GPT-4o, Gemini 1.5 Pro, DeepSeek R1, Grok 2), generative image & video studios, side-by-side arena comparison, and specialized productivity tools into one cohesive, accessible workspace.

---

## 🌟 Table of Contents
- [1. Project Overview](#1-project-overview)
- [2. Key Features & Workspaces](#2-key-features--workspaces)
- [3. Technologies Used](#3-technologies-used)
- [4. Setup & Installation Instructions](#4-setup--installation-instructions)
- [5. Project Structure](#5-project-structure)
- [6. Architectural Assumptions & Design Decisions](#6-architectural-assumptions--design-decisions)
- [7. Additional Features Implemented](#7-additional-features-implemented)
- [8. Dark Mode & Accessibility Standards](#8-dark-mode--accessibility-standards)
- [9. Performance & Build Verification](#9-performance--build-verification)

---

## 1. Project Overview

EchoGPT addresses the fragmentation in AI software by consolidating access to world-class reasoning, multi-modal synthesis, and productivity suites into a single dashboard. 

This repository represents an end-to-end frontend overhaul designed to deliver:
- **Consumer-grade polish**: Fluid micro-animations, clear typographic hierarchies, and brand consistency.
- **Enterprise-grade multi-model orchestration**: Direct model switching without leaving the prompt box.
- **High utility workflows**: Studio environments for image/video generation, a multi-model consensus comparison arena, ATS job matching, and international SOP crafting.
- **Flawless responsiveness & accessibility**: Full dark/light theme switching with zero contrast violations and touch-friendly controls across smartphones, tablets, and desktop workstations.

---

## 2. Key Features & Workspaces

### 🏠 Public Landing & Marketing Experience
- **Interactive Hero & Model Switcher**: Dynamic prompt exploration across OpenAI, Google, DeepSeek, and Anthropic.
- **Visual Product Preview**: Authentic dashboard preview showing EchoGPT in action.
- **Pricing & Tier Subscriptions**: Business-oriented pricing model featuring Free, Starter, Pro (Recommended with expanded features), and Business tiers with interactive monthly/annual billing toggles and collapsible plan comparison details.
- **Support & Feedback Portal**: Support channels, FAQ accordions, and direct verified contacts (WhatsApp, Email, Telegram, and developer portfolio redirection).

### 🚀 Application Workspace (`/app/*`)
1. **`/app` — Unified Multi-Model Chat**:
   - Integrated dynamic prompt enhancer (`Rocket` mode) and voice dictation indicators.
   - In-box AI engine selector (EchoGPT 2.0, GPT-4o, Gemini 1.5 Pro, DeepSeek R1, Grok 2).
   - Instant starter prompts and curated prompt suggestion cards.
2. **`/app/history` — Session & Chat History**:
   - Filter chat sessions by specific AI model or search past discussions.
   - Clean empty states and quick new conversation triggers.
3. **`/app/favorites` — Pinned Artifacts**:
   - Cross-workspace bookmarking for saved chats, generated images, video creations, and prompt templates.
   - Category filtering (All, Chats, Images, Job Prompts).
4. **`/app/image-studio` — Creative AI Image Studio**:
   - Text-to-Image & Image-to-Image pipeline with reference photo uploads.
   - Aspect ratio selections (`1:1`, `9:16`, `16:9`, `4:3`) with dynamic credit burn calculation.
   - Quality variations selector (1 to 4 images) and high-resolution modal lightbox preview.
5. **`/app/video-studio` — Neural Video Generation**:
   - Initial frame attachment for Image-to-Video generation.
   - Duration settings (5s vs 10s) with live render cost breakdowns.
   - Video gallery with interactive hover previews and dedicated player modal.
6. **`/app/compare` — Multi-Model Split Arena**:
   - Simultaneous side-by-side querying of up to 5 leading models.
   - Toggle between **Compare Arena** (multi-column split view) and **Focus View** (inspecting single model telemetry).
   - Response latency metrics, token consumption badges, and community best-answer voting.
7. **`/app/resume` — AI Job Insight & ATS Optimizer**:
   - Vacancy analysis, ATS keyword matching score, and tailored executive summaries.
   - Structured breakdown of strengths vs. high-impact resume enhancements.
8. **`/app/sop` & `/app/sop/country` — Statement of Purpose Builder**:
   - Purpose-built academic templates (Academic, Research, Career Transition, Gap Year).
   - Destination country tailoring (USA, UK, Canada, Germany, Australia, Ireland) adhering to specific visa and admission protocols.
9. **`/app/connectors` — External Platform & MCP Connectors**:
   - Integration directory (GitHub, Google Drive, Gmail, Google Calendar, Notion, Higgsfield).
   - Add Custom MCP Connector modal dialog with live URL validation and security disclaimers.
10. **`/app/store` — EchoGPT AI App Directory**:
    - Browse and launch custom GPT workflows, specialized bots, and productivity tools.
11. **`/app/api-platform` — Developer Platform Preview**:
    - Unified API gateway preview with developer early-access registration.

---

## 3. Technologies Used

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) — Server Components, Client boundaries, nested layouts, and static optimization.
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@custom-variant dark (&:is(.dark *))` support.
- **Animations**: [Motion (Framer Motion v13)](https://motion.dev/) for layout transitions, animated tooltips, popovers, and dialogs.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) with persistent `localStorage` and zero hydration flash.
- **UI Tooling**: Tailwind `@base-ui/react`, Radix UI primitives, `class-variance-authority`, `tailwind-merge`, and `clsx`.
- **Package Manager**: `pnpm` (also compatible with `npm`, `yarn`, and `bun`).

---

## 4. Setup & Installation Instructions

### Prerequisites
- **Node.js**: `v20.x` or higher recommended
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### 1. Clone the repository
```bash
git clone https://github.com/FajlaRabby24/echoGPT-redesign.git
cd echoGPT-redesign
```

### 2. Install dependencies
```bash
pnpm install
# or
npm install
```

### 3. Run the development server
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
pnpm build
pnpm start
```

### 5. Type checking & Linting
```bash
npx tsc --noEmit
pnpm lint
```

---

## 5. Project Structure

```text
├── src/
│   ├── app/                                # Next.js App Router routes
│   │   ├── (appLayout)/                    # Workspace layout route group
│   │   │   └── app/
│   │   │       ├── api-platform/           # API developer preview
│   │   │       ├── compare/                # Multi-model arena
│   │   │       ├── connectors/             # MCP & external service integrations
│   │   │       ├── favorites/              # Saved & pinned artifacts
│   │   │       ├── history/                # Chat history & logs
│   │   │       ├── image-studio/           # Image studio workspace
│   │   │       ├── resume/                 # ATS job analysis & resume tailoring
│   │   │       ├── sop/                    # SOP builder & country guidelines
│   │   │       ├── store/                  # AI agent directory
│   │   │       ├── subscriptions/          # User subscription & billing
│   │   │       ├── support/                # Support & feedback portal
│   │   │       └── video-studio/           # Video studio workspace
│   │   ├── (mainLayout)/                   # Public marketing layout route group
│   │   │   ├── page.tsx                    # Landing page
│   │   │   ├── pricing/                    # Public pricing table
│   │   │   └── ...
│   │   └── globals.css                     # Tailwind v4 theme & CSS variables
│   │
│   ├── components/
│   │   ├── modules/
│   │   │   ├── app/                        # App workspace components
│   │   │   │   ├── AppShell.tsx            # App container with collapsible sidebar
│   │   │   │   ├── Sidebar.tsx             # Responsive sidebar navigation
│   │   │   │   ├── Topbar.tsx              # Top navigation with live search & theme toggle
│   │   │   │   ├── defaultPage/            # Default chat interface & model selector
│   │   │   │   ├── compare/                # Arena comparison cards & mode toggle
│   │   │   │   ├── image-studio/           # Prompt cards, ratio chips, and gallery
│   │   │   │   ├── video-studio/           # Video prompts, durations, and player
│   │   │   │   ├── resume/                 # Career insight modules & report card
│   │   │   │   ├── sop/                    # Template selector & country forms
│   │   │   │   ├── connectors/             # Integration tables & Add MCP modal
│   │   │   │   └── store/                  # App store cards & search
│   │   │   └── home/                       # Landing page marketing sections
│   │   └── ui/                             # Reusable primitive UI components
│   │
│   └── lib/                                # Data models, navigation items, constants
│       ├── compareModelsData.ts
│       ├── connectorsData.ts
│       ├── imageStudioData.ts
│       ├── resumeFeatures.ts
│       ├── sopTemplatesData.ts
│       └── videoStudioData.ts
```

---

## 6. Architectural Assumptions & Design Decisions

1. **Brand Identity & Cohesion**:
   - The primary brand purple (`#4F46E5` / Tailwind Indigo) is maintained across all buttons, highlights, and active states to preserve authentic product branding.
   - Neutral backgrounds transition cleanly between crisp whites (`#FDFDFD` / `white`) and deep slate (`neutral-900` / `neutral-950`).
2. **State Decoupling & Mock Resilience**:
   - All 11 workspace sub-routes include rich local state simulations (e.g., prompt enhancement, multi-model response synthesis, live credit burn calculation, interactive connector toggling) enabling a fully interactive review without requiring external paid API keys.
3. **Multi-Model Orchestration**:
   - The chat box allows seamless in-place engine selection (EchoGPT, GPT-4o, Gemini, DeepSeek, Grok) with provider badges and model capability descriptions.
4. **Business & Monetization Clarity**:
   - The subscriptions interface distinguishes the "Pro" plan as the recommended business tier with all models highlighted, while alternative tiers allow users to drop down and inspect capabilities without visual noise.

---

## 7. Additional Features Implemented

- **Responsive Topbar Search**: Added an adaptive search input in the top header with small-screen collapsible states.
- **Dynamic Credit Calculation**: Real-time credit cost badges for both Image Studio (`Aspect Ratio + Base Model × Quantity`) and Video Studio (`Resolution + Base Model × Duration multiplier`).
- **Split Arena vs. Focus Mode**: Comparison view supports side-by-side consensus evaluation or isolating a single model's response.
- **ATS Optimization Scoring**: Real-time resume-to-job description match rate calculation with structured strengths and actionable gap suggestions.
- **Custom MCP Connector Modal**: Complete modal form allowing users to register external Model Context Protocol (MCP) server endpoints.
- **Theme Persistence**: Light and dark themes switch instantly with no flash of unstyled content (FOUC).

---

## 8. Dark Mode & Accessibility Standards

- **100% Comprehensive Dark Mode**: Fully audited across all 11 workspace pages (`/app`, `/app/history`, `/app/favorites`, `/app/image-studio`, `/app/video-studio`, `/app/compare`, `/app/resume`, `/app/sop`, `/app/connectors`, `/app/store`, `/app/api-platform`).
- **Semantic Contrast**: Cards, dropdowns, inputs, dialog backdrops, and borders use `dark:bg-neutral-900`, `dark:border-neutral-800`, and `dark:text-neutral-100`.
- **Keyboard & Screen Reader Support**: Form inputs, dialog triggers, and buttons have explicit `aria-label` attributes and keyboard event handlers.

---

## 9. Performance & Build Verification

The application is thoroughly verified for type safety and compilation:
- **TypeScript**: `npx tsc --noEmit` exits with **0 errors**.
- **Images**: Configured with Next.js image optimization (`next/image`), explicit dimensions, and responsive `sizes`.
- **Clean Tree**: Builds cleanly without uncommitted artifacts.

---

## 👨‍💻 Developer & Contact

**Fajla Rabby**  
- Portfolio / Contact: [https://fajlarabby.vercel.app/#contact](https://fajlarabby.vercel.app/#contact)
- GitHub: [@FajlaRabby24](https://github.com/FajlaRabby24)
