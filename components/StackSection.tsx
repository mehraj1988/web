import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { stackGroups } from "@/data/portfolio";

export default function StackSection() {
  return (
    <AnimatedSection
      id="stack"
      className="border-y border-navy/10 bg-navy px-5 py-20 text-ivory md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Tools / stack"
          title="A practical creative stack for AI-era production."
          description="The tools change quickly. The habit stays the same: test, systemize, ship and keep the creative standard high."
          className="[&_h2]:text-ivory [&_p:first-child]:text-gold [&_p:not(:first-child)]:text-ivory/68"
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[8px] border border-white/12 bg-white/7 p-6 shadow-soft"
            >
              <h3 className="font-serif text-2xl font-semibold text-ivory">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/15 bg-ivory/10 px-3 py-2 text-sm font-medium text-ivory/82"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
