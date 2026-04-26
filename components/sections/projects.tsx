"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github } from "lucide-react";

export function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const renderRepoButton = (github: string, githubText?: string) => {
    if (github === "#") {
      return (
        <Button variant="outline" size="sm" className="flex-1" disabled>
          {githubText || "NDA Protected"}
        </Button>
      );
    }

    return (
      <Button variant="outline" size="sm" className="flex-1" asChild>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-4 w-4" />
          {githubText || "GitHub"}
        </a>
      </Button>
    );
  };

  const featuredProjects = [
    {
      title: "DAF Trucks NV - Process Optimization",
      description: "Problem: recurring factory-floor printer incidents slowed production. Action: built a guided Power Apps troubleshooting flow, designed an Azure-backed incident dataset, and created Tableau monitoring dashboards. Outcome: 50% downtime reduction and EUR100K+ annual savings.",
      technologies: ["Python", "Pandas", "R", "Tableau", "Power Apps", "Azure"],
      link: "https://www.daf.nl/",
      linkText: "Company Context",
      github: "#",
      githubText: "NDA Case",
      featured: true,
    },
    {
      title: "Train Tracker for Romanian Railways",
      description: "Production mobile app used by 1,000+ active users. Rebuilt a dated travel workflow into a real-time experience with tracking, delay notifications, and multi-language support. Demonstrates shipping velocity and user-centered product execution.",
      technologies: ["React Native", "Node.js", "Python Flask", "Public APIs", "i18n"],
      link: "https://mytrainbreidi.vercel.app/",
      linkText: "View Live App",
      github: "https://github.com/breidi28/train-tracker",
      featured: true,
    },
    {
      title: "Music Share - Social Music Platform",
      description: "End-to-end social platform with React Native and Flask. Includes OAuth integrations across six streaming services, JWT authentication, barcode-based collection tracking, and social features like feed, comments, likes, and follows. Built as a product, not a portfolio demo.",
      technologies: ["React Native", "TypeScript", "Flask", "SQLAlchemy", "OAuth 2.0", "JWT", "Zustand", "Expo"],
      link: "https://github.com/breidi28/music-share",
      linkText: "View Repository",
      github: "https://github.com/breidi28/music-share",
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: "Jugo - User Engagement Analysis",
      description: "Analyzed 250K+ sessions to evaluate a platform redesign. Measured +23% engagement and +15% conversion improvement, and delivered interactive Dash/Plotly reporting for KPI tracking and decision support.",
      technologies: ["Python", "Pandas", "NumPy", "Dash", "Plotly"],
      link: "https://jugo.nl/",
      linkText: "Company Context",
      github: "#",
      githubText: "NDA Case"
    },
    {
      title: "Movie Recommendation System",
      description: "Built a content-based recommendation engine on 45K+ movies using NLP features, TF-IDF vectorization, and cosine similarity retrieval. Reached 87% preference prediction accuracy with a deployable Flask inference layer.",
      technologies: ["Python", "Machine Learning", "NLP", "Scikit-learn", "Pandas"],
      link: "https://github.com/breidi28/Movie-Recommendation-System",
      linkText: "View Repository",
      github: "https://github.com/breidi28/Movie-Recommendation-System",
    },
    {
      title: "Plainwater - BI & UX Optimization",
      description: "Combined BI and UX analysis on 100K+ transactions to identify checkout friction and retention issues. Delivered dashboard insights and redesign direction that improved retention by 18% and average order value by 12%.",
      technologies: ["Python", "Pandas", "Power BI", "Figma", "UX Research"],
      link: "https://plainwater.nl/",
      linkText: "Company Context",
      github: "#",
      githubText: "NDA Case"
    },
    {
      title: "BRD Bank - Financial Dashboards",
      description: "Built interactive financial reporting dashboards for enterprise stakeholders and automated 15+ monthly reporting flows. Reduced manual reporting effort by approximately 40 hours per month and improved KPI visibility.",
      technologies: ["Python", "Plotly", "Dash", "Pandas", "SQL"],
      link: "https://www.brd.ro/",
      linkText: "Company Context",
      github: "#",
      githubText: "NDA Case"
    },
    {
      title: "Microservices Weather Dashboard",
      description: "Built an end-to-end weather analytics system with microservices architecture, Dockerized services, Kubernetes-ready deployment, Azure-hosted ML inference, and observability via Prometheus/Grafana. Achieved 92% weather prediction accuracy.",
      technologies: ["Python", "React", "SQLite", "Docker", "Kubernetes", "Azure", "Prometheus", "Grafana"],
      link: "https://github.com/breidi28/-microservices-weather-dashboard",
      linkText: "View Repository",
      github: "https://github.com/breidi28/-microservices-weather-dashboard",
    },
    {
      title: "Audiophile Music Player",
      description: "Built a desktop audio player with React, TypeScript, and Electron including advanced playback controls, equalizer support, and local library management. Demonstrates frontend architecture depth and desktop delivery skills.",
      technologies: ["React", "TypeScript", "Web Audio API", "Electron", "Vite"],
      link: "https://github.com/breidi28/React-Music-Player",
      linkText: "View Repository",
      github: "https://github.com/breidi28/React-Music-Player"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="section-kicker mb-3">Selected Work</p>
            <h2 className="section-title mb-3">Featured Case Studies</h2>
            <p className="text-muted-foreground">Projects with clear business outcomes and production delivery</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
                <Card 
                  key={project.title} 
                  className="surface-card relative flex h-full flex-col rounded-[1.75rem] group hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 hover:border-primary/50 cursor-pointer"
                >
                  <div className="absolute -top-3 right-5 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </div>
                  <CardHeader>
                    <CardTitle className="font-display text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="group-hover:border-primary/50 transition-colors">
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
                      {renderRepoButton(project.github, project.githubText)}
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl md:text-4xl mb-3">More Projects</h3>
            <p className="text-muted-foreground">Additional work across analytics, machine learning, and product engineering</p>
          </div>
          <div className="mb-6 flex justify-center md:hidden">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowMoreProjects((current) => !current)}
              className="bg-background/80"
            >
              {showMoreProjects ? 'Hide More Projects' : 'Show More Projects'}
              <ChevronDown className={`transition-transform ${showMoreProjects ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          <div className={`${showMoreProjects ? 'grid' : 'hidden'} gap-6 md:grid md:grid-cols-2 lg:grid-cols-3`}>
            {otherProjects.map((project) => (
                <Card
                  key={project.title}
                  className="surface-card h-full rounded-[1.5rem] flex flex-col group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="font-display text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
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
                      {renderRepoButton(project.github, project.githubText)}
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
