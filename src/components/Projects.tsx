
import React from 'react';
import { ExternalLink, Github, Code, Database, Globe, Shield } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Chess (Online Game)",
    description: "Real-time multiplayer chess game with WebSocket integration, featuring live gameplay, move validation, and responsive design.",
    tech: ["React", "TypeScript", "WebSocket", "Vite", "Tailwind CSS", "Node.js"],
    github: "https://github.com/manraj777/Chess.com",
    demo: "https://github.com/manraj777/Chess.com", // Add your demo URL here
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "Trade Strategy Bot",
    description: "Automated arbitrage strategy implementation for illiquid markets with real-time data processing and TypeScript architecture.",
    tech: ["TypeScript", "Node.js", "APIs", "Axios"],
    github: "https://github.com/manraj777/Trade-Strategy",
    demo: "https://github.com/manraj777/Trade-Strategy", // Add your demo URL here
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "Medveda",
    description: "Health-tech platform built with Next.js and Firebase integration for secure medical data management and patient care coordination.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "React"],
    github: "https://github.com/manraj777/MedVeda",
    demo: "https://github.com/manraj777/MedVeda", // Add your demo URL here
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "PralayMitra",
    description: "Disaster alerting platform leveraging weather APIs with intelligent chatbot integration for emergency response and community safety.",
    tech: ["React", "Node.js", "Weather APIs", "Chat Integration"],
    github: "https://github.com/manraj777/Pralay_Mitra",
    demo: "https://github.com/manraj777/Pralay_Mitra", // Add your demo URL here
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 h-64 w-64 bg-accent/5 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-0 h-64 w-64 bg-accent/5 rounded-full blur-[100px] animate-pulse-glow animation-delay-1000" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            from real-time applications to health-tech solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`glass-card rounded-xl overflow-hidden card-hover group relative ${
                project.featured ? 'ring-2 ring-accent/20' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}

              <div className="h-48 w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold gradient-text">{project.title}</h3>
                  <div className="flex gap-2">
                    <Code size={16} className="text-accent" />
                    <Database size={16} className="text-muted-foreground" />
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="bg-accent/10 text-accent border border-accent/20 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group/link"
                  >
                    <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
                    <span className="font-medium">Source Code</span>
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs px-4 py-2 flex items-center gap-2 group/demo"
                    >
                      <Globe size={14} className="group-hover/demo:rotate-12 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/manraj777"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            <Github size={16} className="group-hover:rotate-12 transition-transform" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
