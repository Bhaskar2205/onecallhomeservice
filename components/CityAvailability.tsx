import { Fragment } from "react";
import { Phone, MapPin } from "lucide-react";

const cities = [
  {
    name: "Jaipur",
    blurb: "Our home base — every service, every day, across the Pink City.",
    tel: "+919001796614",
    phone: "+91 90017 96614",
  },
  {
    name: "Udaipur",
    blurb: "The City of Lakes, covered by the same trusted standard of work.",
    tel: "+918955103727",
    phone: "+91 89551 03727",
  },
  {
    name: "Kota",
    blurb: "Our newest city — every service, now along the banks of the Chambal.",
    tel: "+919001716614",
    phone: "+91 90017 16614",
    isNew: true,
  },
];

export default function CityAvailability() {
  return (
    <section id="cities" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <p className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-rose font-semibold mb-3">
            Where We Serve
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.1] text-ink text-balance">
            Three cities. One number for each.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-10 lg:gap-0">
          {cities.map((city, i) => (
            <Fragment key={city.name}>
              {i > 0 && (
                <>
                  <div className="hidden lg:block w-px jali-divider mx-auto" />
                  <div className="lg:hidden h-px w-32 mx-auto jali-bg opacity-60" />
                </>
              )}

              <div className="text-center lg:px-8 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 text-brass mb-4">
                  <MapPin size={16} />
                  <span className="text-xs tracking-[0.25em] uppercase font-semibold">
                    {city.isNew ? "Now Serving" : "Currently Serving"}
                  </span>
                  {city.isNew && (
                    <span className="rounded-full bg-rose text-ivory text-[10px] tracking-[0.15em] uppercase font-bold px-2 py-0.5">
                      New
                    </span>
                  )}
                </div>
                <h3 className="font-display italic text-4xl sm:text-5xl text-ink mb-4">{city.name}</h3>
                <p className="text-ink/60 text-sm leading-relaxed max-w-xs mb-7">{city.blurb}</p>
                <a
                  href={`tel:${city.tel}`}
                  className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark transition-colors text-ivory px-7 py-3.5 font-semibold text-sm sm:text-base whitespace-nowrap"
                >
                  <Phone size={16} strokeWidth={2.25} />
                  {city.phone}
                </a>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
