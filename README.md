<div align="center">

<img src="https://em-content.zobj.net/source/animated-noto-emoji/356/slime_1fae0.gif" width="80" alt="Rimuru Slime" />

# 🌀 Rimuru App

**An anime-powered dashboard for That Time I Got Reincarnated as a Slime**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.61-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](./LICENSE)

<br />

> 🧪 **Rimuru App** is a slick, modern anime dashboard that scrapes and displays episode data from the official *Tensei Shitara Slime Datta Ken* site using Playwright — wrapped in a blazing-fast Next.js 16 frontend.

<br />

---

</div>

## 🗂️ Table of Contents

- [✨ Features](#-features)
- [🖼️ Preview](#️-preview)
- [🧱 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Configuration](#️-configuration)
- [🕷️ Scraper](#️-scraper)
- [🧩 Components](#-components)
- [📦 Scripts](#-scripts)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

| 🔮 Feature | 📝 Description |
|---|---|
| 🎴 **Episode Cards** | Beautifully rendered episode cards with dynamic data |
| 🦸 **Hero Section** | Immersive animated hero banner for the series |
| 🗂️ **Sidebar Navigation** | Collapsible sidebar with smooth transitions |
| 🕷️ **Web Scraper** | Playwright-powered headless scraper for `ten-sura.com` |
| ⚡ **Server-Side Cache** | Integrated `node-cache` to minimize redundant scraping |
| 🔁 **Scheduled Jobs** | `node-cron` for automatic background data refresh |
| 💅 **Custom Icons** | Bespoke SVG icon system for a polished UI |
| 🌐 **API Routes** | Next.js App Router API endpoints for scraped data |
| 🔒 **TypeScript** | End-to-end type safety throughout the codebase |

---

## 🖼️ Preview

> _Screenshots coming soon! Run locally to see the dashboard in action._

---

## 🧱 Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Scraping** | [Playwright](https://playwright.dev/) (Chromium, headless) |
| **Caching** | [node-cache](https://github.com/node-cache/node-cache) |
| **Scheduling** | [node-cron](https://github.com/node-cron/node-cron) |
| **Linting** | [ESLint 9](https://eslint.org/) + eslint-config-next |

</div>

---

## 📁 Project Structure

```
rimuru-app/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 api/
│   │   │   └── 📁 scraped-data/    # REST API endpoint for scraped content
│   │   ├── 🎨 globals.css          # Global styles & design tokens
│   │   ├── 🖼️  layout.tsx           # Root layout wrapper
│   │   ├── 📄 page.tsx             # Dashboard homepage
│   │   └── 🎨 page.module.css      # Page-scoped CSS modules
│   ├── 📁 components/
│   │   ├── 🃏 EpisodeCard.tsx       # Individual episode card
│   │   ├── 🔝 Header.tsx           # Top navigation bar
│   │   ├── 🦸 Hero.tsx             # Hero banner section
│   │   ├── 🗂️  Sidebar.tsx          # Collapsible sidebar
│   │   └── 🎭 icons.tsx            # Custom SVG icon library
│   └── 📁 lib/
│       ├── 💾 cache.ts             # node-cache wrapper
│       └── 🕷️  scraper.ts           # Playwright web scraper
├── 📁 public/                      # Static assets
├── ⚙️  next.config.ts              # Next.js configuration
├── 🔧 tsconfig.json                # TypeScript config
├── 🔍 eslint.config.mjs            # ESLint config
└── 📦 package.json                 # Project manifest
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.x`
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/rimuru-app.git
cd rimuru-app

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install chromium
```

### Running Locally

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads on every file change.

---

## ⚙️ Configuration

The app targets the official Tensei Shitara Slime Datta Ken website for scraping. You can adjust the scraper target URL and cache TTL in:

| File | Purpose |
|---|---|
| [`src/lib/scraper.ts`](./src/lib/scraper.ts) | Target URL, Playwright browser options |
| [`src/lib/cache.ts`](./src/lib/cache.ts) | Cache TTL (time-to-live) settings |

---

## 🕷️ Scraper

The scraper uses **Playwright** with a headless Chromium browser to fetch data from [`ten-sura.com`](https://www.ten-sura.com/).

```ts
// src/lib/scraper.ts
import { chromium } from 'playwright';

export async function scrapeExampleSite(): Promise<ScrapedData> {
  const browser = await chromium.launch({ headless: true });
  // ... navigates, extracts title, price & availability
}
```

### Scraped Data Shape

```ts
interface ScrapedData {
  title:        string;  // Page title
  price:        string;  // Product price (if applicable)
  availability: string;  // Availability status
}
```

> ⚠️ **Note:** Web scraping should be done responsibly. Always respect the target site's `robots.txt` and Terms of Service.

---

## 🧩 Components

| Component | Description |
|---|---|
| `<Header />` | Top bar with hamburger menu toggle for the sidebar |
| `<Sidebar />` | Collapsible navigation panel, controlled via `isOpen` prop |
| `<Hero />` | Full-width hero banner for the series |
| `<EpisodeCard />` | Card component rendering individual episode data |
| `<VideoIcon />` | Custom SVG icon used in the "Latest Episodes" section |

---

## 📦 Scripts

```bash
npm run dev      # Start the Next.js development server (with hot reload)
npm run build    # Build the production bundle
npm start        # Start the production server
npm run lint     # Run ESLint across all source files
```

---

## 🤝 Contributing

Contributions, bug reports, and feature suggestions are welcome!

1. **Fork** the repository
2. **Create** a new branch: `git checkout -b feat/your-feature-name`
3. **Commit** your changes: `git commit -m "✨ feat: add your feature"`
4. **Push** to your branch: `git push origin feat/your-feature-name`
5. **Open** a Pull Request 🚀

Please follow the existing code style and ensure `npm run lint` passes before submitting.

---

## 📄 License

This project is **private** and not licensed for public distribution.

---

<div align="center">

Made with 💙 and a sprinkle of Rimuru's magic slime

✨ *"That Time I Got Reincarnated as a Dev"* ✨

</div>
