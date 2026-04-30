import { Award } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { recognition } from "@/data/portfolio";

export default function Recognition() {
  return (
    <AnimatedSection
      id="recognition"
      className="border-y border-navy/10 bg-white/48 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Recognition"
          title="Signal from systems, brands and leadership moments."
          description="A compact view of the areas where Mehraj’s production work has carried strategic weight."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {recognition.map((item) => (
            <article
              key={item.title}
              className="rounded-[8px] border border-navy/10 bg-ivory/80 p-6 shadow-soft"
            >
              <span className="grid size-11 place-items-center rounded-[8px] bg-gold text-navy">
                <Award className="size-5" />
              </span>
              <h3 className="mt-6 font-serif text-3xl font-semibold leading-tight text-navy">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-navy/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
