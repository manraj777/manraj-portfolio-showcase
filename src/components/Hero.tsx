
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-72 w-72 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 bg-accent/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-4 animate-fade-in-up">
            <h5 className="text-accent font-medium">Hello, I'm</h5>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              Manraj <br /> 
              <span className="text-accent">Gupta</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Developer | Community Builder | IT Undergrad
            </p>
            <p className="text-lg text-muted-foreground max-w-lg">
              I build scalable projects and communities that matter.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className={cn(
                "btn-primary flex items-center gap-2 text-base"
              )}>
                <Download size={16} />
                View Resume
              </Button>
              
              <Button className={cn(
                "btn-secondary flex items-center gap-2 text-base"
              )}>
                <Send size={16} />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative mx-auto">
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] animate-float">
            {/* Profile image placeholder with cool border */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative z-10 border-2 border-accent">
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <div className="text-6xl font-bold text-accent">MG</div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full bg-accent/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
