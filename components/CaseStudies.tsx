"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function CaseStudies() {
  const [openCase, setOpenCase] = useState(caseStudies[0]?.number ?? "01");

  return (
    <AnimatedSection
      id="case-studies"
      className="border-y border-navy/10 bg-ivory px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Case studies"
          title="Four stories that show the operating system behind the output."
          description="These are framed around role, production pressure, workflow design and visible impact."
        />

        <div className="grid gap-4">
          {caseStudies.map((caseStudy) => {
            const isOpen = openCase === caseStudy.number;

            return (
              <article
                key={caseStudy.number}
                className={cn(
                  "rounded-[8px] border bg-white/70 shadow-soft transition",
                  isOpen ? "border-gold shadow-premium" : "border-navy/10",
                )}
              >
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto w-full justify-between rounded-[8px] p-5 text-left text-navy hover:bg-white/60"
                  aria-expanded={isOpen}
                  onClick={() => setOpenCase(isOpen ? "" : caseStudy.number)}
                >
                  <span className="flex min-w-0 gap-5">
                    <span className="font-serif text-4xl font-semibold text-gold-ink">
                      {caseStudy.number}
                    </span>
                    <span>
                      <span className="block font-serif text-3xl font-semibold leading-tight">
                        {caseStudy.title}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-navy/62">
                        {caseStudy.subtitle}
                      </span>
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 transition",
                      isOpen && "rotate-180 text-gold",
                    )}
                  />
                </Button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-navy/10 p-5 md:p-7">
                      <div className="mb-6 flex flex-wrap gap-2">
                        {caseStudy.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-gold/35 bg-gold/12 px-3 py-1.5 text-xs font-semibold text-navy/76"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid gap-6 lg:grid-cols-2">
                        <CaseField label="Context" value={caseStudy.context} />
                        <CaseField label="Role" value={caseStudy.role} />
                        <CaseField label="Challenge" value={caseStudy.challenge} />
                        <CaseField label="Content" value={caseStudy.content} />
                        <CaseField label="Discipline" value={caseStudy.discipline} />
                        <CaseField label="Impact" value={caseStudy.impact} />
                        <CaseField label="Outcome" value={caseStudy.outcome} />
                      </div>

                      {caseStudy.workflow ? (
                        <div className="mt-7">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-ink">
                            Workflow
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {caseStudy.workflow.map((step) => (
                              <span
                                key={step}
                                className="rounded-[8px] border border-navy/10 bg-ivory px-3 py-2 text-sm font-semibold text-navy/72"
                              >
                                {step}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

function CaseField({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return null;
  }

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-ink">
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-navy/68">{value}</p>
    </div>
  );
}
