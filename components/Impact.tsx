import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { impactQuarters } from "@/data/portfolio";

export default function Impact() {
  return (
    <AnimatedSection id="impact" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="FY 2025-26 impact"
            title="160+ videos delivered. Across four quarters."
            description="A year of volume, experimentation and high-visibility delivery, translated into a production rhythm."
            className="mb-0"
          />
          <div className="rounded-[8px] border border-gold/45 bg-gold/16 p-6 text-navy shadow-soft">
            <p className="font-serif text-7xl font-semibold leading-none md:text-8xl">
              160+
            </p>
            <p className="mt-3 max-w-lg text-base font-medium leading-7 text-navy/70">
              Delivered across product launches, AI experiments, executive content,
              corporate films, brand campaigns and internal showcases.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {impactQuarters.map((quarter) => (
            <article
              key={quarter.quarter}
              className="rounded-[8px] border border-navy/10 bg-white/65 p-6 shadow-soft"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-serif text-5xl font-semibold text-navy">
                  {quarter.quarter}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
                  {quarter.period}
                </p>
              </div>
              <h3 className="mt-8 font-serif text-2xl font-semibold leading-tight text-navy">
                {quarter.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-navy/65">
                {quarter.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
