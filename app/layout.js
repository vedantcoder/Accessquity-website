import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Accessquity",
  description: "Accessquity Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-foreground focus:text-background focus:px-3 focus:py-2"
        >
          Skip to content
        </a>

        <header
          className="sticky top-0 z-40 border-b border-[#e6e6e6] bg-alt-dark backdrop-blur supports-[backdrop-filter]:bg-alt-dark/95"
          role="banner"
        >
          <nav
            className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
            aria-label="Main Navigation"
          >
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label="Go to homepage"
              >
                <Image
                  src="/logos/symposium-logo.png"
                  alt="Accessible by Design symposium logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-[#000000]">
                    Accessible by Design
                  </h1>
                  <p className="text-xs text-[#000000]">
                    An International Symposium
                  </p>
                </div>
              </Link>
              {/* Main navigation links */}
              <div
                className="hidden md:flex items-center gap-2 ml-8"
                role="navigation"
                aria-label="Main sections"
              >
                <Link
                  href="#about"
                  className="rounded-md bg-alt-dark px-3 py-2 text-sm font-medium text-[#000000] transition-all hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                  aria-label="About section"
                >
                  About
                </Link>
                <Link
                  href="#themes"
                  className="rounded-md bg-alt-dark px-3 py-2 text-sm font-medium text-[#000000] transition-all hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                  aria-label="Themes section"
                >
                  Themes
                </Link>
                <Link
                  href="#register"
                  className="rounded-md bg-alt-dark px-3 py-2 text-sm font-medium text-[#000000] transition-all hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                  aria-label="Registration section"
                >
                  Register
                </Link>
                <Link
                  href="#organizers"
                  className="rounded-md bg-alt-dark px-3 py-2 text-sm font-medium text-[#000000] transition-all hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                  aria-label="Organizers section"
                >
                  Organizers
                </Link>
                <Link
                  href="#sponsors"
                  className="rounded-md bg-alt-dark px-3 py-2 text-sm font-medium text-[#000000] transition-all hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                  aria-label="Sponsors section"
                >
                  Sponsors
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#schedule"
                className="rounded-full bg-[#000000] px-4 py-2 text-sm font-medium text-[#ffffff] transition-all hover:bg-[#333333] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
                aria-label="View the symposium schedule"
              >
                View Schedule
              </Link>
            </div>
          </nav>
        </header>

        <main id="main" className="min-h-screen" role="main">
          {children}
        </main>

        <footer
          className="border-t border-[#e6e6e6] bg-gradient-to-b from-white to-gray-50"
          role="contentinfo"
        >
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Developer Credits */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
                <p className="text-sm text-[#666666]">
                  Designed and Developed by{" "}
                  <span className="font-semibold text-[#000000]">
                    Vedant Nichal
                  </span>
                </p>
                <span className="hidden sm:inline text-[#cccccc]">•</span>
                <a
                  href="mailto:vedant.nichal.5@gmail.com"
                  className="text-sm text-[#000000] hover:text-[#0066cc] transition-colors underline-offset-2 hover:underline"
                >
                  vedant.nichal.5@gmail.com
                </a>
                <span className="hidden sm:inline text-[#cccccc]">•</span>
                <a
                  href="https://www.linkedin.com/in/vedant-nichal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#000000] hover:text-[#0a66c2] transition-colors font-medium"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>

              {/* Divider */}
              <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#e6e6e6] to-transparent"></div>

              {/* Copyright */}
              <p className="text-xs text-[#999999]">
                © {new Date().getFullYear()} accessquity.com. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
