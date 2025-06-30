import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#rules', label: 'Rules' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#prizes', label: 'Prizes' },
    { href: '#register', label: 'Register' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.querySelector(item.href) as HTMLElement);
      let currentSection = '';

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = `#${section.id}`;
          }
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSection = '#register';
      }

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">IEEE</span>
            <span className="logo-subtitle">Logo Competition</span>
          </div>

          <nav className="nav-desktop">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className={`nav-link ${activeLink === item.href ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="nav-mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link-mobile ${activeLink === item.href ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;