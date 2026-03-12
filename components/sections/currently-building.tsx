import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CurrentlyBuilding() {
  const focusAreas = [
    "Social graph and feeds",
    "OAuth music integrations",
    "Collection management",
    "Mobile UX refinement",
  ];

  return (
    <section id="building" className="py-12">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/8 via-background to-background shadow-sm">
          <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-10">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,0,0,0.04)]" />
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
                  Currently Building
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Music Share
                </h2>
                <p className="text-lg text-muted-foreground">
                  A social music platform where users share tracks, follow each other, and manage physical media collections in one mobile product.
                </p>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                Built with React Native, Expo, TypeScript, and Flask. It combines social posting, comments, likes, authentication, barcode-powered collection tracking, and streaming-service integrations into one app that feels closer to a real product than a portfolio demo.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">Flask</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">OAuth</Badge>
                <Badge variant="secondary">JWT</Badge>
                <Badge variant="secondary">MusicBrainz API</Badge>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href="https://github.com/breidi28/music-share" target="_blank" rel="noopener noreferrer">
                    View Repository
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#projects">
                    See Featured Work
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border bg-card/80 p-6 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Current Focus
              </p>
              <ul className="mt-5 space-y-4">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-muted/60 p-4">
                <p className="text-sm font-medium text-foreground">Why it matters</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  This is the kind of project that shows product sense, mobile engineering, backend design, and third-party integrations in the same build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}