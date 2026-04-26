import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecruiterFit() {
  const roleFit = [
    "Data Analyst",
    "BI Analyst / BI Engineer",
    "Data Scientist (Applied)",
    "Data and AI Engineer",
  ];

  const outcomes = [
    "50% downtime reduction at DAF Trucks",
    "EUR100K+ annual savings from process optimization",
    "Production apps and analytics tools shipped end-to-end",
    "Strong stack in Python, SQL, BI, and ML workflows",
  ];

  return (
    <section id="recruiters" className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Card className="surface-card rounded-[2rem]">
          <CardHeader className="space-y-3">
            <p className="section-kicker">For Recruiters</p>
            <CardTitle className="font-display text-3xl md:text-4xl">
              30-Second Fit Check
            </CardTitle>
            <p className="text-sm leading-7 text-muted-foreground md:text-base">
              Open to full-time roles in Bucharest or remote. Fastest response on LinkedIn.
            </p>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-display text-2xl">Best Fit Roles</h3>
              <ul className="space-y-2">
                {roleFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-display text-2xl">Impact Snapshot</h3>
              <ul className="space-y-2">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild>
                <a href="https://linkedin.com/in/vladbradiceanu" target="_blank" rel="noopener noreferrer">
                  Message on LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:vladbradiceanuandrei@gmail.com?subject=Interview%20Opportunity">
                  Email for Interview
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
