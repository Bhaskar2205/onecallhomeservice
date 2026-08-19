import Image from "next/image";
import { ShieldCheck, Clock, BadgeCheck, HeartHandshake } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Trusted Professionals",
    copy: "Every plumber, painter and electrician is verified and background-checked before they ever knock on your door.",
  },
  {
    icon: Clock,
    title: "On Time Service",
    copy: "We give you a two-hour window and we keep it — no waiting in all day for someone who might show up.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Guaranteed",
    copy: "If the work isn't right, we come back and fix it. No extra charge, no argument.",
  },
  {
    icon: HeartHandshake,
    title: "100% Customer Satisfaction",
    copy: "A job isn't done when the tools go back in the bag — it's done when you're happy with it.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative aspect-[4/5] w-full arch-clip">
              <Image
                src="https://images.unsplash.com/photo-1682414182071-385743071ec0?q=80&w=1400&auto=format&fit=crop"
                alt="Intricately carved wooden haveli door, a signature of Rajasthani craftsmanship"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-rose text-ivory rounded-2xl px-5 py-4 shadow-lg shadow-rose/20">
              <p className="font-display text-3xl leading-none">4.9<span className="text-lg align-top">/5</span></p>
              <p className="text-[11px] tracking-wide uppercase mt-1 text-ivory/80">Average rating</p>
            </div>
          </div>

          <div>
            <p className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-rose font-semibold mb-3">
              Why Jaipur Trusts Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.1] text-ink text-balance">
              Craft the old city taught us. Standards the new city expects.
            </h2>

            <div className="mt-10 grid xs:grid-cols-2 gap-x-8 gap-y-8">
              {badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.title}>
                    <div className="h-11 w-11 rounded-full bg-sand flex items-center justify-center text-rose mb-4">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <h3 className="font-display text-lg text-ink mb-1.5">{badge.title}</h3>
                    <p className="text-sm leading-relaxed text-ink/65">{badge.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
