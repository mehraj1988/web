import { GraduationCap } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import {
  aboutStory,
  careerTimeline,
  education,
  philosophy,
} from "@/data/portfolio";

export default function About() {
  return (
    <AnimatedSection
      id="about"
      className="border-y border-navy/10 bg-white/48 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr]">
        <div>
          <SectionHeader
            eyebrow="About + career"
            title="A 15-year creative arc, now pointed at AI video."
            description="From post-production rooms to production systems, Mehraj’s work sits at the intersection of taste, throughput and practical AI adoption."
          />
          <div className="space-y-5 text-base leading-8 text-navy/70">
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-8 rounded-[8px] border-l-4 border-gold bg-ivory p-6 font-serif text-3xl font-semibold leading-tight text-navy shadow-soft">
            {philosophy}
          </blockquote>
        </div>

        <div className="grid gap-6">
          <article className="rounded-[8px] border border-navy/10 bg-ivory/80 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-ink">
              Career timeline
            </p>
            <ol className="mt-6 space-y-5">
              {careerTimeline.map((item) => (
                <li
                  key={`${item.role}-${item.period}`}
                  className="grid gap-4 border-t border-navy/10 pt-5 sm:grid-cols-[0.28fr_0.72fr]"
                >
                  <span className="text-sm font-semibold text-navy/55">
                    {item.period}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-navy">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-navy/62">
                      {item.organization}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-[8px] border border-navy/10 bg-navy p-6 text-ivory shadow-premium">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-[8px] bg-gold text-navy">
                <GraduationCap className="size-5" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Education
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {education.map((item) => (
                <div key={item.degree} className="border-t border-white/15 pt-4">
                  <h3 className="font-semibold text-ivory">{item.degree}</h3>
                  <p className="mt-2 text-sm leading-6 text-ivory/65">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </AnimatedSection>
  );
}
