"use client";

import { useMemo, useState } from "react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { workCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function WorkIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWork = useMemo(
    () => workCategories[activeIndex] ?? workCategories[0],
    [activeIndex],
  );

  return (
    <AnimatedSection
      id="work"
      className="border-y border-navy/10 bg-white/48 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Work index"
          title="Eleven categories of production, AI and brand work."
          description="A fast way for recruiters and hiring leads to scan the breadth of Mehraj’s current creative technology practice."
        />

        <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="grid max-h-[620px] gap-2 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-1">
            {workCategories.map((category, index) => {
              const isActive = index === activeIndex;

              return (
                <Button
                  key={category.number}
                  type="button"
                  variant="ghost"
                  className={cn(
                    "h-auto justify-start rounded-[8px] border border-navy/10 bg-ivory/70 p-4 text-left text-navy shadow-soft",
                    "hover:border-gold/55 hover:bg-white hover:text-navy",
                    isActive && "border-gold bg-gold/18",
                  )}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="mr-4 font-serif text-2xl font-semibold text-gold-ink">
                    {category.number}
                  </span>
                  <span>
                    <span className="block font-serif text-xl font-semibold leading-tight">
                      {category.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-navy/62">
                      {category.description}
                    </span>
                  </span>
                </Button>
              );
            })}
          </div>

          <article className="relative min-h-[520px] overflow-hidden rounded-[8px] border border-navy/10 bg-navy p-8 text-ivory shadow-premium md:p-10">
            <div className="absolute right-8 top-8 h-20 w-20 rotate-12 rounded-[8px] bg-gold/90" />
            <div className="absolute bottom-10 right-24 h-12 w-12 rounded-full border border-white/30" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Selected category
            </p>
            <p className="mt-16 font-serif text-8xl font-semibold leading-none text-gold md:text-9xl">
              {activeWork.number}
            </p>
            <h3 className="mt-8 max-w-xl font-serif text-5xl font-semibold leading-tight text-ivory md:text-6xl">
              {activeWork.title}
            </h3>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/68">
              {activeWork.description}
            </p>
            <div className="mt-10 h-px w-full bg-white/15" />
            <p className="mt-6 max-w-2xl text-sm leading-7 text-ivory/58">
              Each category can expand into reels, case studies or private
              work samples depending on recruiter context and confidentiality.
            </p>
          </article>
        </div>
      </div>
    </AnimatedSection>
  );
}
