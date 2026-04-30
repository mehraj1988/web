"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navItems, person } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/88 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-3 text-navy"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-10 place-items-center rounded-[8px] bg-navy font-serif text-lg font-semibold text-ivory shadow-soft">
            MS
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{person.name}</span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-navy/55 sm:block">
              AI Video Portfolio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[8px] px-3 py-2 text-sm font-medium text-navy/70 transition hover:bg-white/70 hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={withBasePath("/Mehraj_Portfolio_2026.pdf")}
            download
            className="rounded-[8px] border border-navy/15 bg-white/70 px-4 py-2 text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:border-gold/70 hover:text-navy"
          >
            Download
          </a>
          <a
            href={`mailto:${person.email}`}
            className="rounded-[8px] bg-gold px-4 py-2 text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:bg-gold-dark"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-[8px] border border-navy/15 bg-white/70 text-navy lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-navy/10 bg-ivory transition-[grid-template-rows] duration-300 lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-3 py-3 text-sm font-semibold text-navy/75 hover:bg-white/80 hover:text-navy"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a
                href={withBasePath("/Mehraj_Portfolio_2026.pdf")}
                download
                className="rounded-[8px] border border-navy/15 bg-white px-4 py-3 text-center text-sm font-semibold text-navy"
                onClick={() => setIsOpen(false)}
              >
                Download
              </a>
              <a
                href={`mailto:${person.email}`}
                className="rounded-[8px] bg-gold px-4 py-3 text-center text-sm font-semibold text-navy"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
