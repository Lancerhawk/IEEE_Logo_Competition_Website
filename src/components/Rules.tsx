import React from 'react';
import { CheckCircle, FileText, Users, Copyright } from 'lucide-react';

const Rules: React.FC = () => {
  const eligibilityRules = [
    'Open to professional designers, students, and design enthusiasts worldwide',
    'Teams and Individuals, Both entries are allowed',
    'Participants must be 18 years or older at the time of submission',
    'IEEE members and non-members are equally welcome to participate'
  ];

  const submissionGuidelines = [
    'Logo must be original and not infringe on existing copyrights',
    'Submit in vector format (SVG, AI, or EPS) with high-resolution PNG',
    'Include variations: full color, monochrome, and simplified versions',
    'Provide brief design rationale (maximum 200 words)',
    'Multiple submissions allowed (maximum 3 per participant)'
  ];

  const designRequirements = [
    'Logo should be scalable and work across all media formats',
    'Must incorporate IEEE brand values: innovation, excellence, integrity',
    'Should be timeless yet contemporary in design approach',
    'Must be legible at various sizes from business cards to billboards',
    'Consider international appeal and cultural sensitivity'
  ];

  const legalTerms = [
    'All submissions become property of IEEE upon entry',
    'IEEE reserves the right to modify winning design if necessary',
    'Participants retain attribution rights for portfolio use',
    'Winners must provide source files and design documentation',
    'IEEE holds exclusive rights to use and commercialize the winning design'
  ];

  return (
    <section id="rules" className="rules">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Competition Rules & Guidelines</h2>
          <p className="section-subtitle">
            Please review all requirements carefully before submitting your design
          </p>
        </div>

        <div className="rules-grid">
          <div className="rule-section">
            <div className="rule-header">
              <Users className="rule-icon" />
              <h3 className="rule-title">Eligibility</h3>
            </div>
            <ul className="rule-list">
              {eligibilityRules.map((rule, index) => (
                <li key={index} className="rule-item">
                  <CheckCircle className="check-icon" size={16} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rule-section">
            <div className="rule-header">
              <FileText className="rule-icon" />
              <h3 className="rule-title">Submission Guidelines</h3>
            </div>
            <ul className="rule-list">
              {submissionGuidelines.map((rule, index) => (
                <li key={index} className="rule-item">
                  <CheckCircle className="check-icon" size={16} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rule-section">
            <div className="rule-header">
              <CheckCircle className="rule-icon" />
              <h3 className="rule-title">Design Requirements</h3>
            </div>
            <ul className="rule-list">
              {designRequirements.map((rule, index) => (
                <li key={index} className="rule-item">
                  <CheckCircle className="check-icon" size={16} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rule-section">
            <div className="rule-header">
              <Copyright className="rule-icon" />
              <h3 className="rule-title">Legal Terms</h3>
            </div>
            <ul className="rule-list">
              {legalTerms.map((rule, index) => (
                <li key={index} className="rule-item">
                  <CheckCircle className="check-icon" size={16} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="important-note">
          <h4>Important Note</h4>
          <p>
            By submitting your design, you acknowledge that you have read, understood, 
            and agree to all competition rules and terms. Failure to comply with these 
            guidelines may result in disqualification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rules;