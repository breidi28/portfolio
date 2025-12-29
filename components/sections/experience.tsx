import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      company: "Bershka Nederland NV",
      position: "Sales Assistant",
      period: "July 2024 - September 2025",
      location: "Eindhoven, Netherlands",
      website: "https://www.bershka.com/nl/",
      highlights: [
        "Trusted key staff member responsible for cash handling and daily closing procedures",
        "Trained and assisted new employees with store procedures and systems",
        "Maintained high service quality during peak hours in fast-paced environment",
      ],
    },
    {
      company: "BRD - Groupe Société Générale",
      position: "Data Science Intern",
      period: "June 2023 - August 2023",
      location: "Bucharest, Romania",
      website: "https://www.brd.ro/",
      highlights: [
        "Designed interactive dashboards using Plotly (Dash) to visualize financial KPIs",
        "Created structured financial reports for management decision-making",
        "Performed preprocessing and exploratory analysis using Python (Pandas)",
      ],
    },
    {
      company: "BRD - Groupe Société Générale",
      position: "Data Engineering Intern",
      period: "June 2022 - August 2022",
      location: "Bucharest, Romania",
      website: "https://www.brd.ro/",
      highlights: [
        "Supported automated data pipelines using Apache Airflow",
        "Built business dashboards in Apache Superset for operational teams",
        "Gained experience with production data flows and enterprise reporting",
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
