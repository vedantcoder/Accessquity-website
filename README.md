# AccessQuity: Accessible by Design

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red)]()

### **🌐 Visit the Live Website: [accessquity.com](https://accessquity.com)**

> **Official website for the international symposium "Accessible by Design: Towards Disability Equity in Tech Futures"**

A two-day international symposium hosted by **BITS Pilani Hyderabad Campus** on **October 15-16, 2025**, supported by the Department of Science, Innovation, and Technology's International Science Partnerships Fund (ISPF) via the **Royal Academy of Engineering**, United Kingdom, under the Frontiers Champions scheme.

---

## Table of Contents

- [About the Symposium](#about-the-symposium)
- [Accessibility-First Design](#accessibility-first-design)
- [Website Features](#website-features)
- [Technology Stack](#technology-stack)
- [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Support](#support)
- [License](#license)

---

## About the Symposium

**Accessible by Design** is a two-day international symposium dedicated to highlighting the development of assistive technology (AT) in India and fostering a more inclusive, equitable, and empowered society for people with disabilities.

### Mission

To center the knowledge and leadership of persons with disabilities as the shapers and co-creators of accessible and just design futures, addressing barriers such as:

- Limited awareness and information about assistive technology
- Affordability and accessibility challenges
- Research, development, and manufacturing hurdles
- Poor implementation of access mandates despite UNCRPD-compliant legislation (RPD Act 2016)

### Symposium Events

- **Thematic panel discussions** exploring critical disability equity topics
- **Action plan and recommendation workshops** for stakeholders
- **Technology showcase** featuring AT companies and innovators

### Target Audience

- Disability advocates and persons with disabilities
- Designers and UX professionals
- Tech developers and engineers
- Accessibility professionals
- Policymakers and legal practitioners
- Educators and researchers
- Industry leaders
- Disabled Persons Organizations (DPOs) and NGOs

---

## Accessibility-First Design

**This website has been specifically designed to be accessible to people with disabilities, including those who use assistive technologies such as screen readers.** Given that this symposium focuses on disability equity and assistive technology, we recognize that many of our visitors will be persons with disabilities who rely on accessible web design to navigate and interact with online content.

### How We've Implemented Accessibility

1. **Semantic HTML5 Structure**
   - Proper use of heading hierarchy (h1, h2, h3) for logical document structure
   - HTML5 landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) for easy navigation
   - Meaningful heading order that screen readers can use to navigate content

2. **ARIA (Accessible Rich Internet Applications) Support**
   - Comprehensive ARIA labels on all interactive elements
   - `aria-labelledby` and `aria-describedby` attributes to provide context
   - `role` attributes to clarify element purposes (e.g., `role="banner"`, `role="navigation"`)
   - Screen reader-only content using `sr-only` class for additional context

3. **Keyboard Navigation**
   - All interactive elements (buttons, links, forms) are fully accessible via keyboard
   - Logical tab order throughout the page
   - Visible focus indicators on all focusable elements
   - `focus-visible` states for better keyboard navigation experience

4. **Screen Reader Optimization**
   - Descriptive alt text for all images and logos
   - Hidden descriptive text (using `sr-only`) to provide additional context
   - Proper labeling of form inputs and buttons
   - Skip navigation links for quick content access

5. **Color Contrast and Visual Design**
   - WCAG 2.1 Level AA compliant color contrast ratios (minimum 4.5:1 for normal text)
   - Black text on white background for maximum readability
   - Text sizes that are easily scalable
   - No reliance on color alone to convey information

6. **Responsive and Flexible Design**
   - Mobile-first approach ensures accessibility on all devices
   - Text reflow without horizontal scrolling
   - Touch targets of adequate size (minimum 44x44 pixels) for mobile users
   - Content adapts to different screen sizes and orientations

7. **Performance for Assistive Technology**
   - Fast page load times reduce wait times for screen reader users
   - Optimized images with proper alt text
   - Clean, semantic code that assistive technologies can parse efficiently

This accessibility implementation ensures that all visitors, regardless of their abilities or the assistive technologies they use, can fully engage with the symposium information, register for events, and participate in the broader conversation about disability equity in technology.

---

## Website Features

- **Fully Accessible Interface**: WCAG 2.1 Level AA compliant design optimized for screen readers and assistive technologies
- **Responsive Layout**: Seamlessly adapts to desktop, tablet, and mobile devices
- **Event Information**: Comprehensive details about symposium schedule, themes, and events
- **Registration System**: Easy-to-use registration interface for participants
- **Technology Showcase**: Display section for AT companies and innovators
- **Partner Organizations**: Showcase of DPOs, NGOs, and supporting institutions
- **Interactive Sections**: Dynamic content for themes, participants, and workshop details
- **Performance Optimized**: Fast loading times with Next.js server-side rendering and optimization
- **International Reach**: Professional presentation suitable for global audience

---

## Technology Stack

This website is built using modern web technologies:

- **[Next.js 15.5.3](https://nextjs.org/)** - React framework for production-grade applications
- **[React 19.1.0](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ESLint](https://eslint.org/)** - Code quality and consistency
- **[PostCSS](https://postcss.org/)** - CSS transformations

---

## Running Locally

Follow these step-by-step instructions to run this website on your local machine.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (version 9.0.0 or higher, comes with Node.js)
- **Git** - [Download from git-scm.com](https://git-scm.com/)

To verify your installations, open your terminal (Command Prompt on Windows) and run:

```bash
node --version
npm --version
git --version
```

### Step 1: Clone the Repository

Open your terminal and run the following commands:

```bash
git clone https://github.com/vedantcoder/Accessquity-website.git
cd symposium-website
```

This downloads the project files to your computer and navigates into the project directory.

### Step 2: Install Dependencies

Install all required packages by running:

```bash
npm install
```

This command reads the `package.json` file and installs all necessary dependencies including Next.js, React, and Tailwind CSS. The installation may take a few minutes.

**Alternative package managers:**
- If you prefer yarn: `yarn install`
- If you prefer pnpm: `pnpm install`

### Step 3: Start the Development Server

Run the following command to start the local development server:

```bash
npm run dev
```

**Alternative commands:**
- Using yarn: `yarn dev`
- Using pnpm: `pnpm dev`

You should see output similar to:
```
▲ Next.js 15.5.3
- Local:        http://localhost:3000
- Ready in [time]
```

### Step 4: View the Website

Open your web browser and navigate to:

```
http://localhost:3000
```

The website will now be running on your local machine. Any changes you make to the code will automatically refresh the page (hot reloading is enabled by default).

### Step 5: Making Changes

- Edit pages in the `app/` directory
- Modify styles in `app/globals.css`
- Add images to the `public/` directory
- The browser will automatically reload when you save changes

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This compiles and optimizes the application. After building, start the production server:

```bash
npm run start
```

The production build will be served at `http://localhost:3000` with full optimizations enabled.

### Troubleshooting

**Port already in use:**
If port 3000 is occupied, Next.js will automatically try port 3001, 3002, etc.

**Installation errors:**
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

**Cache issues:**
- Run `npm run build` to clear and rebuild

---

## Project Structure

```
symposium-website/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.js            # Root layout component
│   └── page.js              # Main homepage component
├── public/                   # Static assets
│   └── logos/               # Logos and images
│       ├── bits-logo.png
│       ├── rae-logo.png
│       ├── symposium-logo.png
│       └── [partner logos]
├── eslint.config.mjs        # ESLint configuration
├── jsconfig.json            # JavaScript configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
└── README.md                # Project documentation
```

---

## Support

For questions, issues, or support regarding:

- **The Symposium**: Contact the organizing committee at BITS Pilani Hyderabad Campus
- **Website Technical Issues**: Open an issue in the [GitHub repository](https://github.com/vedantcoder/Accessquity-website/issues)
- **Accessibility Concerns**: We prioritize accessibility - please report any issues immediately

---

## License

This project is private and proprietary.

**© 2025 accessquity.com. All rights reserved.**

---

## Learn More

### About Next.js

To learn more about the technologies powering this website:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

### About Accessibility

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Rights of Persons with Disabilities Act, 2016 (India)](https://legislative.gov.in/sites/default/files/A2016-49_1.pdf)

---

## Visit the Symposium Website

**[accessquity.com](https://accessquity.com)**

Experience the fully accessible website designed for persons with disabilities and assistive technology users.

---

**Built for disability equity and inclusive design**

© 2025 accessquity.com. All rights reserved.
