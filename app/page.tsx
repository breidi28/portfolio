import { Hero } from "@/components/sections/hero";
import { CurrentlyBuilding } from "@/components/sections/currently-building";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(38,128,129,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute right-0 top-[28rem] -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(208,138,82,0.12),transparent_68%)] blur-2xl" />
      <Navigation />
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <CurrentlyBuilding />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
