import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Data & Analytics",
      skills: ["Python", "Pandas", "SQL", "Machine Learning", "R", "NumPy" ],
    },
    {
      title: "BI & Visualization",
      skills: ["Power BI", "Plotly", "Dash", "Matplotlib", "Tableau", "Google Looker Studio" ],
    },
    {
      title: "Web & Mobile Development",
      skills: ["React", "JavaScript", "HTML", "Flask", "React Native", "TypeScript", "Node.js"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Figma", "Git", "Scrum", "Agile", "Apache Airflow", "Apache Superset", "Windows/Linux"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["Modelling", "NLP", "Scikit-learn", "Feature Engineering", "Model Evaluation", "Data Preprocessing"],
    },
    {
      title: "Certifications",
      skills: ["Google Project Management", "Risk Management (NYIF)", "Meta Marketing Analytics", "ECDL Advanced"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <p className="section-kicker mb-3">Capabilities</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="surface-card rounded-[1.5rem] hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer hover:border-primary/30"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-display text-2xl">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
