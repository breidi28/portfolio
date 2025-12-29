import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Versatile ICT & Business professional with a dual background in Data Science and Business Strategy. 
                I excel at translating complex datasets into clear business insights, combining strong analytical ability 
                with high digital literacy and hands-on technical aptitude across software, hardware, and IT systems.
              </p>
              <p className="text-lg text-muted-foreground">
                Experienced in process optimization and digital transformation, including delivering a <strong>50% efficiency 
                improvement</strong> for a major industrial client (DAF Trucks). A rapid self-learner and clear communicator 
                ready to tackle complex challenges in dynamic environments.
              </p>
              <Separator />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
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
                  <h3 className="font-semibold text-lg mb-2">Strengths</h3>
                  <ul>
                    <li className="text-muted-foreground">• Strong analytical and problem-solving skills</li>
                    <li className="text-muted-foreground">• Proficient in Python, R, SQL, and BI tools</li>
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
      </div>
    </section>
  );
}
