# Bluejay Innolabs - Next.js Website Clone

A modern, fully responsive clone of the Bluejay Innolabs website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for smooth animations
- ✅ Fully responsive design
- ✅ Modern UI/UX with gradients and glass effects
- ✅ Coming Soon section with countdown timer
- ✅ Email subscription form
- ✅ SEO optimized
- ✅ No backend required (frontend only)

## 📁 Project Structure

```
bluejay-innolabs/
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   └── components/
│       ├── Header.tsx            # Navigation header
│       ├── Hero.tsx              # Hero section
│       ├── Features.tsx          # Features/Services section
│       ├── ComingSoon.tsx        # Coming soon with countdown
│       └── Footer.tsx            # Footer section
├── public/
│   └── images/                   # Image assets
├── tailwind.config.ts            # Tailwind configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🛠️ Installation & Setup

### Step 1: Create Next.js Project

```bash
# Create new Next.js app
npx create-next-app@latest bluejay-innolabs

# When prompted, choose:
# ✓ Would you like to use TypeScript? → Yes
# ✓ Would you like to use ESLint? → Yes
# ✓ Would you like to use Tailwind CSS? → Yes
# ✓ Would you like to use `src/` directory? → Yes
# ✓ Would you like to use App Router? → Yes
# ✓ Would you like to customize the default import alias? → No

# Navigate to project
cd bluejay-innolabs
```

### Step 2: Install Dependencies

```bash
npm install framer-motion lucide-react
```

### Step 3: Create Component Files

Create the following files in your project:

1. **src/app/globals.css** - Global styles
2. **src/app/layout.tsx** - Root layout with fonts
3. **src/app/page.tsx** - Main page component
4. **src/components/Header.tsx** - Navigation component
5. **src/components/Hero.tsx** - Hero section
6. **src/components/Features.tsx** - Features section
7. **src/components/ComingSoon.tsx** - Coming soon section
8. **src/components/Footer.tsx** - Footer component
9. **tailwind.config.ts** - Tailwind configuration

Copy the code from each artifact provided above into the respective files.

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.5",
    "framer-motion": "^11.3.21",
    "lucide-react": "^0.428.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.5"
  }
}
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    500: '#0066ff', // Change primary color
    // ... other shades
  },
}
```

### Content

Edit the component files to change:
- **Header.tsx**: Navigation links and logo
- **Hero.tsx**: Main heading and description
- **Features.tsx**: Service cards and descriptions
- **ComingSoon.tsx**: Launch date and countdown
- **Footer.tsx**: Contact info and links

### Images

Replace the conference room image URL in `Hero.tsx`:
```typescript
src="YOUR_IMAGE_URL_HERE"
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## 📱 Responsive Design

The website is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## ✨ Features Breakdown

### Header Component
- Fixed navigation with scroll effect
- Mobile-responsive menu
- Smooth transitions

### Hero Section
- Animated gradient background
- Statistics counters
- Conference room image
- Call-to-action buttons

### Features Section
- 9 service cards with icons
- Hover animations
- Grid layout
- CTA section

### Coming Soon Section
- Countdown timer (60 days)
- Email subscription form
- Success feedback
- Dark gradient background

### Footer Component
- Company information
- Quick links
- Social media icons
- Contact details

## 🔧 Troubleshooting

### Issue: Animations not working
**Solution**: Make sure framer-motion is installed correctly:
```bash
npm install framer-motion
```

### Issue: Icons not showing
**Solution**: Verify lucide-react installation:
```bash
npm install lucide-react
```

### Issue: Styles not applying
**Solution**: Check that Tailwind is configured properly in `tailwind.config.ts`

## 📝 Environment Variables

This project doesn't require any environment variables as it's frontend-only.

## 🤝 Contributing

This is a demo project. Feel free to fork and customize for your needs.

## 📄 License

MIT License - feel free to use this code for your projects.

## 🎯 Next Steps

1. ✅ Clone the repository
2. ✅ Install dependencies
3. ✅ Run development server
4. ✅ Customize content
5. ✅ Add your own images
6. ✅ Deploy to Vercel

## 📞 Support

For issues or questions, please check:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Framer Motion Documentation: https://www.framer.com/motion/

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS"# blue-test" 
