"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20">
      <div className="text-center space-y-8 max-w-3xl">
        <div className="flex justify-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-4 border-primary/20 shadow-xl">
              <span className="text-5xl md:text-6xl font-bold text-primary">VB</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-background flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/80">
            Data, product thinking, and software execution
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-primary">Vlad Andrei Bradiceanu</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold leading-tight text-balance">
            I build products that turn messy data into clear decisions.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data Analyst and Full-Stack Developer with a track record of shipping analytical tools, mobile apps, and automation that create measurable outcomes, including <strong>50% downtime reduction</strong> at DAF Trucks.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Looking for Data Analyst, BI, or Full-Stack roles where analytics and product execution are both part of the job.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="transition-all hover:scale-105">
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="transition-all hover:scale-105">
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
