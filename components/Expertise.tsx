import { ArrowUpRight } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { expertise } from "@/data/portfolio";

export default function Expertise() {
  return (
    <AnimatedSection id="expertise" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What I do"
          title="Six lanes of work, one production-grade mindset."
          description="The portfolio is built around outcomes: faster production, sharper storytelling and AI systems that hold up inside real stakeholder workflows."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {expertise.map((item) => (
            <article
              key={item.number}
              className="group rounded-[8px] border border-navy/10 bg-white/65 p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-premium"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-serif text-4xl font-semibold text-gold-ink">
                  {item.number}
                </span>
                <span className="grid size-10 place-items-center rounded-[8px] border border-navy/10 text-navy transition group-hover:border-gold/60 group-hover:bg-gold">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
              <h3 className="mt-8 font-serif text-3xl font-semibold leading-tight text-navy">
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
