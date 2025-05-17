
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
    title: "Trade-Strategy",
    description: "TypeScript app to optimize buying strategies between liquid and illiquid markets.",
    tech: ["TypeScript", "Node.js", "Twitch API", "Axios"],
    github: "#",
    image: "bg-blue-500",
  },
  {
    title: "Online Chess Game",
    description: "Multiplayer chess app with real-time sync using WebSocket and React.",
    tech: ["React", "TypeScript", "WebSocket", "Vite", "Tailwind", "Node.js"],
    github: "#",
    image: "bg-green-500",
  },
  {
    title: "ROBOScoccer Bot",
    description: "Custom Minecraft server plugin managing player hunger with persistent data saving.",
    tech: ["Java", "Maven", "API Spigot", "IntelliJIDEA"],
    github: "#",
    image: "bg-orange-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="section-title text-center">My <span className="text-accent">Projects</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-background rounded-lg overflow-hidden border border-border flex flex-col card-hover"
            >
              <div className={`${project.image} h-48 w-full`}></div>
              
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
