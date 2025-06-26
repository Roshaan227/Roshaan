import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    'Frontend Developer',
    'UI/UX Designer',
    'React Specialist',
    'Creative Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-title">
              <span className="hero-name">Roshaan Haider</span>
            </h1>
            
            <div className="hero-subtitle">
              <span>I'm a </span>
              <span className={`typing-text ${isTyping ? 'typing' : ''}`}>
                {texts[currentText]}
              </span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-friendly web experiences. 
              I love turning ideas into reality through code and design. Currently pursuing CA in Pakistan 
              while building amazing digital solutions.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => scrollToSection('#projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </button>
            </div>

            <div className="hero-journey-links">
              <h4>Explore My Journey</h4>
              <div className="journey-buttons">
                <a href="#web-developer" className="btn btn-secondary">
                  🚀 Web Developer
                </a>
                <a href="#ca-journey" className="btn btn-secondary">
                  📊 CA Journey
                </a>
              </div>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span>👨‍💻</span>
              </div>
              <div className="avatar-glow"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 