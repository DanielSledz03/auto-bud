# Auto-Bud - Bosch Car Service 🚗

[![Next.js](https://img.shields.io/badge/Next.js-14.2.13-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.13-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Professional automotive service website for Auto-Bud - Bosch Car Service, serving customers in Ruda Śląska and Świętochłowice, Poland.

## 🚀 Features

- **Modern Design**: Clean, responsive interface built with Tailwind CSS
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Friendly**: Optimized meta tags and structured data
- **Contact Integration**: Email functionality with MailerSend and Resend
- **Analytics**: Google Analytics and Vercel Analytics integration
- **Image Optimization**: Lightbox gallery for service showcases
- **Form Handling**: React Hook Form for contact forms
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.13
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.13
- **Forms**: React Hook Form 7.53.0
- **Email**: MailerSend, Resend, Nodemailer
- **Analytics**: Google Analytics, Vercel Analytics
- **Gallery**: Lightbox.js React
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── api/            # API routes
│   ├── bykowina/       # Location-specific pages
│   ├── godula/         # Location-specific pages
│   ├── kontakt/        # Contact page
│   ├── o-nas/          # About us page
│   ├── swietochlowice/ # Location-specific pages
│   ├── uslugi/         # Services page
│   └── wizyta/         # Appointment page
├── components/         # Reusable UI components
├── constants/          # Application constants
├── data/              # Static data and content
├── form/              # Form components
├── providers/         # Context providers
└── view/              # Page-specific view components
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/auto-bud.git
   cd auto-bud
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration
MAILERSEND_API_KEY=your_mailersend_api_key
RESEND_API_KEY=your_resend_api_key

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added in:

- `src/app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind configuration

## 🌐 Services Offered

- **Vehicle Diagnostics**: Professional diagnostic services
- **Oil Changes**: Regular maintenance and oil changes
- **Tire Services**: Tire replacement and balancing
- **Brake Services**: Brake pad replacement and maintenance
- **Air Conditioning**: AC service and maintenance
- **General Repairs**: Comprehensive automotive repairs

## 📍 Locations

- **Ruda Śląska**: Multiple service locations
- **Świętochłowice**: Bosch Car Service authorized center
- **Godula**: Diagnostic station
- **Bykowina**: Service center

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

**Auto-Bud - Bosch Car Service**

- Website: [www.auto-bud.com.pl](https://www.auto-bud.com.pl)
- Locations: Ruda Śląska, Świętochłowice, Godula, Bykowina

---

<div align="center">
  <p>Built with ❤️ for Auto-Bud customers</p>
  <p>Professional automotive services in Silesia, Poland</p>
</div>
