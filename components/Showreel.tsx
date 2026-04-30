import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { showreelItems } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";

export default function Showreel() {
  return (
    <AnimatedSection id="showreel" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected work / showreel"
          title="Portfolio shelves ready for live links."
          description="The structure is built for real reels, private links or embedded samples once final URLs are approved."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {showreelItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[8px] border border-navy/10 bg-white/65 shadow-soft transition hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                <Image
                  src={withBasePath(item.image)}
                  alt={`${item.title} portfolio preview`}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                  Google Drive
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl font-semibold leading-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-navy/64">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-[8px] bg-navy px-4 py-2 text-sm font-semibold text-ivory transition hover:-translate-y-0.5 hover:bg-navy/92"
                >
                  View Work
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
