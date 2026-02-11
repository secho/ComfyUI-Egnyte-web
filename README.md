# ComfyUI-Egnyte-Web

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)

**Marketing landing page for the Egnyte plugin for ComfyUI**

[Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Development](#development)

</div>

---

## Overview

This project serves as the **Chief Marketing Officer** for the Egnyte plugin for ComfyUI. It maintains and continuously improves the landing page that showcases the plugin's capabilities, features, and benefits for artists and creative teams.

The landing page provides a comprehensive overview of how the Egnyte plugin integrates with ComfyUI, enabling artists to seamlessly read and write assets directly from their Egnyte cloud drive within their creative workflows.

## Features

- 🎨 **Modern, Professional Design** - Clean, responsive UI built with Tailwind CSS
- 🚀 **Performance Optimized** - Built on Next.js 16 with React 19 for optimal performance
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Loading** - Optimized fonts, images, and code splitting
- 🎯 **SEO Friendly** - Proper metadata and semantic HTML structure
- 🔒 **Type Safe** - Full TypeScript implementation for reliability

## Tech Stack

### Core Framework
- **[Next.js 16.1.6](https://nextjs.org/)** - React framework with App Router for server-side rendering and static generation
- **[React 19.2.4](https://react.dev/)** - UI library for building component-based interfaces
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type-safe JavaScript for enhanced developer experience

### Styling
- **[Tailwind CSS 4.1.18](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[PostCSS](https://postcss.org/)** - CSS processing with autoprefixer for cross-browser compatibility
- **[Google Fonts - Manrope](https://fonts.google.com/specimen/Manrope)** - Modern sans-serif font family

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting with Next.js configuration
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment

### Deployment
- **[Vercel](https://vercel.com/)** - Hosting platform optimized for Next.js applications

## Content Creation & Publishing

### How Content is Created

Content for the landing page is created using **React components** written in **TypeScript**:

1. **Component-Based Architecture**
   - Main page content is defined in `app/page.tsx`
   - Layout and metadata are configured in `app/layout.tsx`
   - Global styles are managed in `app/globals.css`

2. **Content Structure**
   - **Hero Section** - Main value proposition and call-to-action
   - **Features Section** - Key plugin capabilities and benefits
   - **Workflow Section** - Step-by-step setup guide
   - **Artist Benefits** - Use cases and advantages for creative professionals
   - **Security Section** - Enterprise-grade access and control features
   - **Get Access Section** - Call-to-action for plugin access

3. **Styling Approach**
   - **Tailwind CSS utility classes** for rapid styling
   - **Custom theme extensions** in `tailwind.config.js` for brand-specific shadows and fonts
   - **Responsive design** using Tailwind's breakpoint system

4. **Data Management**
   - Content is defined as **JavaScript objects** within components (features, steps, node lists)
   - Easy to update and maintain without database dependencies

### How Content is Published

1. **Development Workflow**
   ```bash
   # Local development
   npm run dev        # Start development server at http://localhost:3000
   npm run build      # Build production bundle
   npm run start      # Start production server
   npm run lint       # Run ESLint checks
   ```

2. **Deployment Process**
   - **Vercel Integration** - Automatic deployments via Git push
   - **Configuration** - `vercel.json` specifies Next.js build settings
   - **Build Process**:
     1. Push changes to the repository
     2. Vercel automatically detects changes
     3. Builds the Next.js application
     4. Deploys to production with optimized assets
     5. Provides instant preview URLs for pull requests

3. **Content Updates**
   - Edit React components in `app/page.tsx` to update content
   - Modify Tailwind classes for styling changes
   - Push to repository for automatic deployment
   - Changes go live within minutes

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/secho/ComfyUI-Egnyte-web.git
   cd ComfyUI-Egnyte-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

### Project Structure

```
ComfyUI-Egnyte-web/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata and fonts
│   └── page.tsx             # Main landing page component
├── public/                  # Static assets
├── next-env.d.ts           # Next.js TypeScript definitions
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel deployment configuration
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check code quality

### Key Files

- **`app/page.tsx`** - Main landing page with all sections and content
- **`app/layout.tsx`** - Root layout, metadata, and font configuration
- **`tailwind.config.js`** - Custom theme extensions (shadows, fonts)
- **`vercel.json`** - Deployment configuration for Vercel

### Making Content Changes

1. **Update Text Content**
   - Edit the data arrays in `app/page.tsx` (features, steps, nodeList, artistBenefits)
   - Modify JSX content directly in component sections

2. **Update Styling**
   - Modify Tailwind classes on elements
   - Add custom styles in `app/globals.css` if needed
   - Extend theme in `tailwind.config.js` for reusable design tokens

3. **Add New Sections**
   - Create new section components in `app/page.tsx`
   - Follow existing patterns for consistency
   - Update navigation links if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Repository

- **GitHub**: [secho/ComfyUI-Egnyte-web](https://github.com/secho/ComfyUI-Egnyte-web)
- **Issues**: [Report an issue](https://github.com/secho/ComfyUI-Egnyte-web/issues)

---

<div align="center">

**Built with ❤️ for the ComfyUI and Egnyte communities**

</div>
