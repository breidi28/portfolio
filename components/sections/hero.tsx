"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[calc(100vh-6rem)] items-center justify-center py-16 md:py-20">
      <div className="surface-card relative w-full max-w-5xl overflow-hidden rounded-[2rem] px-6 py-12 text-center md:px-10 md:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),transparent)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="flex justify-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-primary/20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(0,0,0,0.07))] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-xl md:h-40 md:w-40">
              <span className="font-display text-5xl md:text-6xl font-bold text-primary">VB</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-background flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <p className="section-kicker">Romania-based, available for modern product teams</p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl text-balance">
            Building analytical products with the polish of a real brand.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/80 md:text-xl md:leading-8">
            I&apos;m Vlad Andrei Bradiceanu, a data analyst and full-stack developer who translates messy systems into tools people actually want to use.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Looking for Data Analyst, BI, or Full-Stack roles where analytics, product thinking, and software execution all matter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-sm text-muted-foreground">
            <span className="rounded-full border border-border/80 bg-background/70 px-4 py-2">50% downtime reduction delivered</span>
            <span className="rounded-full border border-border/80 bg-background/70 px-4 py-2">React Native + Python products shipped</span>
            <span className="rounded-full border border-border/80 bg-background/70 px-4 py-2">Data, BI, ML, and product engineering</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="transition-all hover:scale-105 shadow-sm">
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="transition-all hover:scale-105 bg-background/60">
            Get In Touch
          </Button>
          <Button size="lg" variant="secondary" asChild className="transition-all hover:scale-105">
            <a href="#" download>
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
