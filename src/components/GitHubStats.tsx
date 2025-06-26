
import React from 'react';
import { Github, Star, GitFork, Calendar } from 'lucide-react';

const GitHubStats = () => {
  // Mock data - you can replace with real GitHub API calls later
  const stats = {
    totalRepos: 15,
    totalStars: 47,
    totalForks: 23,
    contributions: 234,
    streak: 12
  };

  const languages = [
    { name: 'TypeScript', percentage: 45, color: '#3178c6' },
    { name: 'JavaScript', percentage: 30, color: '#f7df1e' },
    { name: 'React', percentage: 15, color: '#61dafb' },
    { name: 'Node.js', percentage: 10, color: '#339933' }
  ];

  return (
    <section className="py-12 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 h-48 w-48 bg-accent/5 rounded-full blur-[80px] animate-pulse-glow" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">GitHub <span className="gradient-text">Activity</span></h3>
          <p className="text-muted-foreground">My coding journey in numbers</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 text-center card-hover">
              <Github size={24} className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">{stats.totalRepos}</div>
              <div className="text-sm text-muted-foreground">Repositories</div>
            </div>
            
            <div className="glass-card p-4 text-center card-hover">
              <Star size={24} className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">{stats.totalStars}</div>
              <div className="text-sm text-muted-foreground">Stars Earned</div>
            </div>
            
            <div className="glass-card p-4 text-center card-hover">
              <GitFork size={24} className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">{stats.totalForks}</div>
              <div className="text-sm text-muted-foreground">Forks</div>
            </div>
            
            <div className="glass-card p-4 text-center card-hover">
              <Calendar size={24} className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">{stats.streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
          </div>

          {/* Language Usage */}
          <div className="glass-card p-6">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <span>Most Used Languages</span>
            </h4>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
