import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      company: "Independent Developer & Data Consultant",
      position: "Freelance Projects",
      period: "2023 - Present",
      location: "Remote",
      website: "#projects",
      highlights: [
        "Continuously delivering data-driven solutions and mobile applications for clients across various industries",
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
        <div className="text-center mb-10">
          <p className="section-kicker mb-3">Track Record</p>
          <h2 className="section-title mb-3">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A progression from enterprise data work into independent product and analytics delivery.
          </p>
        </div>
        <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border md:before:left-1/2 md:before:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <div key={index} className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-start">
              <div className={index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"}>
                  <Card className="surface-card ml-10 rounded-[1.5rem] md:ml-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div>
                          <CardTitle className="font-display text-2xl">
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              {exp.company}
                            </a>
                          </CardTitle>
                          <CardDescription className="text-base font-semibold mt-1 text-foreground/80">
                            {exp.position}
                          </CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground md:text-right shrink-0">
                          <div>{exp.period}</div>
                          <div>{exp.location}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
              </div>
              <div className="absolute left-4 top-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary shadow md:static md:left-auto md:top-auto md:translate-x-0 md:col-start-2 md:mx-auto">
                <span className="h-2 w-2 rounded-full bg-primary-foreground" />
              </div>
              <div className={index % 2 === 0 ? "hidden md:block md:col-start-3" : "hidden md:block md:col-start-1"}>
                <div className="h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
