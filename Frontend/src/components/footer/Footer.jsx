import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/roshaanhaider', color: '#333' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/roshaanhaider', color: '#0077b5' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/roshaanhaider', color: '#1da1f2' },
    { name: 'Dribbble', icon: '🏀', url: 'https://dribbble.com/roshaanhaider', color: '#ea4c89' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👤' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '💼' },
    { name: 'Contact', href: '#contact', icon: '📞' }
  ];

  const services = [
    { name: 'Web Development', icon: '🌐', description: 'Modern web applications' },
    { name: 'UI/UX Design', icon: '🎨', description: 'Beautiful user interfaces' },
    { name: 'Mobile Apps', icon: '📱', description: 'Cross-platform solutions' },
    { name: 'Consulting', icon: '💡', description: 'Technical guidance' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      {/* Animated background */}
      <div className="footer-background">
        <div className="footer-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-main">
            <div className="footer-logo">
              <div className="logo-container">
                <span className="logo-icon">💼</span>
                <span className="logo-text">Professional Portfolio</span>
              </div>
            </div>
            <p className="footer-description">
              A dedicated frontend developer and CA student from Lahore, Pakistan, specializing in 
              creating beautiful and functional web experiences. Committed to delivering excellence 
              in every project.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                  style={{ '--social-color': social.color }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-tooltip">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">
              <span className="title-icon">🔗</span>
              Quick Links
            </h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="footer-link"
                  >
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">
              <span className="title-icon">⚡</span>
              Services
            </h4>
            <ul className="footer-services">
              {services.map((service, index) => (
                <li key={index} className="service-item">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-content">
                    <span className="service-name">{service.name}</span>
                    <span className="service-description">{service.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">
              <span className="title-icon">📞</span>
              Contact Info
            </h4>
            <div className="footer-contact">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-content">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">roshaan.haider@example.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-content">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+92 370-4065465</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-content">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Lahore, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider">
            <div className="divider-line"></div>
            <div className="divider-icon">🌟</div>
            <div className="divider-line"></div>
          </div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} <span className="highlight">Professional Portfolio</span>. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-back-to-top">
        <button
          onClick={() => scrollToSection('#home')}
          className="back-to-top-btn"
          aria-label="Back to top"
        >
          <span className="arrow">↑</span>
          <span className="tooltip">Back to top</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer; 