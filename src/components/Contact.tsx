
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="section-title text-center">Get in <span className="text-accent">Touch</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              Have a project in mind or just want to connect? Feel free to reach out and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:manraj.engg@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>manraj.engg@gmail.com</span>
              </a>
              
              <a 
                href="tel:+916261543983"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+91 6261543983</span>
              </a>
              
              <a 
                href="https://github.com/manraj777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/manraj777</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/manraj-gupta"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/manraj-gupta</span>
              </a>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-background border-border"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="bg-background border-border"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="bg-background border-border min-h-32"
              />
            </div>
            
            <Button type="submit" className="btn-primary w-full">
              <Send className="mr-2 h-4 w-4" /> 
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
