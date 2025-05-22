
import React from 'react';
import { cn } from '@/lib/utils';

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C/C++", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Axios", "pandas", "NumPy"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git/GitHub", "Docker", "VS Code", "MongoDB", "MySQL", "IntelliJIDEA", "Unix Shell"],
  },
  {
    name: "Other",
    skills: ["LATEX", "Bun", "RESTful APIs", "WebSocket"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center">My <span className="text-accent">Skills</span></h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name}
              className={cn(
                "bg-secondary p-6 rounded-lg",
                index % 2 === 0 ? "md:transform md:translate-y-8" : ""
              )}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">{category.name}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-muted px-4 py-2 rounded-md flex items-center gap-2 hover:bg-accent/20 transition-colors"
                  >
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
