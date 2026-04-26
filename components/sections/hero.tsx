"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[calc(100vh-6rem)] items-center justify-center py-16 md:py-20">
      <div className="surface-card relative w-full max-w-5xl overflow-hidden rounded-[2rem] px-6 py-10 text-center md:px-10 md:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),transparent)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="animate-in space-y-4 fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <h1 className="font-display text-4xl leading-[0.95] tracking-tight md:text-7xl text-balance">
            Data and AI Engineer delivering measurable operational impact
          </h1>
          <p className="mx-auto max-w-2xl text-base text-foreground/80 md:text-xl md:leading-8">
            I&apos;m Vlad Andrei Bradiceanu. I build analytics systems and practical software that help teams make faster, better decisions.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 sm:flex-row">
          <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="transition-all hover:scale-105 shadow-sm">
            View Case Studies
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="transition-all hover:scale-105 bg-background/60">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
