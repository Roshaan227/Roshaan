import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: '⚛️', level: 90 },
        { name: 'JavaScript', icon: '🟨', level: 85 },
        { name: 'TypeScript', icon: '🔷', level: 80 },
        { name: 'HTML5', icon: '🌐', level: 95 },
        { name: 'CSS3/SCSS', icon: '🎨', level: 90 },
        { name: 'Vue.js', icon: '💚', level: 75 }
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', icon: '🟢', level: 75 },
        { name: 'Express.js', icon: '🚂', level: 70 },
        { name: 'MongoDB', icon: '🍃', level: 65 },
        { name: 'PostgreSQL', icon: '🐘', level: 60 },
        { name: 'Git', icon: '📝', level: 85 },
        { name: 'Docker', icon: '🐳', level: 60 }
      ]
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', icon: '🎯', level: 80 },
        { name: 'Adobe XD', icon: '🎨', level: 75 },
        { name: 'Photoshop', icon: '🖼️', level: 70 },
        { name: 'Illustrator', icon: '✏️', level: 65 },
        { name: 'Sketch', icon: '📱', level: 60 },
        { name: 'InVision', icon: '👁️', level: 70 }
      ]
    }
  ];

  const technologies = [
    { name: 'React Native', icon: '📱' },
    { name: 'Next.js', icon: '⚡' },
    { name: 'Redux', icon: '🔄' },
    { name: 'GraphQL', icon: '🔷' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Netlify', icon: '🌐' }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            My technical skills and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-categories">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-card">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
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
            ))}
          </div>

          <div className="technologies-section">
            <h3>Technologies & Tools</h3>
            <div className="technologies-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-card">
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-cta">
            <div className="cta-content">
              <h3>Ready to Work Together?</h3>
              <p style={{ color: 'white' }}>
  I'm always excited to take on new challenges and collaborate on 
  interesting projects. Let's discuss how we can work together!
</p>

              <a href="#contact" className="btn btn-primary btn-lg">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 