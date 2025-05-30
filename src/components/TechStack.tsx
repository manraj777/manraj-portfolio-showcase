
import React, { useState } from 'react';
import { Code, Database, Globe, Terminal, Wrench, Zap } from 'lucide-react';

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

type Skill = {
  name: string;
  level: SkillLevel;
  category: string;
  description: string;
};

const skills: Skill[] = [
  // Languages
  { name: "JavaScript", level: "Advanced", category: "Languages", description: "ES6+, async/await, DOM manipulation" },
  { name: "TypeScript", level: "Advanced", category: "Languages", description: "Type safety, generics, advanced patterns" },
  { name: "Python", level: "Intermediate", category: "Languages", description: "Data analysis, automation, APIs" },
  { name: "C/C++", level: "Intermediate", category: "Languages", description: "System programming, algorithms" },
  { name: "SQL", level: "Intermediate", category: "Languages", description: "Complex queries, optimization" },
  
  // Frontend
  { name: "React", level: "Advanced", category: "Frontend", description: "Hooks, context, performance optimization" },
  { name: "Next.js", level: "Intermediate", category: "Frontend", description: "SSR, API routes, optimization" },
  { name: "Tailwind CSS", level: "Advanced", category: "Frontend", description: "Responsive design, custom components" },
  { name: "HTML/CSS", level: "Advanced", category: "Frontend", description: "Semantic markup, modern CSS" },
  
  // Backend
  { name: "Node.js", level: "Advanced", category: "Backend", description: "Express, middleware, authentication" },
  { name: "Express", level: "Advanced", category: "Backend", description: "RESTful APIs, middleware patterns" },
  { name: "WebSocket", level: "Intermediate", category: "Backend", description: "Real-time communication" },
  { name: "RESTful APIs", level: "Advanced", category: "Backend", description: "Design patterns, documentation" },
  
  // Database
  { name: "MongoDB", level: "Intermediate", category: "Database", description: "NoSQL, aggregation pipelines" },
  { name: "MySQL", level: "Intermediate", category: "Database", description: "Relational design, optimization" },
  { name: "Firebase", level: "Intermediate", category: "Database", description: "Real-time database, authentication" },
  
  // Tools
  { name: "Git/GitHub", level: "Advanced", category: "Tools", description: "Version control, collaboration" },
  { name: "Docker", level: "Beginner", category: "Tools", description: "Containerization basics" },
  { name: "VS Code", level: "Expert", category: "Tools", description: "Extensions, debugging, workflows" },
  { name: "Vite", level: "Advanced", category: "Tools", description: "Build optimization, dev experience" },
];

const categories = [
  { name: "Languages", icon: <Terminal size={20} />, color: "from-blue-500 to-cyan-500" },
  { name: "Frontend", icon: <Globe size={20} />, color: "from-green-500 to-emerald-500" },
  { name: "Backend", icon: <Database size={20} />, color: "from-purple-500 to-violet-500" },
  { name: "Database", icon: <Database size={20} />, color: "from-orange-500 to-red-500" },
  { name: "Tools", icon: <Wrench size={20} />, color: "from-pink-500 to-rose-500" },
];

const getLevelColor = (level: SkillLevel) => {
  switch (level) {
    case 'Expert': return 'from-accent to-yellow-400';
    case 'Advanced': return 'from-green-500 to-emerald-500';
    case 'Intermediate': return 'from-blue-500 to-cyan-500';
    case 'Beginner': return 'from-gray-500 to-slate-500';
    default: return 'from-gray-500 to-slate-500';
  }
};

const getLevelWidth = (level: SkillLevel) => {
  switch (level) {
    case 'Expert': return 'w-full';
    case 'Advanced': return 'w-5/6';
    case 'Intermediate': return 'w-2/3';
    case 'Beginner': return 'w-1/3';
    default: return 'w-1/3';
  }
};

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Languages');

  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="techstack" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 bg-accent/5 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 bg-accent/5 rounded-full blur-[100px] animate-pulse-glow animation-delay-1000" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Tech <span className="gradient-text">Stack</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise levels across different domains.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-background/50 rounded-xl border border-border/50 backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-xl card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getLevelColor(skill.level)} text-white`}>
                  {skill.level}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {skill.description}
              </p>

              {/* Skill Level Bar */}
              <div className="relative">
                <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)} transition-all duration-1000 ease-out rounded-full`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-2xl mx-auto">
          {[
            { label: 'Languages', count: skills.filter(s => s.category === 'Languages').length },
            { label: 'Frameworks', count: skills.filter(s => s.category === 'Frontend').length + skills.filter(s => s.category === 'Backend').length },
            { label: 'Databases', count: skills.filter(s => s.category === 'Database').length },
            { label: 'Tools', count: skills.filter(s => s.category === 'Tools').length },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass-card p-4 rounded-lg">
              <div className="text-2xl font-bold gradient-text">{stat.count}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
