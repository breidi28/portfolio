"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-4 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-card rounded-full px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
                VB
              </div>
              <div className="leading-none">
                <div className="font-display text-lg">Vlad Bradiceanu</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Data x Product x Code</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("building")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Building
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="surface-card mt-3 rounded-3xl px-5 py-5 md:hidden space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("building")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Building
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
