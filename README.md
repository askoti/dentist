# AskDentist – Modern Dental Practice Website

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4+-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify)](https://askdentist.netlify.app)

[Live Demo](https://askdentist.netlify.app) • [GitHub](https://github.com/askoti/dentist) • [Portfolio](https://github.com/askoti)

</div>

---

## 🦷 Project Overview

**AskDentist** is a modern, full-featured dental practice website built with Next.js and TypeScript. It showcases a boutique dental clinic with a focus on premium UX, real-time data integration, and responsive design.

The project demonstrates advanced Next.js patterns including dynamic data fetching from external sources, interactive UI components, and production-ready deployment optimization.

---

## Key Features

### Hero Section with Infinite Animation
- Seamlessly looping stripe pattern animation
- Modern overlay design with call-to-action
- Responsive typography and spacing
- Built with CSS animations for optimal performance

### Interactive Image Carousel
- Smooth transitions and slide navigation
- Touch-friendly controls
- Displays dental services and clinical excellence
- Fully responsive across all devices

### Live Appointment Scheduling
- **Dynamic Google Sheets Integration**: Real-time sync with a linked Google Sheet
- Changes propagate within minutes—no need for backend rebuilds
- Displays dentist availability and confirmed appointments
- Clean, professional calendar UI
- Responsive table design with status indicators

### Service Cards & Features Section
- Grid layout showcasing dental services (General Dentistry, Invisalign, Dental Implants, Cosmetic Care)
- Icon-driven design with descriptive copy
- Before/after gallery for cosmetic procedures
- Partner/credibility logos section

### Fully Responsive Design
- Desktop, tablet, and mobile optimized
- Performance-first approach
- Accessible navigation and form inputs
- Clean, modern aesthetic throughout

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15+** | React framework with App Router for server/client components |
| **TypeScript** | Type-safe development and better code maintainability |
| **Tailwind CSS** | Utility-first styling for rapid, consistent design |
| **Google Sheets API** | Dynamic data fetching for appointment scheduling |
| **Netlify** | Deployment and hosting |

---

## Project Structure

```
dentist/
├── app/
│   ├── layout.tsx          # Root layout with metadata & global styles
│   ├── page.tsx            # Landing page (hero, services, gallery)
│   ├── appointments/
│   │   └── page.tsx        # Appointments page with live Google Sheets data
│   └── api/                # API routes (if used for data fetching)
├── components/
│   ├── Hero.tsx            # Animated hero section
│   ├── Carousel.tsx        # Image slider component
│   ├── ServiceCards.tsx    # Service offerings grid
│   ├── AppointmentTable.tsx # Calendar/appointment display
│   └── ...
├── public/                 # Static assets (images, icons)
├── styles/                 # Global styles & Tailwind config
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- A Google Sheets document with appointment data

### Installation

```bash
# Clone the repository
git clone https://github.com/askoti/dentist.git
cd dentist

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Google Sheets API key/link to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Netlify
netlify deploy --prod
```

---

## Google Sheets Integration

The appointments page syncs live data from a Google Sheet without backend complexity:

1. **Setup**: Link a public/shared Google Sheet with appointment data
2. **Data Format**: Columns include Time, Patient Name, Service, Dentist, Status
3. **Refresh**: Data updates within minutes of Sheet changes
4. **No API Backend Needed**: Direct integration keeps the stack minimal and maintainable

---

## Performance & Optimization

- **Lazy Loading**: Images load on-demand for faster initial page load
- **CSS Animations**: Hardware-accelerated stripe animations reduce jank
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **SEO Ready**: Next.js metadata and semantic HTML
- **Production Build**: Optimized bundle size and asset compression via Netlify

---

## Design Highlights

- **Color Palette**: Professional blues, grays, and accent colors
- **Typography**: Modern sans-serif fonts with clear hierarchy
- **Spacing**: Consistent padding and margins using Tailwind's scale
- **Icons**: Simple, clean icons for services and features
- **Before/After Gallery**: Interactive slider showcasing cosmetic results

---

## What I Learned & Showcased

✅ Next.js 15+ App Router (Server/Client Components)  
✅ TypeScript for type-safe React components  
✅ Tailwind CSS for production-grade styling  
✅ External data integration (Google Sheets API)  
✅ Responsive design patterns  
✅ Animation & micro-interactions  
✅ Component composition & reusability  
✅ SEO & performance optimization  
✅ Deployment & CI/CD (Netlify)  

---

## Future Enhancements

- [ ] Online payment integration (Stripe/Square)
- [ ] Email notifications for appointment confirmations
- [ ] Patient portal with booking system
- [ ] Dark mode toggle
- [ ] Blog/news section with MDX
- [ ] Multi-language support (i18n)
- [ ] Analytics tracking (Vercel Analytics)
- [ ] Database integration (Supabase/Firebase) for persistent data

---

## Screenshots

| Feature | Description |
|---------|-------------|
| **Hero Section** | Animated stripe background with CTA button |
| **Services Grid** | 4-column service cards with icons |
| **Cosmetic Gallery** | Before/after slider for whitening results |
| **Appointment Calendar** | Live-synced Google Sheets data in table format |
| **Contact Form** | Booking form with service selection |

---

## Contributing

This is a portfolio project, but if you have suggestions or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License – see the LICENSE file for details.

---

## Connect With Me

- **GitHub**: [@askoti](https://github.com/askoti)
- **Portfolio**: [View my other projects](https://github.com/askoti?tab=repositories)
- **Live Demo**: [askdentist.netlify.app](https://askdentist.netlify.app)

---

## Acknowledgments

- **Next.js Team** for the incredible framework
- **Tailwind CSS** for utility-first styling excellence
- **Google Sheets API** for seamless data integration
- **Netlify** for smooth deployment and hosting

---

<div align="center">

**Made with ❤️ by [@askoti](https://github.com/askoti)**

</div>
