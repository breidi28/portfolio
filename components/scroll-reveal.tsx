"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);
  const [isReady, setIsReady] = useState(prefersReducedMotion);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    let firstFrame = 0;
    let secondFrame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    firstFrame = requestAnimationFrame(() => {
      setIsReady(true);
      secondFrame = requestAnimationFrame(() => {
        observer.observe(element);
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      data-ready={isReady ? "true" : "false"}
      data-visible={isVisible ? "true" : "false"}
      data-delay={delay}
      className={cn("scroll-reveal", className)}
    >
      {children}
    </div>
  );
}