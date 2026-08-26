"use client";

import { Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#before-after", label: "Before & After" },
  { href: "#why-us", label: "Why Us" },
  { href: "#cities", label: "Cities" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 shrink-0">
          <span className="font-display italic text-xl sm:text-2xl text-rose tracking-tight">
            One Call
          </span>
          <span className="hidden xs:inline font-body text-[10px] sm:text-xs tracking-[0.25em] uppercase text-ink/60">
            Home Service
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-ink/75 hover:text-rose transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+919001796614"
          className="flex items-center gap-2 rounded-full bg-rose text-ivory px-4 sm:px-5 py-2.5 text-sm font-semibold hover:bg-rose-dark transition-colors shrink-0"
        >
          <Phone size={16} strokeWidth={2.25} />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </header>
  );
}
