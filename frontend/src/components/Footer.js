
import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      background: '#111827',
      color: 'white',
      padding: '48px 0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px'
    },
    brandSection: {
      gridColumn: 'span 2'
    },
    brandTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    brandText: {
      color: '#9ca3af',
      marginBottom: '16px',
      maxWidth: '400px'
    },
    socialLinks: {
      display: 'flex',
      gap: '16px'
    },
    socialLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      fontSize: '1.25rem',
      transition: 'color 0.3s ease'
    },
    sectionTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '16px'
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    linkItem: {
      marginBottom: '8px'
    },
    link: {
      color: '#9ca3af',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    divider: {
      borderTop: '1px solid #374151',
      marginTop: '32px',
      paddingTop: '32px',
      textAlign: 'center'
    },
    copyright: {
      color: '#9ca3af'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.brandSection}>
            <h3 style={styles.brandTitle}> RideX</h3>
            <p style={styles.brandText}>
              Connecting travelers and drivers for convenient, cost-effective, and comfortable shared journeys.
            </p>
            <div style={styles.socialLinks}>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
              >
                <span>📘</span>
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
              >
                <span>📱</span>
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
              >
                <span>📧</span>
              </a>
            </div>
          </div>

          <div>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                >
                  Home
                </a>
              </li>
              <li style={styles.linkItem}>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                >
                  About
                </a>
              </li>
              <li style={styles.linkItem}>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                >
                  Services
                </a>
              </li>
              <li style={styles.linkItem}>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={styles.sectionTitle}>Support</h4>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                >
                  Help Center
                </a>
              </li>
              <li style={styles.linkItem}>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                >
                  Safety
                </a>
              </li>
              <li style={styles.linkItem}>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                >
                  Terms
                </a>
              </li>
              <li style={styles.linkItem}>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.divider}>
          <p style={styles.copyright}>
            © 2025  RideX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;