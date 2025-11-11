# 🔥 Sahara Grill - Premium Restaurant Website

A stunning, modern restaurant website built with Next.js 14, featuring smooth scrolling animations with Lenis, and elegant UI powered by Framer Motion.

## ✨ Features

- **🎨 Modern Design**: Clean, elegant UI with a dark theme and gold accents
- **🎭 Smooth Animations**: Scroll-triggered animations and parallax effects using Framer Motion
- **🌊 Smooth Scrolling**: Buttery-smooth scrolling experience powered by Lenis
- **📱 Fully Responsive**: Perfect experience on all devices
- **⚡ Performance Optimized**: Built with Next.js 14 App Router and TypeScript
- **🎯 Interactive Components**: 
  - Animated navigation with scroll effects
  - Parallax hero section
  - Interactive menu with category filters
  - Image gallery with lightbox
  - Reservation form

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
sahara-1/
├── app/
│   ├── layout.tsx          # Root layout with fonts and providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation with scroll effects
│   ├── Hero.tsx           # Hero section with parallax
│   ├── About.tsx          # About section with stats
│   ├── Menu.tsx           # Interactive menu showcase
│   ├── Gallery.tsx        # Image gallery with lightbox
│   ├── Contact.tsx        # Reservation form and contact info
│   └── SmoothScrollProvider.tsx  # Lenis smooth scroll wrapper
└── public/
```

## 🎨 Key Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lenis** - Smooth scrolling library
- **Lucide React** - Beautiful icon set

## 🎯 Sections

1. **Hero** - Eye-catching landing section with parallax background
2. **About** - Restaurant story with animated statistics
3. **Menu** - Categorized menu items with hover effects
4. **Gallery** - Visual showcase with interactive lightbox
5. **Contact** - Reservation form with contact information

## 🎨 Customization

### Colors

The color scheme is defined in `globals.css`:
- Primary Gold: `#d4af37`
- Background: `#0a0a0a` (black)
- Accents: Various shades of zinc/gray

### Fonts

Two Google Fonts are used:
- **Playfair Display** - Headings and elegant text
- **Inter** - Body text and UI elements

### Images

All images currently use Unsplash placeholders. Replace with your own:
- Update image URLs in component files
- Add images to `/public` folder
- Update image paths accordingly

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

**Built with ❤️ using Next.js and modern web technologies**
