
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="section-title text-center">About <span className="text-accent">Me</span></h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6">
              I'm a B.Tech student in IT with a strong interest in web development, embedded systems, and AI. 
              I've interned with Accenture, participated in ISRO's START program, and co-founded Build Community 
              to help developers grow together.
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
                <p className="text-sm text-muted-foreground">Current Academic Standing</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-accent">Key Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {['DSA', 'AI', 'Embedded Systems', 'DBMS', 'Web Technology', 'Linux & Terminal Scripting'].map((course) => (
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
              <h4 className="font-medium">Accenture Virtual Experience</h4>
              <p className="text-sm text-muted-foreground">June - July 2023</p>
              <p className="mt-1">Learned industry practices through simulated client projects</p>
            </div>
            
            <div className="timeline-item">
              <h4 className="font-medium">ISRO START Program</h4>
              <p className="text-sm text-muted-foreground">July - Aug 2023</p>
              <p className="mt-1">Explored space science and research fundamentals</p>
            </div>
            
            <div className="timeline-item">
              <h4 className="font-medium">Co-founded Build Community</h4>
              <p className="text-sm text-muted-foreground">Oct 2023 - Present</p>
              <p className="mt-1">Creating a platform for developers to learn and grow together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
