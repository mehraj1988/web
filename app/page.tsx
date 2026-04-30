import About from "@/components/About";
import AICapabilities from "@/components/AICapabilities";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Navbar from "@/components/Navbar";
import Recognition from "@/components/Recognition";
import Showreel from "@/components/Showreel";
import StackSection from "@/components/StackSection";
import Stats from "@/components/Stats";
import WorkIndex from "@/components/WorkIndex";
import { person } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <StackSection />
        <Impact />
        <WorkIndex />
        <Showreel />
        <CaseStudies />
        <AICapabilities />
        <Recognition />
        <Contact />
      </main>
      <footer className="border-t border-navy/10 px-5 py-8 text-sm text-navy/58 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {person.name}. Portfolio for AI video and creative technology roles.</p>
          <a href="#top" className="font-semibold text-navy hover:text-gold-ink">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
