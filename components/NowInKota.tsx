import { Phone, ArrowRight } from "lucide-react";
import { services } from "./Services";

export default function NowInKota() {
  return (
    <section id="kota" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 sm:pt-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-rose text-ivory shadow-2xl shadow-rose/25">
          {/* Kota Doria check — the fine woven grid Kota's saris are known for */}
          <div className="absolute inset-0 doria-bg" />
          <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-brass/30 blur-3xl" />
          <div className="absolute -bottom-40 right-1/3 h-72 w-72 rounded-full bg-rose-dark/70 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-14 items-center p-7 sm:p-12 lg:p-14">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-brass-light/50 bg-espresso/25 pl-3 pr-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brass-light opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brass-light" />
                </span>
                <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-brass-light">
                  New City &middot; Now Live
                </span>
              </div>

              <h2 className="font-display text-[2.2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-balance">
                Namaste, <span className="italic text-brass-light">Kota.</span> One call now reaches you too.
              </h2>
              <p className="mt-5 max-w-lg text-ivory/80 leading-relaxed">
                Every service we offer in Jaipur and Udaipur is now available
                across Kota — the same verified professionals, the same on-time
                promise, the same quality guarantee.
              </p>

              <p className="mt-8 mb-3 text-[11px] tracking-[0.25em] uppercase font-semibold text-ivory/55">
                All {services.length} services, available today
              </p>
              <ul className="flex flex-wrap gap-2 sm:gap-2.5">
                {services.map(({ icon: Icon, title }) => (
                  <li
                    key={title}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ivory/10 border border-ivory/15 px-3 py-1.5 text-xs sm:text-[13px] font-medium text-ivory/90"
                  >
                    <Icon size={14} className="text-brass-light" />
                    {title}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col xs:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:+919001716614"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brass hover:bg-brass-light transition-colors text-espresso px-7 py-3.5 font-semibold text-sm sm:text-base"
                >
                  <Phone size={16} strokeWidth={2.25} />
                  Call Kota — +91 90017 16614
                </a>
                <a
                  href="#cities"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-ivory/40 hover:border-ivory hover:bg-ivory/10 transition-colors text-ivory px-7 py-3.5 font-semibold text-sm sm:text-base"
                >
                  All cities
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* The site's jharokha arch, framing Kota above the Chambal */}
            <div className="mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none">
              <div className="relative aspect-[4/5] arch-clip bg-espresso">
                <div className="absolute inset-0 jali-bg opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-espresso/10 via-espresso/50 to-espresso/90" />

                <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pb-10">
                  <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-brass-light/85 mb-4">
                    City No. 03
                  </span>
                  <span className="font-display italic text-7xl sm:text-8xl leading-none text-ivory">
                    Kota
                  </span>
                  <span className="mt-4 h-px w-12 bg-brass-light/60" />
                  <span className="mt-4 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-ivory/60">
                    Rajasthan
                  </span>
                </div>

                <svg
                  className="absolute bottom-0 inset-x-0 w-full h-20 sm:h-24 text-brass-light"
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <g fill="none" stroke="currentColor">
                    <path d="M0 16 Q 25 6 50 16 T 100 16 T 150 16 T 200 16" strokeWidth="1.25" opacity="0.8" vectorEffect="non-scaling-stroke" />
                    <path d="M0 30 Q 25 20 50 30 T 100 30 T 150 30 T 200 30" strokeWidth="1" opacity="0.55" vectorEffect="non-scaling-stroke" />
                    <path d="M0 44 Q 25 34 50 44 T 100 44 T 150 44 T 200 44" strokeWidth="1" opacity="0.3" vectorEffect="non-scaling-stroke" />
                  </g>
                </svg>
              </div>
              <p className="mt-4 text-center text-[11px] tracking-[0.25em] uppercase text-ivory/60">
                On the banks of the Chambal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
