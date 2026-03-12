"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20">
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I&apos;m <span className="text-primary">Vlad Andrei Bradiceanu</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
          Data Analyst & Full-Stack Developer
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I turn data into action. Combining advanced analytics with software development to build data-driven solutions that solve real business problems. <strong>50% downtime reduction</strong> at DAF Trucks. Production apps serving thousands of users.
        </p>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          🎯 <strong>Looking for:</strong> Data Analyst, Business Intelligence, or Full-Stack Developer roles where I can leverage both analytics and engineering skills.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
