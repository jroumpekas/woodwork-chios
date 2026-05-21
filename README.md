# Woodwork Chios

A portfolio website for the woodworking workshop of Chios — a craftsman specializing in custom furniture, interior woodworking, and bespoke kitchen installations.

> 🚧 **Status:** Active development

## 🛠️ Tech Stack

- **React 18** with **TypeScript** — component-based UI with type safety
- **Vite** — fast dev server and optimized production builds
- **ESLint** — code quality and consistency

## ✨ Features

- Responsive single-page layout with smooth section navigation
- Hero, About, Services, Gallery, and Contact sections
- Dedicated work detail pages with project galleries
- Image gallery showcasing past projects (kitchens, custom furniture, interior work)

## 📁 Project Structure

```
woodwork-chios/
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── assets/             # Images used across the app
│   ├── components/         # Reusable UI components (Header, Footer)
│   ├── data/               # Static data (works catalog)
│   ├── pages/              # Page-level components (Homepage, WorkDetails)
│   ├── sections/           # Homepage sections (Hero, About, Services, etc.)
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html
├── vite.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** (or yarn / pnpm)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/jroumpekas/woodwork-chios.git
cd woodwork-chios
npm install
```

### Running locally

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for production

```bash
npm run build
```

The optimized output will be in the `dist/` folder. Preview the build locally with:

```bash
npm run preview
```

## 📜 Available Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the Vite development server      |
| `npm run build`   | Create a production build              |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`    | Run ESLint across the project          |

## 🗺️ Roadmap

- [ ] Add contact form with email integration
- [ ] Implement multilingual support (EN / GR)
- [ ] SEO optimization and meta tags
- [ ] Deploy to production (Vercel / Netlify)

## 👤 Author

**Dimitris Roumpekas**
- GitHub: [@jroumpekas](https://github.com/jroumpekas)

---

*Built with React, TypeScript, and Vite*