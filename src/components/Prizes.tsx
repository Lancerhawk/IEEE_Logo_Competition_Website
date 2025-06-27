import React from 'react';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const Prizes: React.FC = () => {
  const prizes = [
    {
      icon: Trophy,
      rank: 'Winner',
      title: 'Grand Prize Winner',
      benefits: [
        'Official Recognition',
        'Certificate of Achievement',
        'IEEE Swag',
        'Logo becomes official IEEE SB BGIEM logo',
        'Featured in all IEEE SB BGIEM communications'
      ],
      highlight: true
    },
    {
      icon: Medal,
      rank: 'Runner-up',
      title: 'Runner-up',
      benefits: [
        'Certificate of Appreciation',
        'Recognition in IEEE SB BGIEM platforms',
        'Portfolio showcase opportunity'
      ],
      highlight: false
    },
    {
      icon: Award,
      rank: 'All Participants',
      title: 'Participation Recognition',
      benefits: [
        'E-Certificate of Participation',
        'Recognition for contribution',
        'Portfolio addition opportunity'
      ],
      highlight: false
    }
  ];

  return (
    <section id="prizes" className="prizes">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Prizes & Recognition</h2>
          <p className="section-subtitle">
            Celebrate excellence with official recognition and valuable rewards
          </p>
        </div>

        <div className="prizes-main">
          {prizes.map((prize, index) => (
            <div key={index} className={`prize-card ${prize.highlight ? 'featured' : ''}`}>
              {prize.highlight && <div className="featured-badge">Winner</div>}
              
              <div className="prize-icon">
                <prize.icon size={40} />
              </div>
              
              <div className="prize-rank">{prize.rank}</div>
              <div className="prize-title">{prize.title}</div>
              
              <ul className="prize-benefits">
                {prize.benefits.map((benefit, idx) => (
                  <li key={idx} className="prize-benefit">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="recognition-note">
          <h3>Why Participate?</h3>
          <p>
            This is your chance to create a lasting impact on IEEE Student Branch BGIEM. 
            The winning logo will represent our organization for years to come, making this 
            an invaluable addition to your design portfolio and a significant contribution 
            to the IEEE community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;