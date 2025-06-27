import React from 'react';
import { Target, Globe, Lightbulb, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Competition Objective',
      description: 'Design the official logo for IEEE Student Branch BGIEM that represents innovation, technology, and the spirit of engineering excellence.'
    },
    {
      icon: Globe,
      title: 'Open to All',
      description: 'This competition is open to all students and design enthusiasts who want to contribute to IEEE Student Branch BGIEM\'s visual identity.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'We seek designs that embody innovation, technological advancement, and the forward-thinking spirit of IEEE Student Branch BGIEM.'
    },
    {
      icon: Trophy,
      title: 'Recognition',
      description: 'Winners will receive official recognition, certificates, and the honor of having their design become the official IEEE SB BGIEM logo.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About the Competition</h2>
          <p className="section-subtitle">
            Join us in creating a visual identity that will represent IEEE Student Branch BGIEM's 
            commitment to advancing technology and fostering innovation
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              The IEEE Logo Competition 2024 is an exciting opportunity for creative minds to design 
              the official logo for IEEE Student Branch BGIEM. This logo will represent our student 
              branch across all platforms, communications, and events, making it a significant 
              contribution to our organization's visual identity.
            </p>
            
            <p className="about-description">
              IEEE Student Branch BGIEM is committed to fostering innovation, technological excellence, 
              and professional development among students. The winning design will become the face of 
              our organization and will be used in all official communications and materials.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;