import React from 'react';
import { Award, Calendar, Users } from 'lucide-react';

const HeroAnimatedBg = () => (
  <div className="hero-animated-bg">
    <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="hero-bg-svg">
      <circle className="hero-bg-circle hero-bg-circle1" cx="200" cy="200" r="120" />
      <circle className="hero-bg-circle hero-bg-circle2" cx="1240" cy="400" r="90" />
      <circle className="hero-bg-circle hero-bg-circle3" cx="800" cy="100" r="60" />
    </svg>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <HeroAnimatedBg />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              IEEE <br />Logo Making Competition <br />
              <span className="hero-year">2025</span>
            </h1>
            <p className="hero-subtitle">
              Design the Official Logo for IEEE Student Branch BGIEM - 
              Showcase Your Creativity and Become Part of IEEE Legacy
            </p>
            <div className="hero-stats">
              <div className="stat">
                <Award className="stat-icon" />
                <span className="stat-text">Official Recognition</span>
              </div>
              <div className="stat">
                <Users className="stat-icon" />
                <span className="stat-text">Open to All</span>
              </div>
              <div className="stat">
                <Calendar className="stat-icon" />
                <span className="stat-text">Register Now</span>
              </div>
            </div>
            <div className="hero-actions">
              <a 
                href="https://forms.gle/EmkxniACUR3qQpQh6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Register Now
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;