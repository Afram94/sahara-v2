# 🎯 Quick Start Guide - Sahara Grill Website

## Your Website is Ready! 🎉

The development server is now running at **http://localhost:3000**

## 🌟 What You've Got

Your restaurant website includes:

### 1. **Hero Section** 
- Stunning parallax effect on background image
- Smooth fade-in animations
- Call-to-action buttons
- Scroll indicator

### 2. **About Section**
- Restaurant story and mission
- Animated statistics (15+ years, 50K+ customers, etc.)
- Parallax image effect
- Floating card with years of experience

### 3. **Menu Section**
- 3 categories: Signature Grills, House Specialties, Smokehouse
- Filter by category with smooth transitions
- Hover effects on menu items
- Price tags and special badges (Chef's Special, Popular, etc.)
- Beautiful food images

### 4. **Gallery Section**
- Masonry-style image grid
- Lightbox popup on image click
- Hover effects with titles
- Responsive layout

### 5. **Contact/Reservation Section**
- Interactive reservation form
- Contact information with icons
- Social media links
- Opening hours
- Map placeholder

### 6. **Navigation**
- Sticky navigation that changes on scroll
- Smooth scroll to sections
- Mobile responsive menu
- Reserve table button

## 🎨 Customization Tips

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --background: #0a0a0a;     /* Main background */
  --foreground: #fafafa;      /* Text color */
  --accent: #d4af37;          /* Gold accent - change to your brand color */
  --accent-dark: #b8941f;     /* Darker accent for hovers */
}
```

### Change Restaurant Name
Search for "Sahara Grill" and "SAHARA GRILL" in:
- `components/Navigation.tsx`
- `app/layout.tsx` (metadata)
- `README.md`

### Add Your Own Images
Replace Unsplash URLs in:
- `components/Hero.tsx` - Hero background
- `components/About.tsx` - About section image
- `components/Menu.tsx` - Menu item images
- `components/Gallery.tsx` - Gallery images

### Edit Menu Items
Go to `components/Menu.tsx` and edit the `menuCategories` array:
```typescript
const menuCategories = [
  {
    id: 'signature',
    name: 'Your Category Name',
    icon: Award,
    items: [
      {
        name: 'Your Dish Name',
        description: 'Your description',
        price: '$XX',
        tags: ['Your', 'Tags'],
        image: 'your-image-url',
      },
      // Add more items...
    ],
  },
  // Add more categories...
];
```

### Update Contact Info
Edit `components/Contact.tsx`:
- Address in `contactInfo` array
- Phone numbers
- Email addresses
- Opening hours
- Social media links

## 🚀 Key Features

### Smooth Scrolling
Powered by Lenis for buttery-smooth scrolling experience. No configuration needed!

### Animations
All animations are handled by Framer Motion:
- Scroll-triggered animations (elements appear when scrolling)
- Parallax effects (background moves slower than content)
- Hover effects (interactive feedback)
- Page transitions

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interactions
- Hamburger menu on mobile

## 📱 Testing

1. **Desktop**: Visit http://localhost:3000
2. **Mobile**: Visit http://192.168.50.22:3000 from your phone (same network)
3. **Responsive**: Use browser DevTools to test different screen sizes

## 🔧 Common Tasks

### Add a New Section
1. Create component in `components/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to the main component
4. Add navigation link in `components/Navigation.tsx`

### Change Fonts
Edit `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

### Deploy
```bash
# Build for production
npm run build

# Deploy to Vercel (easiest)
npx vercel
```

## 🎭 Animation Tips

All sections use:
- `initial` - Starting state (hidden)
- `animate` - End state (visible)
- `transition` - How to animate between states

Example:
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your content
</motion.div>
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Clear Cache
```bash
rm -rf .next
npm run dev
```

### Type Errors
```bash
# Regenerate types
npm run build
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis Smooth Scroll](https://lenis.studiofreight.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Enjoy your new restaurant website! 🔥**
