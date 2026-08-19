import BeforeAfterSlider from "./BeforeAfterSlider";

export default function PaintingShowcase() {
  return (
    <section id="before-after" className="relative bg-espresso overflow-hidden">
      <div className="absolute inset-0 jali-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-brass-light font-semibold mb-3">
              Painting, In Real Light
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.1] text-ivory text-balance">
              No filters. Just a wall, before and after.
            </h2>
            <p className="mt-5 text-ivory/70 leading-relaxed max-w-md">
              We'd rather show you an honest photograph than a polished render.
              Drag the slider and see the kind of clean, even finish our
              painting team leaves behind — every single time.
            </p>
            <a
              href="tel:+919351222608"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brass hover:bg-brass-light transition-colors text-espresso px-7 py-3.5 font-semibold text-sm sm:text-base"
            >
              Get a Painting Quote
            </a>
          </div>
          <div className="order-1 md:order-2">
            <BeforeAfterSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
