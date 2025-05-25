
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Chess (Online Game)",
    description: "Real-time multiplayer chess game with WebSocket integration and React frontend.",
    tech: ["React", "TypeScript", "WebSocket", "Vite", "Tailwind CSS", "Node.js"],
    github: "https://github.com/manraj777/Chess.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Trade Strategy Bot",
    description: "Automated arbitrage strategy implementation for illiquid markets with TypeScript.",
    tech: ["TypeScript", "Node.js", "APIs", "Axios"],
    github: "https://github.com/manraj777/Trade-Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Medveda",
    description: "Health-tech platform built with Next.js and Firebase integration for medical data management.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "React"],
    github: "https://github.com/manraj777/MedVeda",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "PralayMitra",
    description: "Disaster alerting platform leveraging weather APIs with chatbot integration for emergency response.",
    tech: ["React", "Node.js", "Weather APIs", "Chat Integration"],
    github: "https://github.com/manraj777/Pralay_Mitra",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="section-title text-center">My <span className="text-accent">Projects</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-background rounded-lg overflow-hidden border border-border flex flex-col card-hover"
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="bg-muted text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 pt-0 flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
