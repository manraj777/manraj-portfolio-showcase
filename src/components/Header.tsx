
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#techstack", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
      scrolled ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container-custom flex items-center justify-between">
        <a 
          href="#" 
          className="text-lg font-bold text-accent flex items-center hover:scale-105 transition-transform group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="mr-1.5 group-hover:rotate-12 transition-transform">&lt;</span>
          <span>MG</span>
          <span className="ml-1.5 group-hover:-rotate-12 transition-transform">/&gt;</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="nav-link group text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
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
          
          <a 
            href="#contact" 
            className="btn-primary text-sm px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground hidden md:inline-flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-accent/20 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg">
          <nav className="container-custom py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-base py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
