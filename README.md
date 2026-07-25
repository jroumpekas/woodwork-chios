🪵 Woodwork Chios

A responsive woodworking portfolio built with React and TypeScript

<p>
  A clean, image-focused website showcasing custom furniture, kitchen installations,
  interior woodwork and bespoke wooden constructions in Chios, Greece.
</p>





📌 About the Project

Woodwork Chios is a frontend portfolio website created for a woodworking workshop. It presents completed projects through a responsive homepage, reusable project cards and dedicated detail pages containing image galleries.

The application follows a data-driven structure: project information is managed centrally in src/data/work.ts, while React components render the portfolio dynamically. This makes new projects easier to add without duplicating page logic.

✅ Project status: The main portfolio experience is complete and ready for optional future improvements or deployment.

✨ Features

Responsive, mobile-first homepage

Fixed navigation header with desktop and mobile menus

Clickable logo that returns the visitor to the homepage

Smooth navigation to the Services, Works and Contact sections

Reusable project cards generated from portfolio data

Six woodworking projects with individual cover images

Project titles, categories and descriptions

Dynamic project pages using URL slugs

Dedicated image gallery for every project

Automatic gallery image loading with Vite's import.meta.glob()

Numeric image sorting for filenames such as image-2.jpg and image-10.jpg

Lazy-loaded images for improved page performance

Facebook contact call-to-action

Greek document language, title and description metadata

🛠️ Tech Stack

Technology

Purpose

React 19

Component-based user interface

TypeScript 6

Type-safe project data and components

React Router 7

Client-side routing and dynamic project pages

Vite 8

Development server and production build tooling

Tailwind CSS 4

Responsive utility-first styling

ESLint

Code quality and consistency

🧭 Application Routes

Route

Description

/

Homepage with the Hero, About, Services, Works and Contact sections

/works/:slug

Dynamically generated detail page for the selected project

Example:

/works/xylini-kouzina

🧱 Portfolio Architecture

Portfolio projects are managed in:

src/data/work.ts

Each project follows the Work type:

export type Work = {
slug: string;
title: string;
category: WorkCategory;
coverImage: string;
description: string;
images: string[];
featured?: boolean;
};

Field overview

Field

Description

slug

Unique value used to create the project URL

title

Project name displayed in the interface

category

Category assigned to the woodworking project

coverImage

Main image displayed on the homepage card

description

Short summary displayed on the project page

images

Gallery images displayed on the detail page

featured

Optional flag used to control homepage visibility

The selected project is retrieved through its slug:

export const getWorkBySlug = (slug: string | undefined) => {
return works.find((work) => work.slug === slug);
};

🖼️ Image Organization

Each project gallery is stored in its own folder under:

src/assets/works/

Current gallery structure:

src/assets/works/
├── eidiki-xylini-kataskevi/
├── epiplo-kata-paraggelia/
├── esoteriki-xylourgiki-ergasia/
├── sinthesi-kouzinas_kai-ntoulapia/
├── xylini-kataskevi/
└── xylini-kouzina/

Gallery images are loaded automatically with Vite:

const projectImages = loadImages(
import.meta.glob(
"../assets/works/project-folder/*.jpg",
{
eager: true,
import: "default",
}
) as Record<string, string>
);

A helper sorts the imported image paths numerically before returning the final array, ensuring that image-10.jpg appears after image-9.jpg rather than after image-1.jpg.

📁 Project Structure

woodwork-chios/
├── public/                      # Static public assets
├── src/
│   ├── assets/                  # Images and media
│   │   └── works/               # Cover images and gallery folders
│   ├── components/              # Shared layout and navigation components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── data/                    # Static portfolio and service data
│   │   ├── services.ts
│   │   └── work.ts
│   ├── pages/                   # Route-level pages
│   │   ├── Homepage.tsx
│   │   └── WorkDetailsPage.tsx
│   ├── sections/                # Homepage sections
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── HeroSection.tsx
│   │   └── ServicesSection.tsx
│   ├── App.tsx                  # Router and route definitions
│   ├── index.css                # Global styles and Tailwind setup
│   └── main.tsx                 # React entry point
├── index.html                   # HTML entry point and SEO metadata
├── package.json
├── tsconfig.json
└── vite.config.ts

🚀 Getting Started

Prerequisites

Make sure the following are installed:

Node.js 18 or later

npm

Installation

git clone https://github.com/jroumpekas/woodwork-chios.git
cd woodwork-chios
npm install

Start the development server

npm run dev

The application will normally be available at:

http://localhost:5173

Create a production build

npm run build

The optimized production files will be generated inside the dist/ directory.

Preview the production build

npm run preview

Run ESLint

npm run lint

📜 Available Scripts

Command

Description

npm run dev

Start the Vite development server

npm run build

Run TypeScript checks and create a production build

npm run preview

Preview the production build locally

npm run lint

Run ESLint across the project

✅ Project Status

The project currently includes the complete core portfolio flow:

Responsive homepage

Desktop and mobile navigation

Reusable portfolio cards

Dynamic project detail pages

Multiple galleries loaded from project folders

Project categories and cover images

Homepage navigation through the logo

Greek page metadata

Production build and lint scripts

Optional future improvements

Image lightbox with previous and next controls

Project filtering by category

Dedicated page containing all projects

Contact form with email integration

Custom 404 page

Image conversion to WebP or AVIF

Greek and English language support

Production deployment through Vercel or Netlify

👤 Author

Dimitris Roumpekas

Built with React, TypeScript, Vite and Tailwind CSS.