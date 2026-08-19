import Image from "next/image";
import { Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1682414181845-a725f154a14a?q=80&w=2400&auto=format&fit=crop"
        alt="Ornate haveli facade with traditional jharokha windows, the architectural heart of Jaipur"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Cinematic gradient for legibility, warmed toward the brand's espresso tone */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/10 to-transparent" />

      <div className="relative z-10 h-full mx-auto max-w-6xl px-5 sm:px-8 flex flex-col justify-end pb-16 sm:pb-24 pt-28">
        <p className="font-body text-xs sm:text-sm tracking-[0.35em] uppercase text-brass-light mb-4 sm:mb-5 animate-fadeUp">
          Jaipur &middot; Udaipur
        </p>
        <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl text-ivory text-balance max-w-3xl animate-fadeUp [animation-delay:100ms] opacity-0">
          Your home deserves <span className="italic text-brass-light">one call</span> — not five.
        </h1>
        <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-ivory/85 leading-relaxed animate-fadeUp [animation-delay:220ms] opacity-0">
          Plumbing, painting, electrical, cleaning, deep cleaning and AC service —
          one trusted professional at your door, on time, every time.
        </p>

        <div className="mt-8 sm:mt-9 flex flex-col xs:flex-row gap-3 sm:gap-4 animate-fadeUp [animation-delay:340ms] opacity-0">
          <a
            href="tel:+919351222608"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose hover:bg-rose-light transition-colors text-ivory px-7 py-3.5 font-semibold text-sm sm:text-base"
          >
            <Phone size={17} strokeWidth={2.25} />
            Call Now — Jaipur
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/40 hover:border-ivory hover:bg-ivory/10 transition-colors text-ivory px-7 py-3.5 font-semibold text-sm sm:text-base"
          >
            See Our Services
          </a>
        </div>
      </div>

      <a
        href="#why-us"
        aria-label="Scroll to learn more"
        className="hidden sm:flex absolute bottom-7 right-8 z-10 h-10 w-10 items-center justify-center rounded-full border border-ivory/40 text-ivory/80 hover:text-ivory hover:border-ivory transition-colors animate-fadeUp [animation-delay:460ms] opacity-0"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
