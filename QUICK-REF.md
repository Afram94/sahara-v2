# 🎯 Quick Reference Card

## 🚀 Essential Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Build & Deploy
npm run build           # Create production build
npm run start           # Run production server
npm run lint            # Check for errors

# Cleanup
rm -rf .next            # Clear build cache
rm -rf node_modules     # Remove dependencies
npm install             # Reinstall dependencies
```

## 📁 Key Files to Edit

### 🎨 Branding & Colors
- `app/globals.css` - Colors, fonts, global styles
- `components/Navigation.tsx` - Restaurant name & logo

### 📝 Content
- `components/Hero.tsx` - Hero text & images
- `components/About.tsx` - Story & statistics
- `components/Menu.tsx` - Menu items & prices
- `components/Gallery.tsx` - Gallery images
- `components/Contact.tsx` - Contact info & form

### ⚙️ Config
- `app/layout.tsx` - Page title, description, fonts
- `next.config.ts` - Next.js configuration

## 🎨 Color Variables

```css
--background: #0a0a0a      /* Main black background */
--foreground: #fafafa       /* White text */
--accent: #d4af37          /* Gold accent */
--accent-dark: #b8941f     /* Darker gold */
```

## 📱 Breakpoints

```css
sm:   640px   /* Small tablets */
md:   768px   /* Tablets */
lg:   1024px  /* Small laptops */
xl:   1280px  /* Desktops */
2xl:  1536px  /* Large screens */
```

## 🔗 Important URLs

- **Local**: http://localhost:3000
- **Network**: http://192.168.50.22:3000
- **Docs**: See README.md, GUIDE.md, SUMMARY.md

## 🎭 Key Features

### Animations
- Scroll-triggered: `useInView` hook from Framer Motion
- Parallax: `useScroll` + `useTransform`
- Hover: `whileHover` prop
- Transitions: `initial`, `animate`, `transition`

### Navigation Links
```tsx
#home      → Hero section
#about     → About section
#menu      → Menu section
#gallery   → Gallery section
#contact   → Contact section
```

## 🖼️ Image URLs

Replace these Unsplash URLs with your own:

```tsx
// Hero background
'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069'

// About section
'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070'

// Menu items - in components/Menu.tsx
// Gallery - in components/Gallery.tsx
```

## 📝 Menu Categories

1. **Signature Grills** (icon: Award)
2. **House Specialties** (icon: ChefHat)
3. **Smokehouse** (icon: Flame)

## 🎯 Quick Edits

### Change Restaurant Name
Search & replace: "Sahara Grill" or "SAHARA GRILL"

### Update Contact Info
Edit `components/Contact.tsx`:
- Line ~41: Address
- Line ~46: Phone numbers
- Line ~51: Email addresses
- Line ~56: Opening hours

### Modify Menu Items
Edit `components/Menu.tsx`:
- Start at line ~11 (menuCategories array)
- Each category has `name`, `icon`, `items[]`
- Each item has `name`, `description`, `price`, `tags`, `image`

### Change Colors
Edit `app/globals.css`:
- Lines 4-9: Root CSS variables
- Replace `#d4af37` throughout project for new accent color

## 🔧 Common Tasks

### Add New Section
1. Create `components/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add `<YourSection />` to page
4. Add link in `components/Navigation.tsx`

### Change Fonts
Edit `app/layout.tsx`:
```tsx
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

### Add Animation
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

### Server won't start
```bash
lsof -ti:3000 | xargs kill -9  # Kill process on port 3000
rm -rf .next                   # Clear build cache
npm run dev                    # Restart
```

### Changes not showing
- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Clear `.next` folder
- Check file is saved

### TypeScript errors
```bash
npm run build  # Will show all errors
```

## 📦 File Structure

```
sahara-1/
├── app/
│   ├── layout.tsx     ← Page wrapper, fonts, metadata
│   ├── page.tsx       ← Main page (imports all sections)
│   └── globals.css    ← Global styles, colors, fonts
├── components/
│   ├── Navigation.tsx ← Nav bar
│   ├── Hero.tsx       ← Hero section
│   ├── About.tsx      ← About section
│   ├── Menu.tsx       ← Menu section
│   ├── Gallery.tsx    ← Gallery section
│   ├── Contact.tsx    ← Contact/footer section
│   └── SmoothScrollProvider.tsx ← Lenis wrapper
└── public/            ← Static assets (add your images here)
```

## 🎨 Design Tokens

### Spacing Scale
```
0.5 = 2px    4  = 16px   12 = 48px
1   = 4px    6  = 24px   16 = 64px
2   = 8px    8  = 32px   20 = 80px
3   = 12px   10 = 40px   24 = 96px
```

### Font Sizes
```
text-xs   = 12px
text-sm   = 14px
text-base = 16px
text-lg   = 18px
text-xl   = 20px
text-2xl  = 24px
text-4xl  = 36px
text-6xl  = 60px
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Follow prompts
```

### Netlify
```bash
npm run build
# Drag .next folder to Netlify
```

### Manual
```bash
npm run build
npm run start
# Set up on your server
```

## 📊 Performance Tips

- ✅ Images: Use Next.js `<Image>` component
- ✅ Fonts: Already optimized with next/font
- ✅ Code splitting: Automatic with Next.js
- ✅ Lazy loading: Add where needed
- ✅ Analytics: Add after deployment

## 🎯 SEO Checklist

- [ ] Update page title in `layout.tsx`
- [ ] Update description in `layout.tsx`
- [ ] Add Open Graph tags
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console

## 📞 Need Help?

- 📖 Check GUIDE.md for detailed instructions
- 📋 See SUMMARY.md for feature list
- 💡 Read FUTURE-IDEAS.md for enhancements
- ✅ Review CHECKLIST.md for status

---

**Quick Tip**: Keep this file open while editing! 📌
