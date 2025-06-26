
import React from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import GitHubStats from '@/components/GitHubStats';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <GitHubStats />
        <Achievements />
        <Projects />
        <Blog />
        <Experience />
        <Testimonials />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
