import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "DAF Trucks NV - Process Optimization",
      description: "Real-world industrial optimization project delivering 50% downtime reduction. Analyzed production data, created interactive dashboards, and presented solutions to stakeholders.",
      technologies: ["Python", "Pandas", "R", "Tableau", "Power Apps", "Figma"],
      link: "https://www.daf.nl/"
    },
    {
      title: "Jugo - User Engagement Analysis",
      description: "Large-scale website analytics project evaluating platform redesign impact. Built interactive dashboards using Dash & Plotly to visualize traffic trends and conversion behavior.",
      technologies: ["Python", "Pandas", "NumPy", "Dash", "Plotly"],
      link: "https://jugo.nl/"
    },
    {
      title: "Movie Recommendation System",
      description: "Content-based filtering engine using NLP and machine learning. Implemented cosine similarity with k-NN to generate personalized movie recommendations from TMDB dataset.",
      technologies: ["Python", "Machine Learning", "NLP", "Scikit-learn"],
      link: "#",
      github: "https://github.com/breidi28/Movie-Recommendation-System",
    },
    {
      title: "Plainwater - BI & UX Optimization",
      description: "Customer behavior analysis and digital optimization for e-commerce. Created Power BI dashboards and Figma prototypes to improve conversion and retention.",
      technologies: ["Python", "Pandas", "Power BI", "Figma", "UX Research"],
      link: "https://plainwater.nl/"
    },
    {
      title: "BRD Bank - Financial Dashboards",
      description: "Designed interactive financial KPI dashboards using Plotly Dash. Performed data preprocessing and created executive-level reports for management decision-making.",
      technologies: ["Python", "Plotly", "Dash", "Pandas"],
      link: "https://www.brd.ro/"
    },
    {
      title: "ESP32 Weather Station",
      description: "IoT system displaying real-time weather data on OLED screens with remote web UI configuration. Hands-on embedded systems and hardware project.",
      technologies: ["ESP32", "Arduino", "IoT", "Web UI", "Flask"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
