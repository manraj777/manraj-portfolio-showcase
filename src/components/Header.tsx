
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
      scrolled ? "bg-background/90 backdrop-blur-md shadow-md border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-accent flex items-center hover:scale-105 transition-transform">
          <span className="mr-1.5">&lt;</span>
          <span>MG</span>
          <span className="ml-1.5">/&gt;</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link group">About</a>
          <a href="#skills" className="nav-link group">Skills</a>
          <a href="#projects" className="nav-link group">Projects</a>
          <a href="#experience" className="nav-link group">Experience</a>
          <a href="#contact" className="nav-link group">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-accent/20 transition-colors"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          
          <a href="#contact" className="btn-primary text-sm hidden md:block">
            Get in Touch
          </a>

          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
