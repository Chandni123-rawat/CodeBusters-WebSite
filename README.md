<div align="center">

# 🚀 CodeBusters — Official Club Website

**The official web presence of CodeBusters**, a technical & coding club dedicated to building a community of passionate developers, designers, and problem-solvers.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## 📸 Preview

> _A modern, dark-themed club website with glassmorphism effects, smooth animations, and a fully responsive layout._

---

## ✨ Features

- 🏠 **Home** — Hero section with club introduction and highlights
- 👥 **About** — Club story, mission, vision, and contact section
- 🧑‍💻 **Team** — Meet the core members and leadership
- 📅 **Events** — Upcoming and past club events with details
- 💻 **Projects** — Showcase of projects built by club members
- 🏆 **Achievements** — Awards, milestones, and recognitions
- 🖼️ **Gallery** — Photo gallery with coverflow slider
- 📱 **Fully Responsive** — Mobile-first design across all pages
- ⚡ **Lightning Fast** — Powered by Vite with optimized builds

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19 | UI Framework |
| [Vite](https://vitejs.dev) | 8 | Build Tool & Dev Server |
| [React Router DOM](https://reactrouter.com) | 7 | Client-Side Routing |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-First Styling |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | Latest | Fast JS/TS Linter |

---

## 📁 Project Structure

```
CodeBusters-WebSite/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, logos, backgrounds
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation bar
│   │   ├── footer.jsx           # Site footer
│   │   └── CoverflowSlider.jsx  # Gallery coverflow component
│   ├── pages/
│   │   ├── Home.jsx             # Landing page
│   │   ├── About.jsx            # About & contact page
│   │   ├── Team.jsx             # Team members page
│   │   ├── Events.jsx           # Events listing page
│   │   ├── Projects.jsx         # Projects showcase page
│   │   ├── Achievements.jsx     # Achievements page
│   │   └── Gallery.jsx          # Photo gallery page
│   ├── App.jsx                  # Root component with routing
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML entry point
├── vite.config.js               # Vite configuration
├── vercel.json                  # Vercel SPA routing config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chandni123-rawat/CodeBusters-WebSite.git
   cd CodeBusters-WebSite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint to check for code issues |

---

## 🌐 Deployment

This site is deployed on **Vercel** with automatic deployments on every push to `main`.

The `vercel.json` config includes SPA rewrites so all routes (e.g. `/team`, `/events`) work correctly on refresh.

### Manual Deploy via Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

---

## 🤝 Contributing

We welcome contributions from all club members!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "feat: add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request to `main`

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use for |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `style:` | UI/CSS changes |
| `refactor:` | Code restructure |
| `docs:` | Documentation updates |
| `chore:` | Config, tooling changes |

---

## 📄 License

This project is maintained by the **CodeBusters Club**. All rights reserved.

---

<div align="center">

Made with ❤️ by the **CodeBusters Team**

</div>