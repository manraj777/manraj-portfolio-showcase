
import React from 'react';
import { Award, Trophy, Target, Zap } from 'lucide-react';

type Achievement = {
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  category: string;
};

const achievements: Achievement[] = [
  {
    title: "Community Leader",
    description: "Successfully grew SDC community to 300+ members and organized 12+ tech events",
    icon: <Trophy size={24} />,
    date: "2024",
    category: "Leadership"
  },
  {
    title: "Full-Stack Excellence",
    description: "Built and deployed multiple production-ready applications with modern tech stack",
    icon: <Target size={24} />,
    date: "2024",
    category: "Development"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to various open source projects with 15+ repositories",
    icon: <Zap size={24} />,
    date: "2024",
    category: "Contribution"
  },
  {
    title: "Problem Solver",
    description: "Developed innovative solutions for real-world problems including disaster management",
    icon: <Award size={24} />,
    date: "2024",
    category: "Innovation"
  }
];

const Achievements = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-48 w-48 bg-accent/5 rounded-full blur-[80px] animate-float" />
        <div className="absolute bottom-0 left-1/4 h-48 w-48 bg-accent/5 rounded-full blur-[80px] animate-float animation-delay-1000" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Key <span className="gradient-text">Achievements</span></h3>
          <p className="text-muted-foreground">Milestones and accomplishments in my journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="glass-card p-6 rounded-xl card-hover text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <span className="text-accent group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </span>
              </div>
              
              <h4 className="font-semibold mb-2">{achievement.title}</h4>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {achievement.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="bg-accent/10 px-2 py-1 rounded-full">{achievement.category}</span>
                <span>{achievement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
