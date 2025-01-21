import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    // Highlight active section based on scroll position
    const sections = document.querySelectorAll('section');
    let currentSection = 'home';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuActive(false); // Close the menu after scrolling
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Club Logo" className="navbar-logo" />
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-links ${menuActive ? 'active' : ''}`}>
        {['Home', 'About', 'Events', 'Registration', 'Team', 'Achievements'].map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`} // Keeps href for accessibility
              className={`navbar-link ${activeSection === section.toLowerCase() ? 'active-link' : ''}`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                scrollToSection(section.toLowerCase());
              }}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
