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
          className="border-t border-[#e6e6e6] bg-alt-dark"
          role="contentinfo"
        >
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-[#000000]">
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
