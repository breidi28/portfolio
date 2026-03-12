import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/scroll-reveal";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <p className="section-kicker mb-3">Profile</p>
          <h2 className="section-title">About Me</h2>
        </div>
        <ScrollReveal>
          <Card className="surface-card rounded-[2rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="section-copy">
                  Data & Analytics professional with a unique edge: I don't just analyze problems—I build solutions. 
                  With a foundation in Data Science and Business Strategy, I excel at transforming complex datasets into 
                  actionable insights and production-ready applications that drive real impact.
                </p>
                <p className="section-copy">
                  My expertise spans the full spectrum from data analysis and machine learning to cross-platform development 
                  with React Native and modern web technologies. This combination allows me to bridge the gap between analytics 
                  and implementation, delivering end-to-end solutions that solve business problems—from dashboard to deployment.
                </p>
                <p className="section-copy">
                  Whether optimizing industrial processes (50% downtime reduction at DAF Trucks), building mobile applications 
                  for thousands of users, or creating ML-powered recommendation systems, I bring both analytical rigor and 
                  technical execution to every project. I'm a rapid self-learner and clear communicator ready to tackle 
                  complex challenges in dynamic environments.
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
                      <li className="text-muted-foreground">• Strong analytical and problem-solving skills</li>
                      <li className="text-muted-foreground">• Proficient in Python, R, SQL, and BI tools</li>
                      <li className="text-muted-foreground">• Strong foundation in software development and system design</li>
                      <li className="text-muted-foreground">• Experience with data visualization and dashboarding</li>
                      <li className="text-muted-foreground">• Excellent communication and stakeholder management</li>
                      <li className="text-muted-foreground">• Rapid self-learner and adaptable to new technologies</li>
                      <li className="text-muted-foreground">• Experience delivering results in Scrum and Agile environments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
