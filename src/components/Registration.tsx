import React from 'react';
import { ExternalLink, Award, Users, Calendar } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <section id="register" className="registration">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Join the Competition</h2>
          <p className="section-subtitle">
            Ready to design the official logo for IEEE Student Branch BGIEM? Register now and showcase your creativity!
          </p>
        </div>

        <div className="registration-content">
          <div className="registration-info">
            <h3>Why Participate?</h3>
            <ul className="registration-benefits">
              <li>Design the official IEEE SB BGIEM logo</li>
              <li>Gain official recognition from IEEE</li>
              <li>Receive certificates and IEEE swag</li>
              <li>Add prestigious project to your portfolio</li>
              <li>Contribute to IEEE Student Branch legacy</li>
              <li>Network with fellow designers and engineers</li>
            </ul>
            
            <div className="competition-stats">
              <div className="stat-item">
                <Award className="stat-icon" />
                <div className="stat-content">
                  <h4>Official Recognition</h4>
                  <p>Winner gets official IEEE recognition</p>
                </div>
              </div>
              <div className="stat-item">
                <Users className="stat-icon" />
                <div className="stat-content">
                  <h4>Open to All</h4>
                  <p>Students and design enthusiasts welcome</p>
                </div>
              </div>
              <div className="stat-item">
                <Calendar className="stat-icon" />
                <div className="stat-content">
                  <h4>Submit Anytime</h4>
                  <p>Registration and submission open now</p>
                </div>
              </div>
            </div>
          </div>

          <div className="registration-cta">
            <div className="cta-card">
              <h3>Ready to Get Started?</h3>
              <p>
                Click the button below to access our registration form and submit your entry. 
                The form will guide you through the submission process and provide all necessary 
                details about design requirements.
              </p>
              
              <a 
                href="https://forms.gle/EmkxniACUR3qQpQh6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="register-button"
              >
                <ExternalLink size={20} />
                Register & Submit Entry
              </a>
              
              <div className="form-note">
                <p>
                  <strong>Note:</strong> The registration form includes submission guidelines, 
                  design requirements, and all necessary information to participate in the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;