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
  title: "Symposium",
  description: "College Symposium Website",
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

        <header className="sticky top-0 z-40 border-b border-[#c1b89f] bg-[#f2e7cb] backdrop-blur supports-[backdrop-filter]:bg-[#f2e7cb]/95">
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-3">
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
              {/* Competition link removed per request */}
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#register"
                className="rounded-full bg-[#c1b89f] px-4 py-2 text-sm font-medium text-[#000000] transition-all hover:bg-[#d8cfb6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2"
              >
                Register
              </Link>
            </div>
          </nav>
        </header>

        <main id="main" className="min-h-screen">
          {children}
        </main>

        <footer className="border-t border-[#c1b89f] bg-[#d8cfb6]">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-4">
                <Image
                  src="/logos/bits-logo.png"
                  alt="BITS Pilani Hyderabad Campus logo"
                  width={80}
                  height={24}
                  className="h-6 object-contain bg-[#f2e7cb] px-2 py-1 rounded"
                />
                <Image
                  src="/logos/rae-logo.png"
                  alt="Royal Academy of Engineering logo"
                  width={80}
                  height={24}
                  className="h-6 object-contain bg-[#f2e7cb] px-2 py-1 rounded"
                />
              </div>
              <p className="text-sm text-[#000000]">
                © {new Date().getFullYear()} BITS Pilani - Royal Academy of
                Engineering. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
