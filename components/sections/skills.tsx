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
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
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
