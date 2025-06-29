import React from 'react';
import SEO from '@/components/SEO';
import MacMenuBar from '@/components/MacMenuBar';
import MacWindow from '@/components/MacWindow';
import MacDock from '@/components/MacDock';
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
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
        {/* macOS Desktop Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* macOS Menu Bar */}
        <MacMenuBar />
        
        {/* Main Content Window */}
        <div className="pt-8 pb-20 px-4">
          <MacWindow title="Manraj Gupta - Full Stack Developer Portfolio" className="max-w-6xl mx-auto">
            <div className="bg-background text-foreground">
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
          </MacWindow>
        </div>
        
        {/* macOS Dock */}
        <MacDock />
      </div>
    </>
  );
};

export default Index;
