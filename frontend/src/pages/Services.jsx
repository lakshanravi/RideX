
import React from 'react';

const Services = () => {
  const styles = {
    container: {
      padding: '80px 0',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 50%, #faf5ff 100%)',
      minHeight: '100vh'
    },
    innerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '16px',
      lineHeight: '1.2'
    },
    gradientText: {
      background: 'linear-gradient(to right, #2563eb, #7c3aed)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      maxWidth: '768px',
      margin: '0 auto',
      lineHeight: '1.75'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px',
      marginTop: '48px'
    },
    serviceCard: {
      background: 'white',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid #e5e7eb'
    },
    serviceIcon: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      fontSize: '2rem'
    },
    findIcon: {
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
    },
    trackIcon: {
      background: 'linear-gradient(135deg, #10b981, #059669)'
    },
    paymentIcon: {
      background: 'linear-gradient(135deg, #f59e0b, #d97706)'
    },
    supportIcon: {
      background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
    },
    ratingIcon: {
      background: 'linear-gradient(135deg, #ef4444, #dc2626)'
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '12px'
    },
    serviceDescription: {
      color: '#6b7280',
      lineHeight: '1.6',
      fontSize: '1rem'
    }
  };

  const services = [
    {
      icon: '🔍',
      title: 'Find Nearby Drivers',
      description: 'Easily locate and connect with verified drivers in your area using our smart matching system.',
      iconStyle: styles.findIcon
    },
    {
      icon: '📍',
      title: 'Real-time Tracking',
      description: 'Stay updated with live tracking and instant notifications throughout your entire journey.',
      iconStyle: styles.trackIcon
    },
    {
      icon: '💳',
      title: 'Secure Payments',
      description: 'Multiple secure payment options including digital wallets, cards, and contactless payments.',
      iconStyle: styles.paymentIcon
    },
    {
      icon: '🎧',
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance from our dedicated support team whenever you need help.',
      iconStyle: styles.supportIcon
    },
    {
      icon: '⭐',
      title: 'Rating System',
      description: 'Transparent rating system for both drivers and passengers to ensure quality experiences.',
      iconStyle: styles.ratingIcon
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.header}>
          <h1 style={styles.title}>
            Our <span style={styles.gradientText}>Services</span>
          </h1>
          <p style={styles.subtitle}>
            We offer a comprehensive range of services to make your ride-sharing experience 
            smooth, safe, and reliable for everyone in our community.
          </p>
        </div>

        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index}
              style={styles.serviceCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{...styles.serviceIcon, ...service.iconStyle}}>
                <span style={{color: 'white'}}>{service.icon}</span>
              </div>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;