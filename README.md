# Auto-Bud - Bosch Car Service 🚗

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Professional automotive service website for Auto-Bud - Bosch Car Service, serving customers in Ruda Śląska and Świętochłowice, Poland.

## 🚀 Features

- **Modern Frontend**: Responsive Next.js App Router website with a clean service-focused layout
- **Local SEO**: Canonical URLs, structured data, sitemap, robots, and location landing pages
- **Online Contact**: Contact form and reservation request flow handled by server routes
- **Performance Focus**: Optimized assets, static generation where appropriate, and Vercel deployment
- **Analytics Ready**: Google Tag Manager integration with Vercel Analytics and Speed Insights
- **Type Safety**: Full TypeScript codebase with ESLint support

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6
- **UI**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.19
- **Forms**: React Hook Form 7.71.2
- **Email**: Nodemailer
- **Analytics**: Vercel Analytics, Vercel Speed Insights, Google Tag Manager
- **Linting**: ESLint 9
- **Deployment**: Vercel

## 📁 Project Structure

```text
src/
├── app/                          # App Router pages, metadata routes, API routes
│   ├── api/                      # Form handlers
│   ├── bykowina/                 # Location page
│   ├── godula/                   # Location page
│   ├── kontakt/                  # Contact page
│   ├── mechanik-swietochlowice/  # Local landing page
│   ├── slask/                    # Regional landing page
│   ├── stacja-diagnostyczna-ruda-slaska/
│   ├── swietochlowice/           # Location page
│   ├── uslugi/                   # Services listing and dynamic service pages
│   └── wizyta/                   # Reservation page
├── components/                   # Reusable UI components
├── data/                         # Business locations and SEO content
├── lib/                          # SEO helpers and shared logic
├── providers/                    # App providers
└── view/                         # Page-specific view modules
```

## 🚀 Getting Started

### Prerequisites

- Node.js LTS
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/DanielSledz03/auto-bud.git
   cd auto-bud
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000).

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production app
- `npm run start` - Run the production build
- `npm run lint` - Run ESLint

## 🔎 SEO & Deployment

- Primary canonical host is `https://www.auto-bud.com.pl`
- `auto-bud.com.pl` and `m.auto-bud.com.pl` redirect to `www`
- `src/proxy.ts` handles URL normalization and legacy redirects
- `src/app/robots.ts` generates `robots.txt`
- `src/app/sitemap.ts` generates `sitemap.xml`
- `src/lib/seo.ts` centralizes metadata and structured data helpers
- Production deployments run on Vercel from the `main` branch

## 🌐 Services Offered

- **Vehicle Diagnostics**
- **Technical Inspections**
- **Brake Service**
- **Oil Change**
- **Air Conditioning Service**
- **Hand Car Wash**
- **Touchless Car Wash**
- **General Mechanical Repairs**

## 📍 Locations

- **Świętochłowice**: Bosch Car Service workshop and inspection station
- **Godula**: Inspection station and touchless car wash
- **Bykowina**: Inspection station for technical checks and LPG vehicles
- **Śląsk**: Regional landing page covering nearby service areas

## 🤝 Contributing

1. Create a branch from `main`
2. Make your changes
3. Run `npm run lint`
4. Open a pull request

## 📄 License

This repository is public. Brand assets and business content remain associated with Auto-Bud.

## 📞 Contact

**Auto-Bud - Bosch Car Service**

- Website: [www.auto-bud.com.pl](https://www.auto-bud.com.pl)
- Service Area: Ruda Śląska, Świętochłowice, Godula, Bykowina

---

<div align="center">
  <p>Built for Auto-Bud customers</p>
  <p>Professional automotive services in Silesia, Poland</p>
</div>
