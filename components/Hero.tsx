import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

import { person } from "@/data/portfolio";
import { withBasePath } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-navy/10 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="absolute left-[8%] top-20 h-12 w-12 rotate-12 rounded-[8px] border border-gold/60 bg-gold/20" />
      <div className="absolute right-[18%] top-28 h-5 w-20 -rotate-12 rounded-full bg-gold/60" />
      <div className="absolute bottom-28 left-[42%] h-14 w-14 rounded-full border border-navy/15 bg-white/50" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-navy shadow-soft">
            <Sparkles className="size-4 text-gold-ink" />
            Portfolio 2026
          </p>
          <h1 className="max-w-5xl font-serif text-6xl font-semibold leading-[0.95] text-navy md:text-8xl xl:text-9xl">
            {person.tagline}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-navy/70 md:text-xl">
            {person.positioning}
          </p>

          <div className="mt-9">
            <p className="font-serif text-3xl font-semibold text-navy md:text-4xl">
              {person.name}
            </p>
            <p className="mt-2 max-w-xl text-base font-medium text-navy/70">
              {person.title}
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-navy/60">
              <MapPin className="size-4 text-gold-ink" />
              {person.location}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-navy px-5 py-3 text-sm font-semibold text-ivory shadow-soft transition hover:-translate-y-0.5 hover:bg-navy/92"
            >
              View Work
              <ArrowDown className="size-4" />
            </a>
            {/* TODO: Replace the placeholder PDF in /public with the final Mehraj Portfolio 2026 file. */}
            <a
              href={withBasePath("/Mehraj_Portfolio_2026.pdf")}
              download
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-navy/15 bg-white/70 px-5 py-3 text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:border-gold/70"
            >
              Download Portfolio
              <Download className="size-4" />
            </a>
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-gold/50 bg-gold px-5 py-3 text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:bg-gold-dark"
            >
              Contact Me
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute inset-x-8 bottom-0 top-8 rounded-[8px] bg-navy shadow-premium" />
          <div className="absolute left-0 top-0 h-32 w-32 rounded-[8px] border border-gold/60 bg-gold/80 shadow-soft" />
          <div className="absolute bottom-12 right-0 h-24 w-24 rotate-45 border border-white/80 bg-white/70 shadow-soft" />
          <div className="absolute inset-x-7 bottom-0 top-7 overflow-hidden rounded-[8px] border border-white/25 bg-gradient-to-b from-white/14 to-white/4 px-5 pt-5">
            <Image
              src={withBasePath("/images/hero-character.png")}
              alt="3D character mascot used as the visual motif for Mehraj Shaikh portfolio"
              width={1040}
              height={1723}
              priority
              className="h-full w-full object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
            />
          </div>
          <div className="absolute bottom-8 left-7 max-w-xs rounded-[8px] border border-white/30 bg-ivory/92 p-5 text-navy shadow-premium backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-ink">
              Current focus
            </p>
            <p className="mt-2 font-serif text-2xl font-semibold leading-tight">
              AI video systems that still feel edited by a human.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
