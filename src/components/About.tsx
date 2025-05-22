
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="section-title text-center">About <span className="text-accent">Me</span></h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6">
              Hi, I'm Manraj — a B.Tech IT student at Samrat Ashok Technological Institute, passionate about full-stack development, 
              algorithmic trading, and community-driven learning. I co-founded the Student Development Community (S.D.C.), 
              contribute to open-source disaster management tools, and love building impactful projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold mb-2 text-accent">Education</h3>
                <p>B.Tech in Information Technology</p>
                <p className="text-sm text-muted-foreground">SATI, Vidisha (2022-2026)</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-accent">CGPA</h3>
                <p>7.5/10</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: June 2026</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-accent">Key Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {['OOP', 'DSA', 'AI', 'Embedded Systems', 'DBMS', 'Web Technology', 'Linux Scripting'].map((course) => (
                  <span key={course} className="bg-muted px-3 py-1 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="vertical-timeline">
            <div className="timeline-item">
              <h4 className="font-medium">Started B.Tech in IT</h4>
              <p className="text-sm text-muted-foreground">Aug 2022</p>
              <p className="mt-1">Began my journey in Information Technology at SATI, Vidisha</p>
            </div>
            
            <div className="timeline-item">
              <h4 className="font-medium">Co-founded Student Development Community</h4>
              <p className="text-sm text-muted-foreground">Oct 2023</p>
              <p className="mt-1">Started a 300+ member community to foster learning and collaboration</p>
            </div>
            
            <div className="timeline-item">
              <h4 className="font-medium">Joined PralayMitra as Contributor</h4>
              <p className="text-sm text-muted-foreground">Dec 2024</p>
              <p className="mt-1">Worked on disaster alert APIs and chatbot integration</p>
            </div>
            
            <div className="timeline-item">
              <h4 className="font-medium">Head of Marketing at TripBozo</h4>
              <p className="text-sm text-muted-foreground">Apr 2025</p>
              <p className="mt-1">Increased platform visibility through SEO and social media</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
