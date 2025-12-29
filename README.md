# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- Modern and clean design
- Dark mode support with system preference detection
- Fully responsive layout
- Built with Next.js 16 and React
- Styled with Tailwind CSS and shadcn/ui components
- Smooth scrolling navigation
- Sections: Hero, About, Skills, Projects, Contact
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Customization

### Update Personal Information

1. **Hero Section** (`components/sections/hero.tsx`)
   - Update your name and title
   - Modify the description

2. **About Section** (`components/sections/about.tsx`)
   - Add your background and expertise
   - Customize the content

3. **Skills Section** (`components/sections/skills.tsx`)
   - Update the skill categories
   - Add or remove technologies

4. **Projects Section** (`components/sections/projects.tsx`)
   - Add your actual projects
   - Update project details, links, and technologies

5. **Contact Section** (`components/sections/contact.tsx`)
   - Update email address
   - Add your GitHub and LinkedIn URLs

### Styling

- Colors and theme can be customized in `app/globals.css`
- Component styling uses Tailwind CSS classes
- shadcn/ui components can be customized in `components/ui/`

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Theme:** next-themes
- **Icons:** SVG icons

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
