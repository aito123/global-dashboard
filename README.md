# 🌍 Global Dashboard

Interactive multi-page data science dashboard built with **Next.js 14**, **React**, and **D3.js v7**.
Uses public World Bank and Our World in Data indicators for GDP, life expectancy, and CO₂ emissions
across 40 countries from 2000–2022.

---

## Pages

| Route        | Description                                      |
|--------------|--------------------------------------------------|
| `/`          | Overview with summary stats and navigation       |
| `/gdp`       | GDP per capita — line trends + top-15 bar chart  |
| `/health`    | Life expectancy trends + wealth vs health scatter|
| `/emissions` | CO₂ per capita trends + top emitters bar chart  |

---

## Tech Stack

- **Next.js 14** (App Router, static export)
- **D3.js v7** — all charts (line, bar, scatter)
- **Tailwind CSS** — layout and styling
- **Syne + Epilogue + JetBrains Mono** — typography

---

## Getting Started

### Prerequisites
- Node.js 18+ — https://nodejs.org
- npm (comes with Node)

### Install & Run

```bash
# 1. Clone or download this project
git clone https://github.com/YOUR_USERNAME/global-dashboard.git
cd global-dashboard

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
npm run build
# Output is in /out — a fully static site ready to deploy anywhere
```

---

## Deployment Options

### Option A — GitHub Pages (automated via GitHub Actions)

> The `.github/workflows/deploy.yml` file handles this automatically.

1. Push this project to a GitHub repository
2. Go to **Settings → Pages**
3. Under "Source", select **GitHub Actions**
4. Push a commit to `main` — the Action builds and deploys automatically
5. Your site is live at `https://YOUR_USERNAME.github.io/global-dashboard/`

> **Important:** If deploying to a sub-path (not a custom domain), uncomment these
> lines in `next.config.js` and replace `global-dashboard` with your repo name:
> ```js
> basePath: "/global-dashboard",
> assetPrefix: "/global-dashboard/",
> ```

---

### Option B — Netlify (simplest)

1. Push this project to GitHub
2. Go to https://app.netlify.com → **Add new site → Import from Git**
3. Select your repo
4. Netlify auto-detects `netlify.toml` — no extra config needed
5. Click **Deploy site**

Done. Every `git push` to `main` auto-deploys.

---

### Option C — Vercel (best DX)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts — auto-detects Next.js
```

Or connect via https://vercel.com/new — import your GitHub repo, zero config needed.

---

## Data Sources

All data is public domain / Creative Commons:

| Dataset             | Source                        | License  |
|---------------------|-------------------------------|----------|
| GDP per capita      | World Bank World Development Indicators | CC BY 4.0 |
| Life expectancy     | Our World in Data / UN        | CC BY 4.0 |
| CO₂ per capita      | Our World in Data / Global Carbon Project | CC BY 4.0 |

---

## Project Structure

```
global-dashboard/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout + sidebar
│   │   ├── page.js            # Overview page
│   │   ├── gdp/page.js        # GDP explorer
│   │   ├── health/page.js     # Health & life expectancy
│   │   └── emissions/page.js  # CO₂ emissions
│   ├── components/
│   │   ├── charts/
│   │   │   ├── LineChart.js
│   │   │   ├── BarChart.js
│   │   │   └── ScatterPlot.js
│   │   ├── layout/
│   │   │   └── Sidebar.js
│   │   └── ui/
│   │       └── StatCard.js
│   └── data/
│       └── datasets.js        # All public data
├── .github/workflows/
│   └── deploy.yml             # GitHub Pages auto-deploy
├── netlify.toml               # Netlify config
├── next.config.js             # Static export config
└── tailwind.config.js
```
