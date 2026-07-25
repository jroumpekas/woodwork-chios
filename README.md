# Woodwork Chios

A responsive portfolio website for a woodworking workshop based in Chios, Greece.
The website presents custom furniture, interior woodworking projects, bespoke kitchen installations, and selected completed works through a clean, image-focused layout.

> ✅ **Status:** Completed and open to future improvements

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
* Clickable logo that returns the user to the homepage
* Smooth section navigation for:

    * Hero
    * About
    * Services
    * Gallery
    * Contact

* Portfolio gallery with reusable work cards
* Six completed woodworking projects
* Project titles, categories, cover images, descriptions, and image galleries
* Dynamic work detail pages using route slugs:

    * `/works/:slug`

* Data-driven portfolio structure through a centralized `works` catalog
* Automatic gallery image loading with `import.meta.glob()`
* Dedicated image gallery for every project
* Lazy-loaded project images for better performance
* Responsive project grids and adaptive image sizing
* Contact call-to-action through Facebook
* Greek page language, descriptive metadata, and an updated page title

---

## 🖼️ Portfolio Projects

The portfolio currently includes:

* Ξύλινη κατασκευή
* Έπιπλο κατά παραγγελία
* Εσωτερική ξυλουργική εργασία
* Ειδική ξύλινη κατασκευή
* Σύνθεση Κουζίνας και Ντουλάπια
* Ξύλινη Κουζίνα

Each project has its own cover image, category, description, URL slug, and dedicated image gallery.

---

## 📁 Project Structure

```text
woodwork-chios/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images and media used across the app
│   │   └── works/          # Cover images and project gallery folders
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── data/               # Static application data
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

The app will usually be available at:

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
* `category`
* `coverImage`
* `description`
* `images`
* optional `featured` flag

This structure makes it easier to add, remove, or update portfolio projects without changing the gallery component logic.

---

### Automatic gallery image loading

Project gallery images are organized into separate folders under:

```text
src/assets/works/
```

The application uses Vite's `import.meta.glob()` to load all `.jpg` images from each project folder automatically.

A reusable helper sorts the imported files numerically, ensuring that filenames such as `image-2.jpg` appear before `image-10.jpg`.

---

### Dynamic work pages

Work detail pages are handled through React Router:

```tsx
<Route path="/works/:slug" element={<WorkDetailsPage />} />
```

Each page is generated dynamically based on the selected work slug.

The matching project is retrieved from the portfolio catalog with the `getWorkBySlug` helper.

---

### Homepage navigation

The fixed header supports navigation between homepage sections and project detail pages.

The logo and the **Αρχική** links return the user to the homepage and scroll to the top. The **Υπηρεσίες**, **Έργα**, and **Επικοινωνία** links navigate to the corresponding homepage sections with smooth scrolling.

The navigation is also adapted for smaller screens through a mobile menu.

---

### Responsive layout

The website uses Tailwind CSS responsive utilities to support:

* mobile-first layout
* tablet-friendly grids
* desktop portfolio cards
* responsive navigation menu
* adaptive image sizing
* fixed header spacing

---

### Page metadata

The main HTML document uses Greek as the page language and includes a descriptive title and meta description for the website.

```html
<html lang="el">
<title>Woodwork Chios | Ξυλουργικές Εργασίες</title>
```

---

## 🗺️ Possible Future Improvements

The core project is complete. Possible future additions include:

* [ ] Deploy the website using Vercel or Netlify
* [ ] Add an image lightbox or modal to project galleries
* [ ] Optimize large images and convert them to WebP
* [ ] Add a contact form with email integration
* [ ] Add multilingual support for Greek and English
* [ ] Add a dedicated `/works` page for all portfolio projects

---

## 👤 Author

**Dimitris Roumpekas**

* GitHub: [@jroumpekas](https://github.com/jroumpekas)

---

Built with React, TypeScript, Vite, and Tailwind CSS.
