import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { capabilities } from "@/data/portfolio";

export default function AICapabilities() {
  return (
    <AnimatedSection id="ai-capabilities" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="AI capability"
          title="Outcome-based capability, not tool theatre."
          description="The value is in how the tools compress production cycles, improve optionality and still preserve final-cut judgement."
        />

        <div className="overflow-hidden rounded-[8px] border border-navy/10 bg-white/65 shadow-soft">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="grid gap-4 border-t border-navy/10 p-5 first:border-t-0 md:grid-cols-[0.12fr_0.34fr_0.34fr_0.2fr] md:items-center md:p-6"
            >
              <p className="font-serif text-3xl font-semibold text-gold-ink">
                {item.number}
              </p>
              <h3 className="font-serif text-2xl font-semibold leading-tight text-navy">
                {item.outcome}
              </h3>
              <p className="text-sm leading-7 text-navy/65">
                {item.explanation}
              </p>
              <p className="rounded-[8px] border border-navy/10 bg-ivory px-3 py-2 text-sm font-semibold leading-6 text-navy/74">
                {item.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
