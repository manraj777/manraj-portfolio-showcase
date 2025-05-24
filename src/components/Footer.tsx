
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container-custom text-center">
        <div className="mb-6">
          <a href="#" className="text-xl font-bold text-accent flex items-center justify-center">
            <span className="mr-1.5">&lt;</span>
            <span>MG</span>
            <span className="ml-1.5">/&gt;</span>
          </a>
        </div>
        
        <nav className="flex justify-center flex-wrap gap-6 mb-6">
          <a href="#about" className="nav-link group">About</a>
          <a href="#skills" className="nav-link group">Skills</a>
          <a href="#projects" className="nav-link group">Projects</a>
          <a href="#experience" className="nav-link group">Experience</a>
          <a href="#contact" className="nav-link group">Contact</a>
        </nav>
        
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Manraj Gupta. All rights reserved.</p>
          <span className="mx-2">•</span>
          <p className="flex items-center">
            Built with <Heart size={12} className="mx-1 fill-accent text-accent" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
