import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import { person } from "@/data/portfolio";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold-ink">
            Contact
          </p>
          <h2 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-navy md:text-7xl">
            Built on 160+ stories shipped. Pointed at what’s next.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-navy/70">
            If any of this lines up with what you’re building, I’d love to talk.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-navy px-5 py-3 text-sm font-semibold text-ivory shadow-soft transition hover:-translate-y-0.5 hover:bg-navy/92"
            >
              <Mail className="size-4" />
              Email Mehraj
            </a>
            <a
              href={person.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-navy/15 bg-white/70 px-5 py-3 text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:border-gold/70"
            >
              <ExternalLink className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <address className="not-italic">
          <div className="rounded-[8px] border border-navy/10 bg-navy p-7 text-ivory shadow-premium">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Contact card
            </p>
            <h3 className="mt-7 font-serif text-4xl font-semibold text-ivory">
              {person.name}
            </h3>
            <p className="mt-2 max-w-sm text-sm font-medium leading-6 text-ivory/68">
              {person.title}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${person.email}`}
                className="flex items-start gap-3 text-sm font-medium text-ivory/78 hover:text-gold"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                {person.email}
              </a>
              <a
                href={`tel:${person.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-sm font-medium text-ivory/78 hover:text-gold"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                {person.phone}
              </a>
              <a
                href={person.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm font-medium text-ivory/78 hover:text-gold"
              >
                <ExternalLink className="mt-0.5 size-4 shrink-0 text-gold" />
                {person.linkedIn}
              </a>
              <p className="flex items-start gap-3 text-sm font-medium text-ivory/78">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                Based in {person.location}
              </p>
            </div>
          </div>
        </address>
      </div>
    </AnimatedSection>
  );
}
