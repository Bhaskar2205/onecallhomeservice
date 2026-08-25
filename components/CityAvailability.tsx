import { Phone, MapPin } from "lucide-react";

export default function CityAvailability() {
  return (
    <section id="cities" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <p className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-rose font-semibold mb-3">
            Where We Serve
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.1] text-ink text-balance">
            Two cities. One number for each.
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-0">
          {/* Jaipur */}
          <div className="text-center md:text-right md:pr-14 flex flex-col items-center md:items-end">
            <div className="inline-flex items-center gap-2 text-brass mb-4">
              <MapPin size={16} />
              <span className="text-xs tracking-[0.25em] uppercase font-semibold">Currently Serving</span>
            </div>
            <h3 className="font-display italic text-4xl sm:text-5xl text-ink mb-4">Jaipur</h3>
            <p className="text-ink/60 text-sm leading-relaxed max-w-xs mb-7">
              Our home base — every service, every day, across the Pink City.
            </p>
            <a
              href="tel:+919001796614"
              className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark transition-colors text-ivory px-7 py-3.5 font-semibold text-sm sm:text-base"
            >
              <Phone size={16} strokeWidth={2.25} />
               +91 90017 96614
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px jali-divider mx-auto" />
          <div className="md:hidden h-px w-32 mx-auto jali-bg opacity-60" />

          {/* Udaipur */}
          <div className="text-center md:text-left md:pl-14 flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 text-brass mb-4">
              <MapPin size={16} />
              <span className="text-xs tracking-[0.25em] uppercase font-semibold">Currently Serving</span>
            </div>
            <h3 className="font-display italic text-4xl sm:text-5xl text-ink mb-4">Udaipur</h3>
            <p className="text-ink/60 text-sm leading-relaxed max-w-xs mb-7">
              The City of Lakes, covered by the same trusted standard of work.
            </p>
            <a
              href="tel:+918955103727
"
              className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark transition-colors text-ivory px-7 py-3.5 font-semibold text-sm sm:text-base"
            >
              <Phone size={16} strokeWidth={2.25} />
              +91 89551 03727
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
