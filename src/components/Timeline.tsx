import React from 'react';
import { Calendar, Clock, Award, Flag } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      icon: Flag,
      date: 'Now Open',
      title: 'Competition Launch',
      description: 'Registration and submission are now open for all participants',
      status: 'current'
    },
    {
      icon: Calendar,
      date: '3rd July 2025',
      title: 'Submission Deadline',
      description: 'Register for the competition through our registration form',
      status: 'current'
    },
    {
      icon: Clock,
      date: '4th July 2025, 12:00PM to 1:30PM',
      title: 'Official Competition Start',
      description: 'Official Competition Date and Time',
      status: 'upcoming'
    },
    {
      icon: Award,
      date: '6th July 2025',
      title: 'Winners Announced',
      description: 'Results revealed and recognition awarded to winners',
      status: 'upcoming'
    }
  ];

  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Competition Timeline</h2>
          <p className="section-subtitle">
            Important dates and milestones for the IEEE SB BGIEM Logo Competition 2024
          </p>
        </div>

        <div className="timeline-container">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`timeline-item ${event.status}`}>
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <event.icon size={20} />
                </div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-date">{event.date}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-note">
          <p>
            <strong>Stay Updated:</strong> Follow our official channels for announcements 
            regarding submission deadlines and winner announcements. Register now to ensure 
            you don't miss any important updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;