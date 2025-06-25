
import React from 'react';

const AboutPage = () => {
  const styles = {
    container: {
      padding: '80px 0',
      background: 'white'
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
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '16px'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      maxWidth: '768px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px'
    },
    card: {
      textAlign: 'center',
      padding: '24px',
      borderRadius: '12px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    safeCard: {
      background: '#eff6ff'
    },
    costCard: {
      background: '#f0fdf4'
    },
    ecoCard: {
      background: '#faf5ff'
    },
    iconContainer: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      fontSize: '2rem'
    },
    safeIcon: {
      background: '#dbeafe'
    },
    costIcon: {
      background: '#dcfce7'
    },
    ecoIcon: {
      background: '#f3e8ff'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '8px'
    },
    cardText: {
      color: '#6b7280'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.header}>
          <h2 style={styles.title}>About Our Platform</h2>
          <p style={styles.subtitle}>
            We connect travelers and drivers to create convenient, cost-effective, and comfortable shared journeys.
          </p>
        </div>

        <div style={styles.grid}>
          <div 
            style={{...styles.card, ...styles.safeCard}}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{...styles.iconContainer, ...styles.safeIcon}}>
              <span>🚗</span>
            </div>
            <h3 style={styles.cardTitle}>Safe Rides</h3>
            <p style={styles.cardText}>Verified drivers and secure payment methods ensure your safety throughout the journey.</p>
          </div>

          <div 
            style={{...styles.card, ...styles.costCard}}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{...styles.iconContainer, ...styles.costIcon}}>
              <span>💰</span>
            </div>
            <h3 style={styles.cardTitle}>Cost Effective</h3>
            <p style={styles.cardText}>Share costs with fellow travelers and save money on your journeys.</p>
          </div>

          <div 
            style={{...styles.card, ...styles.ecoCard}}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{...styles.iconContainer, ...styles.ecoIcon}}>
              <span>🌍</span>
            </div>
            <h3 style={styles.cardTitle}>Eco Friendly</h3>
            <p style={styles.cardText}>Reduce carbon footprint by sharing rides and contributing to a greener planet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;