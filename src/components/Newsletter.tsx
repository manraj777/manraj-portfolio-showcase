
import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-accent/10 to-accent/5 relative overflow-hidden">
        <div className="container-custom text-center">
          <div className="max-w-md mx-auto glass-card p-8 rounded-xl">
            <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-bold mb-2">Successfully Subscribed!</h3>
            <p className="text-muted-foreground">
              Thank you for joining! You'll receive updates about my latest projects and articles.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-accent/10 to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="text-accent" size={32} />
            <h2 className="text-3xl font-bold">Stay <span className="gradient-text">Updated</span></h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Get notified about my latest projects, articles, and tech insights. 
            No spam, just valuable content for developers.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/50 border-accent/20 focus:border-accent"
              required
            />
            <Button 
              type="submit" 
              className="btn-primary px-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Join 500+ developers who trust my insights. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
