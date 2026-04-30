import { Building2, CheckCircle2 } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { currentRole, executiveStats, pastClients } from "@/data/portfolio";

export default function Stats() {
  return (
    <AnimatedSection id="snapshot" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Executive snapshot"
          title="Production craft, AI fluency and leadership under one roof."
          description="A recruiter-facing summary of scope, speed and signal from the last year of applied creative technology work."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {executiveStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[8px] border border-navy/10 bg-white/65 p-6 shadow-soft"
            >
              <p className="font-serif text-5xl font-semibold text-navy">
                {stat.value}
              </p>
              <h3 className="mt-4 text-base font-semibold text-navy">
                {stat.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-navy/62">
                {stat.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[8px] border border-navy/10 bg-navy p-7 text-ivory shadow-premium">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-[8px] bg-gold text-navy">
                <Building2 className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Current role
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight">
                  {currentRole}
                </h3>
              </div>
            </div>
          </article>

          <article className="rounded-[8px] border border-navy/10 bg-white/65 p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-ink">
              Past work for
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pastClients.map((client) => (
                <div
                  key={client}
                  className="flex items-center gap-3 rounded-[8px] border border-navy/10 bg-ivory/70 px-4 py-3 text-sm font-semibold text-navy"
                >
                  <CheckCircle2 className="size-4 text-gold-ink" />
                  {client}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </AnimatedSection>
  );
}
