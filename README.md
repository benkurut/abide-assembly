# Abide Church Website

A modern, elegant React-based website for Abide Church in Willoughby, Ohio.

## Project Structure

```
AbideProject/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions auto-deploy to Pages
├── web/                        # Main React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── sections/           # Page sections
│   │   ├── layouts/            # Layout wrappers
│   │   ├── styles/             # CSS & styling
│   │   ├── App.tsx             # Main app
│   │   └── main.tsx            # Entry point
│   ├── public/                 # Static assets (images, icons)
│   ├── package.json            # Dependencies
│   ├── vite.config.ts          # Build config
│   └── README.md
├── .gitignore
└── README.md                   # This file
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
cd web
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:5174/`

### Build & Deploy

```bash
npm run build
```

The production build is automatically deployed to GitHub Pages when you push to `main`.

**Live Site:** https://abideassembly.com/

## Features

- ✨ Welcome modal on first visit
- 📅 Launch countdown & waiting page
- 🎯 Navigation buttons in header
- 🙏 Prayer request form with Web3Forms integration
- 👨‍👩‍👧 Ministries page (Children's, Women's, Men's)
- 💝 Giving/Donations page
- 📱 Fully responsive design
- ⚡ Built with React 19, Tailwind CSS, Framer Motion
- 🚀 Auto-deployed via GitHub Actions

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS, PostCSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form, Zod
- **Notifications:** Sonner
- **Icons:** React Icons
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## Deployment

The site auto-deploys to GitHub Pages whenever you push to the `main` branch. The workflow is defined in `.github/workflows/deploy.yml`.

## File Guidelines

- Keep all React code in `web/src/`
- Add new components to `web/src/components/`
- Create sections in `web/src/sections/`
- Don't add duplicate code or folders
- Use the `web/public/` folder for static assets (images)

## Support

For questions, check the inline code comments or the church contact information in the Prayer Request section.

---

**LOVE GOD, LOVE PEOPLE.**

