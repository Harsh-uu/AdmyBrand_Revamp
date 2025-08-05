# ADmyBRAND - SaaS Homepage

A modern, professional landing page for ADmyBRAND - an omnichannel advertising platform that connects marketers with various media channels.

![ADmyBRAND Preview](https://via.placeholder.com/800x400?text=ADmyBRAND+Homepage)

## Features

- **Modern Dark Theme** - Professional dark-themed design with subtle glassmorphism effects
- **Responsive Layout** - Fully responsive design that works on all devices
- **Interactive Components** - Elegant animations and interactive elements
- **Omnichannel Marketing Focus** - Showcases advertising platform capabilities across multiple channels
- **Complete Landing Page Sections**:
  - Header with navigation
  - Hero section with animated blobs
  - Features showcase
  - Pricing plans
  - Client testimonials carousel
  - FAQ accordion
  - Contact form with validation
  - Footer with links and social media

## Technical Implementation

### Technologies Used

- **Next.js 15.4.5** - React framework for production
- **React 19.1.0** - UI library
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Sonner** - Toast notifications

### Design Elements

- **Typography**
  - Primary Font: Syne (Google Font) for headings and emphasis
  - System fonts for body text
  
- **Animations**
  - Subtle scroll reveal animations (using Framer Motion and react-intersection-observer)
  - Floating blob effects in the hero section
  - Testimonial carousel with smooth transitions
  - Accordion animations in FAQ section
  - Hover effects on interactive elements

- **Visual Effects**
  - Glassmorphism for component backgrounds
  - Gradient text and buttons
  - Semi-transparent overlays
  - Subtle borders and shadows

## Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsh-uu/AdmyBrand_Revamp
   cd saas_homepage
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
pnpm build
# or
npm run build
```

To start the production server:
```bash
pnpm start
# or
npm start
```

## Project Structure

```
├── public/               # Static assets
│   ├── web_logo.svg      # Logo file
│   └── ...               # Other static files
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── components/   # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── ...
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.mjs    # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## Customization

### Changing Colors

The color palette is defined using Tailwind CSS classes throughout the components:
- Primary colors: Indigo and purple gradients
- Background: Dark theme with semi-transparent components
- Text: White and gray variants

To change the color scheme, update the relevant Tailwind classes in the component files.

### Adding New Sections

1. Create a new component in the `src/app/components` directory
2. Import and add the component to the `page.tsx` file
3. Style using Tailwind CSS classes

### Updating Content

Edit the text content in each component file to match your product's messaging and branding.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Testimonial images: [Unsplash](https://unsplash.com/)
