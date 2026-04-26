import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <p className="section-kicker mb-3">Profile</p>
          <h2 className="section-title">About Me</h2>
        </div>
        <Card className="surface-card rounded-[2rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="section-copy">
                  I work at the intersection of data, AI, and software delivery. My edge is simple: I do not stop at analysis.
                  I translate business pain points into systems teams can use daily, from dashboards and models to production tools.
                </p>
                <p className="section-copy">
                  My work spans Python analytics, machine learning workflows, BI reporting, and full-stack implementation with
                  React Native and modern web technologies. That combination helps me bridge the gap between insight and execution.
                </p>
                <p className="section-copy">
                  Results include a 50% production downtime reduction at DAF Trucks, EUR100K+ annual savings, and shipped
                  applications used by real users. I bring analytical rigor, execution speed, and clear communication to each project.
                </p>
                <Separator />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-display text-2xl mb-3">Education</h3>
                    <p className="text-muted-foreground">
                      <strong>BSc ICT & Business</strong> - Fontys University of Applied Sciences (2022-2025)<br />
                      Focus: AI, Machine Learning, Data Analytics, Business IT alignment
                    </p>
                    <p className="text-muted-foreground mt-2">
                      <strong>BSc Data Science</strong> - Eindhoven University of Technology (2021-2022)<br />
                      Focus: Statistical Modeling, Data Analytics, Algorithm Optimization, Law & Ethics in Data
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl mb-3">Strengths</h3>
                    <ul>
                      <li className="text-muted-foreground">• End-to-end delivery from data extraction to production deployment</li>
                      <li className="text-muted-foreground">• Strong stack in Python, SQL, BI, and applied machine learning</li>
                      <li className="text-muted-foreground">• Product mindset focused on adoption, usability, and business outcomes</li>
                      <li className="text-muted-foreground">• Clear communication with technical teams and executive stakeholders</li>
                      <li className="text-muted-foreground">• Fast learner with high ownership in ambiguous environments</li>
                      <li className="text-muted-foreground">• Comfortable in Agile teams and cross-functional collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
    </section>
  );
}
