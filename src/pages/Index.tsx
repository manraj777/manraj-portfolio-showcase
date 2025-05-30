
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Blog />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
