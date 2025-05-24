
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!form.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        'service_b4hguab',
        'template_r4b6hci',
        form.current,
        'Ae1JX1pJz0BRRtYiw'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="bg-background border-border"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="bg-background border-border"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                className="bg-background border-border min-h-32"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="btn-primary w-full" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> 
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
