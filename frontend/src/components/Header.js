
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // State to store login status and user role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(''); // traveler or driver

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #e5e7eb'
    },
    logo: {
      height: '48px',
      width: 'auto',
      cursor: 'pointer'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    },
    navLink: {
      color: '#374151',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '1rem',
      padding: '8px 16px',
      borderRadius: '6px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    navLinkHover: {
      color: '#2563eb',
      backgroundColor: '#f3f4f6'
    },
    logoutButton: {
      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      fontWeight: '500',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    logoutButtonHover: {
      background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(239, 68, 68, 0.3)'
    }
  };

  // Function to check login status and user role
  const checkLoginStatus = () => {
    const token = localStorage.getItem('token'); // Check if token exists
    const role = localStorage.getItem('userRole'); // Get user role (traveler or driver)
    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role); // Set role from localStorage
    } else {
      setIsLoggedIn(false);
      setUserRole('');
    }
  };

  // Check for login status and user role on component mount
  useEffect(() => {
    checkLoginStatus();

    // Listen for the storage change event (manual trigger or tab updates)
    window.addEventListener('storage', checkLoginStatus);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    localStorage.removeItem('userRole'); // Clear role
    setIsLoggedIn(false);
    setUserRole(''); // Clear role
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header style={styles.navbar}>
      <div style={styles.logo} onClick={handleLogoClick}>
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          RideX
        </span>
      </div>
      
      <nav style={styles.navLinks}>
        <Link 
          to="/" 
          style={styles.navLink}
          onMouseOver={(e) => {
            e.target.style.color = styles.navLinkHover.color;
            e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
          }}
          onMouseOut={(e) => {
            e.target.style.color = styles.navLink.color;
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Home
        </Link>
        <Link 
          to="/services" 
          style={styles.navLink}
          onMouseOver={(e) => {
            e.target.style.color = styles.navLinkHover.color;
            e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
          }}
          onMouseOut={(e) => {
            e.target.style.color = styles.navLink.color;
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Services
        </Link>

        {/* Conditionally render based on login status and user role */}
        {isLoggedIn ? (
          <>
            {userRole === 'traveler' && (
              <>
                <Link 
                  to="/travelerdashboard" 
                  style={styles.navLink}
                  onMouseOver={(e) => {
                    e.target.style.color = styles.navLinkHover.color;
                    e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = styles.navLink.color;
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  Traveler Profile
                </Link>
                <Link 
                  to="/alltravelerlistenings" 
                  style={styles.navLink}
                  onMouseOver={(e) => {
                    e.target.style.color = styles.navLinkHover.color;
                    e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = styles.navLink.color;
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  Others Travel Listenings
                </Link>
                <Link 
                  to="/hirelistenings" 
                  style={styles.navLink}
                  onMouseOver={(e) => {
                    e.target.style.color = styles.navLinkHover.color;
                    e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = styles.navLink.color;
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  Find Hires
                </Link>
              </>
            )}
            {userRole === 'driver' && (
              <>
                <Link 
                  to="/driverdashboard" 
                  style={styles.navLink}
                  onMouseOver={(e) => {
                    e.target.style.color = styles.navLinkHover.color;
                    e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = styles.navLink.color;
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  Driver Profile
                </Link>
                <Link 
                  to="/alltravelerlistenings" 
                  style={styles.navLink}
                  onMouseOver={(e) => {
                    e.target.style.color = styles.navLinkHover.color;
                    e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = styles.navLink.color;
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  Find Travel Listenings
                </Link>
              </>
            )}
            <Link 
              to="/about" 
              style={styles.navLink}
              onMouseOver={(e) => {
                e.target.style.color = styles.navLinkHover.color;
                e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
              }}
              onMouseOut={(e) => {
                e.target.style.color = styles.navLink.color;
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              About
            </Link>
            <button 
              style={styles.logoutButton}
              onClick={handleLogout}
              onMouseOver={(e) => {
                e.target.style.background = styles.logoutButtonHover.background;
                e.target.style.transform = styles.logoutButtonHover.transform;
                e.target.style.boxShadow = styles.logoutButtonHover.boxShadow;
              }}
              onMouseOut={(e) => {
                e.target.style.background = styles.logoutButton.background;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              style={styles.navLink}
              onMouseOver={(e) => {
                e.target.style.color = styles.navLinkHover.color;
                e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
              }}
              onMouseOut={(e) => {
                e.target.style.color = styles.navLink.color;
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              style={styles.navLink}
              onMouseOver={(e) => {
                e.target.style.color = styles.navLinkHover.color;
                e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
              }}
              onMouseOut={(e) => {
                e.target.style.color = styles.navLink.color;
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Signup
            </Link>
            <Link 
              to="/about" 
              style={styles.navLink}
              onMouseOver={(e) => {
                e.target.style.color = styles.navLinkHover.color;
                e.target.style.backgroundColor = styles.navLinkHover.backgroundColor;
              }}
              onMouseOut={(e) => {
                e.target.style.color = styles.navLink.color;
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              About
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;