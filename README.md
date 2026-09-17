# ROUTE PORTAL

> **Optimising Vehicle Collection for CarPlanet**  
> An interactive product case study & technical optimization prototype.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-purple?style=flat-square&logo=framer)](https://www.framer.com/motion/)

---

## 📌 Overview

**Route Portal** is a high-polish, interactive product case study and operational prototype created for **CarPlanet**. It explores how vehicle collection costs and paid driver hours can be drastically reduced by optimizing the **journey to each car** rather than just the journey home.

Instead of presenting traditional PowerPoint slides or static mockups, Route Portal delivers a **60–90 second interactive narrative** explaining the core operational problem, demonstrating the manual shuttle baseline, exposing where hidden costs accumulate, and allowing users to trigger a live multi-modal optimization engine.

> **Disclaimer**: Figures, routes, and financial savings in this repository are derived from an illustrative 5-car concept analysis. They are provided as an example scenario and do not represent verified CarPlanet proprietary operational records.

---

## 🎯 The Operational Problem & Key Insights

1. **The Shuttle Baseline**: In typical multi-car collection days, 6 people (1 vehicle driver + 5 collection drivers) travel together in a single passenger shuttle. Drivers are dropped off sequentially.
2. **Hidden Waste**: Drivers traveling as passengers accumulate **paid ride time** while waiting to be dropped off (~34% of controllable cost), while unready sellers cause on-site delays (~26%).
3. **The Core Insight**:
   - **Fixed Distance (28%)**: The return journey from the seller to the showroom hub is geographically fixed once a car is purchased.
   - **Controllable Distance (72%)**: Positioning drivers, drop sequences, travel modes, and seller readiness are 100% controllable.
4. **The Optimiser Decision**: In the 5-car scenario, sending the Leicester driver independently via train + taxi (£31 total fare) frees the primary shuttle to follow an optimal south-east corridor (Coventry → Rugby → Northampton → Milton Keynes), yielding:
   - **£57.53 saved per day (12.3% cost reduction)**
   - **4 hours 40 minutes less total paid driver time**
   - **33 fewer shuttle vehicle miles**
   - **1 hour 05 minutes earlier final car return**

---

## 🚀 Interactive Features

- **Light & Dark Theme Modes**: Polished default **Light Mode** (#F8F9FC background, high contrast editorial styling) and sleek **Dark Mode** (#08090D background), with persistent user preference saved via `localStorage`.
- **Dedicated Vector Map Visualiser**: Custom vector SVG map displaying Birmingham hub, Coventry, Rugby, Leicester, Northampton, and Milton Keynes with high-contrast route lines for both themes.
- **Interactive Plan Switcher**: Toggle instantly between `Current Plan` and `Optimised Plan` with real-time metric tickers.
- **Driver Split Animation**: Visual departure sequence showing the Leicester driver separating from the shuttle loop to take public rail + taxi.
- **Explainable Decision Logic**: Side-by-side trade-off cards comparing *Keep on shuttle* (£85.86) vs *Send separately* (£48.33).
- **Expandable Math Formulation**: Full mathematical objective function and operational constraints formulation card.
- **Executive Analysis Modal**: Slide-over briefing modal with complete methodology breakdown.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom Light/Dark Themes)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Scroll-driven viewports, spring physics)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 💻 Local Development

### 1. Prerequisites
Ensure you have Node.js 18+ installed on your machine.

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/syedrashaad/route_portal-mvp.git
cd route_portal-mvp
npm install
```

### 3. Run Development Server
Start the Next.js local development environment:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
Verify static export & type checking:

```bash
npm run build
npm run start
```

---

## ☁️ Vercel Deployment Guide

Deploying Route Portal to Vercel takes less than 2 minutes:

1. **Push to GitHub**:
   Ensure your local repository is committed and pushed to GitHub:
   ```bash
   git add .
   git commit -m "feat: add Light mode and update author to Rashaad Syed"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
   - Click **Add New...** → **Project**.
   - Select your `syedrashaad/route_portal-mvp` repository from GitHub.

3. **Deploy**:
   - Click **Deploy**. Vercel will build and publish your project automatically with an SSL-secured URL.

---

## 👤 Author & Attribution

**Built by Rashaad Syed**  
*Product × Technology × Optimisation*  
Created as an executive product concept for CarPlanet operational vehicle collection.
