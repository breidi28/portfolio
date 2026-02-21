import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { link } from "fs";

export function Projects() {
  const projects = [
    {
      title: "DAF Trucks NV - Process Optimization",
      description: "Real-world industrial optimization project delivering 50% downtime reduction. Analyzed production data, created interactive dashboards, and presented solutions to stakeholders.",
      technologies: ["Python", "Pandas", "R", "Tableau", "Power Apps", "Figma"],
      link: "https://www.daf.nl/",
      linkText: "Go to Site",
      github: "#",
      githubText: "Coming Soon"
    },
    {
      title: "Jugo - User Engagement Analysis",
      description: "Large-scale website analytics project evaluating platform redesign impact. Built interactive dashboards using Dash & Plotly to visualize traffic trends and conversion behavior.",
      technologies: ["Python", "Pandas", "NumPy", "Dash", "Plotly"],
      link: "https://jugo.nl/",
      linkText: "Go to Site",
      github: "#",
      githubText: "Coming Soon"
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
      link: "https://plainwater.nl/",
      linkText: "Go to Site",
      github: "#",
      githubText: "Coming Soon"
    },
    {
      title: "BRD Bank - Financial Dashboards",
      description: "Designed interactive financial KPI dashboards using Plotly Dash. Performed data preprocessing and created executive-level reports for management decision-making.",
      technologies: ["Python", "Plotly", "Dash", "Pandas"],
      link: "https://www.brd.ro/",
      linkText: "Go to Site",
      github: "#",
      githubText: "Coming Soon"
    },
    {
      title: "Train Tracker for Romanian Railways",
      description: "Real-time train tracking application using public APIs. Built with React Native and Node.js to display live train locations, schedules, and delays for Romanian Railways.",
      technologies: ["React Native", "Node.js", "Python Flask", "Public APIs"],
      link: "#",
      linkText: "Live demo coming soon",
      github: "https://github.com/breidi28/train-tracker",
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
                      {project.linkText || "Live Demo"}
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {project.githubText || "GitHub"}
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
