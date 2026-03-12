"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github } from "lucide-react";

export function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const featuredProjects = [
    {
      title: "Train Tracker for Romanian Railways",
      description: "Production-ready mobile app serving 1,000+ active users. Complete redesign of CFR's outdated system with real-time train tracking, delay notifications, and multi-language support. Built with React Native for cross-platform deployment. Solved a real problem I faced as a frequent traveler—now helping thousands of commuters daily.",
      technologies: ["React Native", "Node.js", "Python Flask", "Public APIs", "i18n"],
      link: "https://mytrainbreidi.vercel.app/",
      linkText: "View Live App",
      github: "https://github.com/breidi28/train-tracker",
      featured: true,
    },
    {
      title: "DAF Trucks NV - Process Optimization",
      description: "Industrial analytics project that delivered measurable impact: 50% reduction in production downtime, saving €100K+ annually. Analyzed 6 months of manufacturing data, identified bottlenecks, and built Tableau dashboards for real-time monitoring. Presented data-driven recommendations to C-level stakeholders. This project demonstrates my ability to drive business value through analytics.",
      technologies: ["Python", "Pandas", "R", "Tableau", "Power Apps", "Figma"],
      link: "https://www.daf.nl/",
      linkText: "Company Site",
      github: "#",
      githubText: "NDA Protected",
      featured: true,
    },
    {
      title: "Music Share - Social Music Platform",
      description: "Full-stack social music platform with 1,000+ lines of production code. Built comprehensive social network with React Native/Flask featuring OAuth integrations for 6 streaming services (Spotify, YouTube Music, Apple Music, Tidal, Deezer, Qobuz), JWT authentication, physical media cataloging with barcode scanning via MusicBrainz API, and real-time social features (feed, likes, comments, follows). Demonstrates advanced mobile development, backend architecture, and third-party API integrations.",
      technologies: ["React Native", "TypeScript", "Flask", "SQLAlchemy", "OAuth 2.0", "JWT", "Zustand", "Expo"],
      link: "https://github.com/breidi28/music-share",
      linkText: "View on GitHub",
      github: "https://github.com/breidi28/music-share",
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: "Jugo - User Engagement Analysis",
      description: "Web analytics project analyzing 250K+ user sessions to evaluate platform redesign. Discovered 23% increase in user engagement and 15% improvement in conversion rates post-redesign. Built interactive Python dashboards with Dash & Plotly to track KPIs and visualize user behavior patterns. Delivered actionable insights that validated €50K+ redesign investment.",
      technologies: ["Python", "Pandas", "NumPy", "Dash", "Plotly"],
      link: "https://jugo.nl/",
      linkText: "Company Site",
      github: "#",
      githubText: "NDA Protected"
    },
    {
      title: "Movie Recommendation System",
      description: "ML-powered recommendation engine processing 45K+ movies from TMDB dataset. Built content-based filtering using NLP (TF-IDF vectorization) and cosine similarity algorithms. Achieves 87% accuracy in user preference prediction. Demonstrates practical application of machine learning and natural language processing techniques.",
      technologies: ["Python", "Machine Learning", "NLP", "Scikit-learn", "Pandas"],
      link: "https://github.com/breidi28/Movie-Recommendation-System",
      linkText: "View on GitHub",
      github: "https://github.com/breidi28/Movie-Recommendation-System",
    },
    {
      title: "Plainwater - BI & UX Optimization",
      description: "E-commerce analytics project improving customer retention by 18%. Analyzed 100K+ customer transactions to identify drop-off points. Created Power BI dashboards tracking conversion funnels and designed Figma prototypes for checkout optimization. Data-driven recommendations increased average order value by 12%.",
      technologies: ["Python", "Pandas", "Power BI", "Figma", "UX Research"],
      link: "https://plainwater.nl/",
      linkText: "Company Site",
      github: "#",
      githubText: "NDA Protected"
    },
    {
      title: "BRD Bank - Financial Dashboards",
      description: "Enterprise-level financial reporting system processing millions in transaction data. Built interactive Plotly Dash dashboards displaying real-time KPIs for executive decision-making. Automated 15+ monthly reports, reducing manual reporting effort by 40 hours/month. Improved data accuracy and stakeholder visibility into key financial metrics.",
      technologies: ["Python", "Plotly", "Dash", "Pandas", "SQL"],
      link: "https://www.brd.ro/",
      linkText: "Company Site",
      github: "#",
      githubText: "NDA Protected"
    },
    {
      title: "Microservices Weather Dashboard",
      description: "Enterprise-grade weather forecasting app with microservices architecture. Containerized Python/React services with Docker, orchestrated via Kubernetes, and deployed to Azure. ML weather prediction models with 92% accuracy. Implemented full DevOps pipeline: monitoring (Prometheus/Grafana), logging, and auto-scaling. Showcases modern cloud architecture and engineering best practices.",
      technologies: ["Python", "React", "SQLite", "Docker", "Kubernetes", "Azure", "Prometheus", "Grafana"],
      link: "https://github.com/breidi28/-microservices-weather-dashboard",
      linkText: "View Architecture",
      github: "https://github.com/breidi28/-microservices-weather-dashboard",
    },
    {
      title: "Audiophile Music Player",
      description: "Desktop music player built with React/TypeScript and deployed via Electron. Features high-fidelity audio playback using Web Audio API, custom equalizer with 10-band control, playlist management, and offline support. Cross-platform compatibility (Windows/Mac/Linux). Demonstrates advanced React patterns, TypeScript proficiency, and desktop app development.",
      technologies: ["React", "TypeScript", "Web Audio API", "Electron", "Vite"],
      link: "https://github.com/breidi28/React-Music-Player",
      linkText: "View on GitHub",
      github: "https://github.com/breidi28/React-Music-Player"
    },
    {
      title: "Business Manager Dashboard",
      description: "Full-featured business management app built with React Native for iOS/Android. Manages 50+ clients, tracks projects, generates professional PDF invoices, and provides financial analytics dashboard. Features include revenue forecasting, expense tracking, and automated invoice generation. Demonstrates full-stack development skills with local data persistence and complex state management.",
      technologies: ["React Native", "TypeScript", "React Native HTML to PDF", "AsyncStorage", "React Hook Form"],
      link: "https://github.com/breidi28/business-management",
      linkText: "View on GitHub",
      github: "https://github.com/breidi28/business-management"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="section-kicker mb-3">Selected Work</p>
            <h2 className="section-title mb-3">Featured Projects</h2>
            <p className="text-muted-foreground">Highlights of my most impactful work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
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

        <div>
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl md:text-4xl mb-3">More Projects</h3>
            <p className="text-muted-foreground">Additional work demonstrating diverse technical capabilities</p>
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
            {otherProjects.map((project, index) => (
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
      </div>
    </section>
  );
}
