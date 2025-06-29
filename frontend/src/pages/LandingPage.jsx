
import React from 'react';
import AboutPage from './AboutPage';
import Footer from '../components/Footer';
import Services from './Services';
import { useNavigate } from 'react-router-dom';
import { Car, Users, Shield, Star } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 50%, #faf5ff 100%)'
    },
    heroSection: {
      position: 'relative',
      overflow: 'hidden'
    },
    heroContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 24px'
    },
    heroGrid: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '48px'
    },
    contentSide: {
      flex: 1,
      textAlign: 'center',
      animation: 'fadeIn 0.8s ease-out'
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#111827',
      lineHeight: '1.2',
      marginBottom: '24px'
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
      marginBottom: '32px',
      lineHeight: '1.75',
      maxWidth: '600px',
      margin: '0 auto 32px'
    },
    featureIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '32px',
      marginBottom: '40px'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    registerText: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '16px'
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center'
    },
    primaryButton: {
      background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
      color: 'white',
      padding: '16px 32px',
      fontSize: '1.125rem',
      fontWeight: '600',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      minWidth: '160px'
    },
    secondaryButton: {
      border: '2px solid #7c3aed',
      color: '#7c3aed',
      background: 'transparent',
      padding: '16px 32px',
      fontSize: '1.125rem',
      fontWeight: '600',
      borderRadius: '12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      minWidth: '160px'
    },
    imageSide: {
      flex: 1,
      position: 'relative',
      animation: 'fadeIn 0.8s ease-out'
    },
    imageContainer: {
      position: 'relative'
    },
    mainImage: {
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transform: 'rotate(3deg)',
      transition: 'transform 0.5s ease'
    },
    image: {
      width: '100%',
      height: '384px',
      objectFit: 'cover'
    },
    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'
    },
    floatingCard: {
      position: 'absolute',
      bottom: '-24px',
      left: '-24px',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '24px',
      transform: 'rotate(-6deg)',
      transition: 'transform 0.3s ease'
    },
    cardContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    cardIcon: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(to right, #10b981, #3b82f6)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardText: {
      fontWeight: 'bold',
      color: '#111827'
    },
    cardSubtext: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    wave: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    },
    waveSvg: {
      width: '100%',
      height: '80px',
      color: 'white'
    },
    aboutSection: {
      background: 'white',
      position: 'relative',
      zIndex: 10
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.heroGrid}>
            
            {/* Content Side */}
            <div style={styles.contentSide}>
              <div>
                <h1 style={styles.title}>
                  Find your{' '}
                  <span style={styles.gradientText}>
                    Convenient
                  </span>
                  <br />
                  and{' '}
                  <span style={styles.gradientText}>
                    Comfortable
                  </span>{' '}
                  Travel
                </h1>
              </div>
              
              <p style={styles.subtitle}>
                Our user-friendly platform makes arranging cost-effective shared journeys
                <br />
                simple and secure. Join today and start collaborating on your travels!
              </p>

              {/* Features Icons */}
              <div style={styles.featureIcons}>
                <div style={styles.featureItem}>
                  <Shield size={20} color="#2563eb" />
                  <span style={{fontSize: '0.875rem', fontWeight: '500'}}>Secure</span>
                </div>
                <div style={styles.featureItem}>
                  <Users size={20} color="#059669" />
                  <span style={{fontSize: '0.875rem', fontWeight: '500'}}>Community</span>
                </div>
                <div style={styles.featureItem}>
                  <Star size={20} color="#7c3aed" />
                  <span style={{fontSize: '0.875rem', fontWeight: '500'}}>Trusted</span>
                </div>
              </div>

              <div>
                <p style={styles.registerText}>Register as:</p>
                
                <div style={styles.buttonContainer}>
                  <button 
                    style={styles.primaryButton}
                    onClick={() => navigate('/travelersignup')}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    <Users size={20} />
                    Traveler
                  </button>
                  
                  <button 
                    style={styles.secondaryButton}
                    onClick={() => navigate('/driversignup')}
                    onMouseOver={(e) => {
                      e.target.style.background = '#7c3aed';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#7c3aed';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <Car size={20} />
                    Driver
                  </button>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div style={styles.imageSide}>
              <div style={styles.imageContainer}>
                {/* Main Image */}
                <div 
                  style={styles.mainImage}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(3deg)'}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80" 
                    alt="Beautiful travel destination" 
                    style={styles.image}
                  />
                  <div style={styles.imageOverlay}></div>
                </div>
                
                {/* Floating Card */}
                <div 
                  style={styles.floatingCard}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(-6deg)'}
                >
                  <div style={styles.cardContent}>
                    <div style={styles.cardIcon}>
                      <Car size={24} color="white" />
                    </div>
                    <div>
                      <p style={styles.cardText}>Safe Travels</p>
                      <p style={styles.cardSubtext}>Verified Drivers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div style={styles.wave}>
          <svg style={styles.waveSvg} viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <AboutPage />
        <Services />
        <Footer />
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 1024px) {
          .hero-grid {
            flex-direction: row !important;
          }
          .content-side {
            text-align: left !important;
          }
          .button-container {
            flex-direction: row !important;
          }
          .title {
            font-size: 4rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;