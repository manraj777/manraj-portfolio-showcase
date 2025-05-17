
import React from 'react';
import { Calendar, Award } from 'lucide-react';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
};

type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Intern",
    company: "Accenture Virtual Experience Program",
    period: "June - July 2023",
    description: "Simulated real-world client project exposure."
  },
  {
    title: "Learner",
    company: "ISRO START Program",
    period: "July - Aug 2023",
    description: "Learned foundational concepts in space science and research."
  },
  {
    title: "Co-founder",
    company: "Build Community (S.D.C.)",
    period: "Oct 2023 - Present",
    description: "A growing dev community fostering learning and collaboration."
  }
];

const certifications: CertificationItem[] = [
  {
    title: "Google Cloud Computing",
    issuer: "NPTEL",
    year: "2023"
  },
  {
    title: "Python Programming",
    issuer: "HackerRank",
    year: "2023"
  },
  {
    title: "Coordinator - Smart India Hackathon",
    issuer: "SIH",
    year: "2024"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center mb-16">
          <span className="text-accent">Experience</span> & Education
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="section-subtitle flex items-center gap-2 mb-8">
              <Calendar className="text-accent" />
              <span>Work Experience</span>
            </h3>
            
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg relative border-l-2 border-accent">
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-accent font-medium">{item.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="section-subtitle flex items-center gap-2 mb-8">
              <Award className="text-accent" />
              <span>Certifications & Recognition</span>
            </h3>
            
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg relative border-l-2 border-accent">
                  <h4 className="font-semibold text-lg">{cert.title}</h4>
                  <p className="text-accent font-medium">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
