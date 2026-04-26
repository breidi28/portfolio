import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      company: "Huawei Global Service Center Romania",
      position: "Front Office Software Engineer",
      period: "Mar 2026 - Present",
      location: "Bucharest, Romania",
      website: "https://www.huawei.com/",
      highlights: [
        "Delivered L1 network operations in a 24/7 monitoring environment with incident triage and first-line restoration.",
        "Managed end-to-end ticket lifecycle and cross-team escalation aligned with SLA targets.",
        "Built and deployed an internal software suite on Vercel with PostgreSQL to centralize workflows.",
        "Developed JavaScript automation scripts to reduce repetitive operational tasks and improve team efficiency.",
      ],
    },
    {
      company: "Interschutz",
      position: "Data Science Intern",
      period: "Jan 2023 - Aug 2023",
      location: "Bucharest, Romania",
      website: "#",
      highlights: [
        "Performed statistical analysis on financial data and translated findings into business recommendations.",
        "Created stakeholder-facing visual reports to communicate trends, risks, and opportunities.",
        "Presented weekly updates to senior stakeholders and supported budget planning discussions.",
      ],
    },
    {
      company: "BRD - Groupe Société Générale",
      position: "Data Science Intern",
      period: "Jun 2023 - Aug 2023",
      location: "Bucharest, Romania",
      website: "https://www.brd.ro/",
      highlights: [
        "Designed and developed interactive financial dashboards with Plotly Dash for KPI tracking.",
        "Created structured reports that converted raw data into decision-ready insights.",
        "Collaborated with analysts to improve dashboard usability for executive audiences.",
      ],
    },
    {
      company: "BRD - Groupe Société Générale",
      position: "Data Engineering Intern",
      period: "Jun 2022 - Aug 2022",
      location: "Bucharest, Romania",
      website: "https://www.brd.ro/",
      highlights: [
        "Supported development and monitoring of automated data pipelines using Apache Airflow.",
        "Built and maintained business dashboards in Apache Superset for reporting teams.",
        "Collaborated with BI engineers and analysts in an enterprise banking environment.",
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
            From enterprise analytics to production software delivery across telecom, finance, and operations.
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
              <div className="absolute left-4 top-6 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary shadow md:left-1/2 md:-translate-x-1/2">
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
