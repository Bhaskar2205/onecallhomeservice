import { Wrench, PaintRoller, Zap, SprayCan, Sparkles, Fan, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Plumbing",
    copy: "Leaky taps, blocked drains, geyser fittings and full bathroom overhauls — sorted without the mess.",
  },
  {
    icon: PaintRoller,
    title: "Painting",
    copy: "Interior and exterior painting with clean edges and even coats. See the difference for yourself below.",
  },
  {
    icon: Zap,
    title: "Electrical",
    copy: "Wiring, switchboards, fittings and safety checks handled by licensed electricians, done right the first time.",
  },
  {
    icon: SprayCan,
    title: "Cleaning",
    copy: "Regular home cleaning that actually keeps up — kitchens, bathrooms and every room in between.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    copy: "The corners your weekly clean skips. A thorough, top-to-bottom reset for move-ins, festivals or a fresh start.",
  },
  {
    icon: Fan,
    title: "AC Service",
    copy: "Gas top-up, filter cleaning and full servicing to get you through the Rajasthan summer in comfort.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-xl mb-14 sm:mb-16">
          <p className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-rose font-semibold mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.1] text-ink text-balance">
            Six services, one number saved in your phone.
          </h2>
        </div>

        <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-ivory rounded-2xl p-7 sm:p-8 border border-ink/8 hover:border-rose/30 hover:shadow-xl hover:shadow-ink/5 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-rose/10 group-hover:bg-rose transition-colors flex items-center justify-center text-rose group-hover:text-ivory mb-6">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl text-ink mb-2.5 flex items-center gap-1.5">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/65 mb-5">{service.copy}</p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-rose"
                >
                  Book this service
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
