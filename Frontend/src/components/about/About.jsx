import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'CSS/SCSS', level: 90 },
    { name: 'HTML', level: 95 },
    { name: 'Git', level: 85 },
    { name: 'Figma', level: 70 }
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      description: 'Leading frontend development for web applications using React and modern JavaScript.'
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Developed responsive websites and web applications for various clients.'
    },
    {
      year: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Startup',
      description: 'Started my journey in web development, learning and growing with the team.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better and understand my journey in web development and CA
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Who I Am</h3>
              <p>
                I'm Roshaan Haider, a passionate frontend developer with over 3 years of experience creating 
                beautiful and functional web experiences. I love turning complex problems into 
                simple, beautiful, and intuitive designs.
              </p>
              <p>
                Currently, I'm pursuing my CA (Chartered Accountancy) qualification in Pakistan while 
                continuing to build amazing digital solutions. This unique combination allows me to bring 
                both technical expertise and business acumen to every project.
              </p>
              <p>
                When I'm not coding or studying, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Roshaan Haider</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">roshaan.haider@example.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">+92 370-4065465</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Lahore, Pakistan</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Education:</span>
                <span className="detail-value">CA Student (Pakistan)</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Availability:</span>
                <span className="detail-value">Open to opportunities</span>
              </div>
            </div>

            <div className="about-actions">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#" className="btn btn-outline">
                Download CV
              </a>
            </div>
          </div>

          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h3>My Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-year">{exp.year}</span>
                    <h4 className="timeline-title">{exp.title}</h4>
                    <span className="timeline-company">{exp.company}</span>
                  </div>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 