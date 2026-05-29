# Woodwork Chios

A responsive portfolio website for a woodworking workshop based in Chios, Greece.
The website presents custom furniture, interior woodworking projects, bespoke kitchen installations, and selected past works through a clean, image-focused layout.

> 🚧 **Status:** Active development

---

## 🛠️ Tech Stack

* **React** with **TypeScript** — component-based UI with type safety
* **Vite** — fast development server and optimized production builds
* **React Router** — client-side routing for homepage and work detail pages
* **Tailwind CSS** — responsive styling and utility-first layout
* **ESLint** — code quality and consistency

---

## ✨ Features

* Responsive single-page homepage layout
* Fixed responsive navigation bar with mobile menu
* Smooth section navigation for:

    * Hero
    * About
    * Services
    * Gallery
    * Contact
* Portfolio gallery with reusable work cards
* Dynamic work detail pages using route slugs:

    * `/works/:slug`
* Data-driven portfolio structure through a static `works` catalog
* Dedicated image galleries for each project
* Lazy-loaded project images for better performance
* Contact call-to-action through Facebook

---

## 📁 Project Structure

```text
woodwork-chios/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images and media used across the app
│   │   └── works/          # Portfolio project images
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── data/               # Static data used by the app
│   │   ├── services.ts
│   │   └── work.ts
│   ├── pages/              # Page-level components
│   │   ├── Homepage.tsx
│   │   └── WorkDetailsPage.tsx
│   ├── sections/           # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── GallerySection.tsx
│   │   └── ContactSection.tsx
│   ├── App.tsx             # Root component and route definitions
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* **Node.js** 18 or higher
* **npm**

---

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/jroumpekas/woodwork-chios.git
cd woodwork-chios
npm install
```

---

### Running Locally

Start the development server:

```bash
npm run dev
```

The app will be available at:

```text
http://localhost:5173
```

---

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The production-ready files will be generated inside the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## 📜 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint across the project        |

---

## 🧱 Main Implementation Details

### Data-driven portfolio

Portfolio items are stored in `src/data/work.ts`.

Each work item includes:

* `slug`
* `title`
* `image`
* `description`
* `images`
* optional `featured` flag

This makes it easier to add, remove, or update portfolio projects without changing the gallery component logic.

---

### Dynamic work pages

Work detail pages are handled through React Router:

```tsx
<Route path="/works/:slug" element={<WorkDetailsPage />} />
```

Each page is generated dynamically based on the selected work slug.

---

### Responsive layout

The website uses Tailwind CSS responsive utilities to support:

* mobile-first layout
* tablet-friendly grids
* desktop portfolio cards
* responsive navigation menu
* adaptive image sizing

---

## 🗺️ Roadmap

* [ ] Add image lightbox/modal for project galleries
* [ ] Add contact form with email integration
* [ ] Add SEO meta tags and page titles
* [ ] Optimize images and convert large assets to WebP
* [ ] Add multilingual support: Greek / English
* [ ] Add dedicated `/works` page for all portfolio projects
* [ ] Deploy to production using Vercel or Netlify

---

## 👤 Author

**Dimitris Roumpekas**

* GitHub: [@jroumpekas](https://github.com/jroumpekas)

---

Built with React, TypeScript, Vite, and Tailwind CSS.
