import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'roshaanh14@gmail.com',
      link: 'mailto:roshaanh14@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+92 370-4065465',
      link: 'tel:+923704065465'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Roshaan Haider',
      link: 'www.linkedin.com/in/roshaan-haider-301174316'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/roshaanhaider' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/roshaanhaider' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/roshaanhaider' },
    { name: 'Dribbble', icon: '🏀', url: 'https://dribbble.com/roshaanhaider' }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <span>{info.icon}</span>
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`alert alert-${submitStatus === 'success' ? 'success' : 'danger'}`}>
                  {submitStatus === 'success' 
                    ? 'Thank you! Your message has been sent successfully.' 
                    : 'Oops! Something went wrong. Please try again.'
                  }
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 