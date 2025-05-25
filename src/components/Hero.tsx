
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Enhanced interactive background for both themes */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 right-10 h-96 w-96 bg-gradient-to-br from-accent/30 via-accent/15 to-transparent dark:from-accent/20 dark:via-accent/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-10 left-10 h-96 w-96 bg-gradient-to-tr from-accent/25 via-accent/10 to-transparent dark:from-accent/15 dark:via-accent/5 rounded-full blur-[120px] animate-pulse-glow animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px] animate-float" />
        
        {/* Interactive floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent/40 rounded-full animate-bounce-slow" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-bounce-slow animation-delay-500" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent/20 rounded-full animate-float animation-delay-2000" />
        
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 dark:from-accent/3 dark:to-accent/3" />
        <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 via-transparent to-secondary/10 dark:from-secondary/5 dark:to-secondary/5" />
      </div>
      
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
              <h5 className="text-accent font-medium text-sm">Available for new opportunities</h5>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="block">Manraj</span>
              <span className="block gradient-text">Gupta</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground font-medium">
                Developer | Community Builder | IT Undergrad
              </p>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                I build scalable projects and communities that matter, crafting digital experiences with modern technologies.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button className={cn(
                "btn-primary flex items-center gap-2 text-base group"
              )}>
                <Download size={16} className="group-hover:animate-bounce" />
                View Resume
              </Button>
              
              <Button className={cn(
                "btn-secondary flex items-center gap-2 text-base group"
              )}>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative mx-auto">
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] animate-float">
            {/* Enhanced profile image with multiple effects */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative z-10 border-2 border-accent shadow-2xl shadow-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
              <img 
                src="/lovable-uploads/6696c206-a53a-4cb4-bde6-684c356e37bc.png" 
                alt="Manraj Gupta" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Enhanced background elements */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-br from-accent/15 to-accent/5 rounded-2xl transform translate-x-4 translate-y-4 blur-sm"></div>
            <div className="absolute -top-2 -right-2 -z-20 w-full h-full bg-gradient-to-br from-accent/10 to-transparent rounded-2xl transform translate-x-8 translate-y-8 blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
