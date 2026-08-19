import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OneCallHomeService — Trusted Home Services in Jaipur & Udaipur",
  description:
    "Plumbing, painting, electrical, cleaning, deep cleaning and AC service — one call brings a trusted professional to your door in Jaipur and Udaipur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body antialiased">
        {/* Hidden SVG defs: the jharokha-arch clip-path is the site's signature
            shape, reused for the hero portrait, service cards and the gallery. */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <clipPath id="jharokha-arch" clipPathUnits="objectBoundingBox">
              <path d="M0,1 L0,0.4 C0,0.16 0.2,0 0.5,0 C0.8,0 1,0.16 1,0.4 L1,1 Z" />
            </clipPath>
            <clipPath id="jharokha-arch-sm" clipPathUnits="objectBoundingBox">
              <path d="M0,1 L0,0.32 C0,0.1 0.18,0 0.5,0 C0.82,0 1,0.1 1,0.32 L1,1 Z" />
            </clipPath>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
