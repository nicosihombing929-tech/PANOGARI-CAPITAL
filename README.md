# PANOGARI CAPITAL — Family Office Website

Professional marketing site for PANOGARI CAPITAL showcasing the family office structure, active trading desk, CVQuant system, roadmap to the Rp1B AUM target (2026), and the scale-up plan to Rp10B.

## Tech
- Next.js 16 (Pages Router) + TypeScript
- Tailwind CSS v4 styling
- Static export (`output: "export"`) for GitHub Pages
- GitHub Actions workflow for build and deploy

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build (static export)
```bash
npm run build
# output in ./out
```

## Deploy to GitHub Pages
1) Push to `main`. The workflow `.github/workflows/deploy.yml` builds and publishes `./out` to GitHub Pages.
2) If using a repository page (not `username.github.io`), set a repository Secret or Variable `NEXT_PUBLIC_BASE_PATH=/<repo-name>` so assets resolve correctly. Leave it empty for user/org pages or custom domains.
3) Enable GitHub Pages in repo settings, set source to GitHub Actions.

## SEO
- `public/robots.txt` and `public/sitemap.xml` are included. Update the domain in both if it differs from `https://panogaricapital.com`.

## Content
Main sections cover: operating model (Wealth & Investment Management), Active Trading Desk + CVQuant System, governance & risk, roadmap to 2026 AUM target, and call-to-action for conversations.
