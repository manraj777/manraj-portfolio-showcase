
import React from 'react';
import { Quote, Star } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    company: "TechCorp Solutions",
    content: "Manraj's work on our chess platform was exceptional. His understanding of real-time systems and clean code architecture made the collaboration seamless.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "Alex Chen",
    role: "Product Manager",
    company: "StartupXYZ",
    content: "Working with Manraj was a pleasure. He delivered the health-tech platform ahead of schedule and his attention to detail was remarkable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Engineering Manager",
    company: "InnovateNow",
    content: "Manraj's community building skills are as impressive as his technical abilities. He brings teams together and creates lasting impact.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 h-64 w-64 bg-accent/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-0 h-64 w-64 bg-accent/5 rounded-full blur-[100px] animate-float animation-delay-1000" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What People <span className="gradient-text">Say</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-6 rounded-xl card-hover relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="absolute top-4 right-4 text-accent/20" size={24} />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
