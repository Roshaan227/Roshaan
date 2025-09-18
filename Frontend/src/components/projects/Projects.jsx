import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop&crop=center',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
      description: 'A mobile fitness tracking app with workout plans, progress tracking, and social features for motivation.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center',
      description: 'Modern portfolio website design with smooth animations, responsive layout, and interactive elements.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop&crop=center',
      description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Restaurant Booking System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&crop=center',
      description: 'Online restaurant booking system with table management, menu display, and reservation tracking.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Social Media Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center',
      description: 'Comprehensive social media management dashboard with analytics, scheduling, and content management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Learning Management System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center',
      description: 'Educational platform with course management, student progress tracking, and interactive learning tools.',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 9,
      title: 'Food Delivery Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop&crop=center',
      description: 'Mobile app for food delivery with real-time tracking, payment integration, and restaurant management.',
      technologies: ['React Native', 'Firebase', 'Google Maps', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 10,
      title: 'Banking App Interface',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center',
      description: 'Modern banking app UI/UX design with secure authentication, transaction history, and financial planning tools.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 11,
      title: 'Real Estate Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&crop=center',
      description: 'Real estate listing platform with property search, virtual tours, and agent management system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 12,
      title: 'Healthcare Appointment System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop&crop=center',
      description: 'Healthcare appointment booking system with patient management, doctor scheduling, and telemedicine features.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Twilio'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Explore my latest work and creative solutions
          </p>
        </div>

        <div className="projects-filters">
          <div className="filter-buttons">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} className="img-fluid" />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.liveUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <span>Featured</span>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{filters.find(f => f.id === project.category)?.name}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta text-center">
          <p>Interested in working together?</p>
          <a href="#contact" className="btn btn-primary btn-lg">
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 