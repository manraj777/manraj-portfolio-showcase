
import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/manraj777", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Mail size={18} />, href: "mailto:manraj@example.com", label: "Email" },
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#techstack", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-secondary border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-32 w-32 bg-accent/5 rounded-full blur-[60px]" />
        <div className="absolute bottom-0 right-1/4 h-32 w-32 bg-accent/5 rounded-full blur-[60px]" />
      </div>

      <div className="container-custom">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-accent flex items-center group">
              <span className="mr-1.5 group-hover:rotate-12 transition-transform">&lt;</span>
              <span>MG</span>
              <span className="ml-1.5 group-hover:-rotate-12 transition-transform">/&gt;</span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              Full Stack Developer passionate about building scalable solutions and fostering developer communities.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navigation</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm py-1 hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/50 hover:bg-accent/20 rounded-lg transition-all duration-300 hover:scale-110 border border-border/50 hover:border-accent/50"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Available for freelance projects and collaborations
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <p>© {currentYear} Manraj Gupta. All rights reserved.</p>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <p className="flex items-center">
                Built with <Heart size={12} className="mx-1 fill-accent text-accent animate-pulse" /> 
                using React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
