import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      company: "Independent Developer & Data Consultant",
      position: "Freelance Projects",
      period: "2023 - Present",
      location: "Remote",
      website: "#projects",
      highlights: [
        "Delivered 50% downtime reduction for DAF Trucks through process optimization and data analysis",
        "Built production React Native apps (Train Tracker, Business Manager) serving thousands of users",
        "Created ML-powered recommendation systems and interactive BI dashboards for multiple clients",
        "Tech stack: Python, React Native, TypeScript, SQL, Power BI, Machine Learning",
      ],
    },
    {
      company: "BRD - Groupe Société Générale",
      position: "Data Science Intern",
      period: "June 2023 - August 2023",
      location: "Bucharest, Romania",
      website: "https://www.brd.ro/",
      highlights: [
        "Designed interactive financial dashboards using Plotly Dash, improving KPI visibility for 20+ stakeholders",
        "Automated monthly reporting process, reducing report generation time by 60%",
        "Performed data preprocessing and exploratory analysis on 500K+ transaction records using Python",
      ],
    },
    {
      company: "BRD - Groupe Société Générale",
      position: "Data Engineering Intern",
      period: "June 2022 - August 2022",
      location: "Bucharest, Romania",
      website: "https://www.brd.ro/",
      highlights: [
        "Built and maintained automated data pipelines using Apache Airflow, processing 100K+ daily records",
        "Created 15+ operational dashboards in Apache Superset for cross-functional teams",
        "Reduced data processing errors by 35% through improved validation and monitoring",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">
                      <a 
                        href={exp.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {exp.company}
                      </a>
                    </CardTitle>
                    <CardDescription className="text-base font-semibold mt-1">
                      {exp.position}
                    </CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
