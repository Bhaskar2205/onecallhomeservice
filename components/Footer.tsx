import Image from "next/image";
import { Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

const serviceLinks = ["Plumbing", "Painting", "Electrical", "Cleaning", "Deep Cleaning", "AC Service"];

export default function Footer() {
  return (
    <footer className="relative bg-espresso text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <Image
          src="https://images.unsplash.com/photo-1682414181248-8b0d51289e88?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-espresso/85" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-20 pb-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr] gap-10 sm:gap-8 pb-14 border-b border-ivory/12">
          <div>
            <a href="#top" className="flex items-baseline gap-2">
              <span className="font-display italic text-2xl text-brass-light">One Call</span>
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-ivory/60">
                Home Service
              </span>
            </a>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed max-w-xs">
              Trusted home services for Jaipur and Udaipur — one number,
              every job, done properly.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full border border-ivory/20 flex items-center justify-center hover:border-brass-light hover:text-brass-light transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full border border-ivory/20 flex items-center justify-center hover:border-brass-light hover:text-brass-light transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="WhatsApp" className="h-9 w-9 rounded-full border border-ivory/20 flex items-center justify-center hover:border-brass-light hover:text-brass-light transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-ivory/50 mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-ivory/75 hover:text-brass-light transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-ivory/50 mb-5">Get In Touch</h4>
            <ul className="space-y-3.5 text-sm text-ivory/75">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-brass-light shrink-0" />
                <a href="tel:+919351222608" className="hover:text-brass-light transition-colors">
                  +91 93512 22608 <span className="text-ivory/40">(Jaipur)</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-brass-light shrink-0" />
                <a href="tel:+919123456780" className="hover:text-brass-light transition-colors">
                  +91 91234 56780 <span className="text-ivory/40">(Udaipur)</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-brass-light shrink-0" />
                <a href="mailto:hello@onecallhomeservice.in" className="hover:text-brass-light transition-colors">
                  hello@onecallhomeservice.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7 text-xs text-ivory/45">
          <p>&copy; {new Date().getFullYear()} One Call Home Service. All rights reserved.</p>
          <p>Proudly based in the Rajasthan.</p>
        </div>
      </div>
    </footer>
  );
}
