
import React from 'react';
import { cn } from '@/lib/utils';

type SkillCategory = {
  name: string;
  skills: string[];
  icon: string;
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C/C++", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
    icon: "💻",
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Axios", "pandas", "NumPy"],
    icon: "⚛️",
  },
  {
    name: "Tools & Platforms",
    skills: ["Git/GitHub", "Docker", "VS Code", "MongoDB", "MySQL", "IntelliJIDEA", "Unix Shell"],
    icon: "🛠️",
  },
  {
    name: "Other",
    skills: ["LATEX", "Bun", "RESTful APIs", "WebSocket"],
    icon: "🚀",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 h-64 w-64 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 h-64 w-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container-custom">
        <h2 className="section-title text-center">My <span className="gradient-text">Skills</span></h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name}
              className="glass-card p-8 rounded-xl card-hover group h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold gradient-text">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 flex-1">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-muted/50 hover:bg-accent/20 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-border/50 hover:border-accent/50 backdrop-blur-sm"
                    style={{
                      animationDelay: `${skillIndex * 100}ms`,
                    }}
                  >
                    <span className="font-medium">{skill}</span>
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
