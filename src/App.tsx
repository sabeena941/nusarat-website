import { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      color: '#2d3748',
    },
    header: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px',
      textAlign: 'center' as const,
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '15px',
      flexWrap: 'wrap' as const,
    },
    navButton: {
      background: 'rgba(255,255,255,0.2)',
      color: 'white',
      border: '1px solid rgba(255,255,255,0.3)',
      padding: '8px 20px',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    main: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '30px 20px',
    },
    card: {
      background: 'white',
      borderRadius: '15px',
      padding: '25px',
      marginBottom: '20px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold' as const,
      marginBottom: '10px',
      color: '#667eea',
    },
    heroTitle: {
      fontSize: '28px',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '16px',
      opacity: 0.9,
    },
    resourceLink: {
      display: 'block',
      padding: '12px',
      margin: '8px 0',
      background: '#f7fafc',
      borderRadius: '8px',
      color: '#667eea',
      textDecoration: 'none',
      border: '1px solid #e2e8f0',
    },
    footer: {
      textAlign: 'center' as const,
      padding: '20px',
      background: '#2d3748',
      color: 'white',
      marginTop: '40px',
    },
  };

  const renderHome = () => (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Welcome to Nusarat</h2>
        <p>A safe space for mental health support and wellbeing. You are not alone in your journey. We provide resources, guidance, and community support to help you through difficult times.</p>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Our Mission</h2>
        <p>To break the stigma around mental health and provide accessible support for everyone. We believe that mental health is just as important as physical health, and everyone deserves compassion and understanding.</p>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Quick Support</h2>
        <p>If you are in crisis, please reach out:</p>
        <p><strong>Samaritans:</strong> 116 123 (free, 24/7)</p>
        <p><strong>Crisis Text Line:</strong> Text HELLO to 85258</p>
        <p><strong>NHS Urgent:</strong> 111</p>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>About Nusarat</h2>
        <p>Nusarat means "help" and "victory" in Arabic. Our platform was created to provide mental health support and resources to those who need it most.</p>
        <p style={{marginTop: '15px'}}>We understand that seeking help can be difficult. That is why we have created a welcoming, non-judgmental space where you can find information, support, and hope.</p>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Our Values</h2>
        <p><strong>Compassion:</strong> We treat everyone with kindness and understanding.</p>
        <p><strong>Inclusivity:</strong> Mental health support for all backgrounds and communities.</p>
        <p><strong>Accessibility:</strong> Free resources available to everyone.</p>
        <p><strong>Hope:</strong> Recovery is possible and we are here to support that journey.</p>
      </div>
    </div>
  );

  const renderResources = () => (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Mental Health Resources</h2>
        <a href="https://www.mind.org.uk" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>Mind - Mental Health Charity</a>
        <a href="https://www.nhs.uk/mental-health" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>NHS Mental Health Services</a>
        <a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>Samaritans - 24/7 Support</a>
        <a href="https://www.rethink.org" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>Rethink Mental Illness</a>
        <a href="https://www.youngminds.org.uk" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>Young Minds - Youth Support</a>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Self-Help Tips</h2>
        <p>1. Talk to someone you trust about how you are feeling.</p>
        <p>2. Try to maintain a regular sleep schedule.</p>
        <p>3. Stay physically active, even a short walk helps.</p>
        <p>4. Practice mindfulness or deep breathing exercises.</p>
        <p>5. Limit alcohol and avoid recreational drugs.</p>
        <p>6. Set small, achievable goals each day.</p>
      </div>
    </div>
  );

  const renderContact = () => (
    <div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Contact Us</h2>
        <p>We would love to hear from you. Whether you need support, want to volunteer, or have suggestions, please reach out.</p>
        <p style={{marginTop: '15px'}}><strong>Email:</strong> support@nusarat.org</p>
        <p><strong>Phone:</strong> 0800 123 4567</p>
        <p><strong>Hours:</strong> Monday to Friday, 9am - 5pm</p>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Emergency Contacts</h2>
        <p>If you or someone you know is in immediate danger, please call <strong>999</strong>.</p>
        <p style={{marginTop: '10px'}}>For urgent mental health support:</p>
        <p><strong>Samaritans:</strong> 116 123</p>
        <p><strong>Crisis Text Line:</strong> Text SHOUT to 85258</p>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heroTitle}>Nusarat</h1>
        <p style={styles.subtitle}>Mental Health Support and Wellbeing</p>
        <nav style={styles.nav}>
          <button style={styles.navButton} onClick={() => setCurrentPage('home')}>Home</button>
          <button style={styles.navButton} onClick={() => setCurrentPage('about')}>About</button>
          <button style={styles.navButton} onClick={() => setCurrentPage('resources')}>Resources</button>
          <button style={styles.navButton} onClick={() => setCurrentPage('contact')}>Contact</button>
        </nav>
      </header>
      <main style={styles.main}>
        {currentPage === 'home' && renderHome()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'resources' && renderResources()}
        {currentPage === 'contact' && renderContact()}
      </main>
      <footer style={styles.footer}>
        <p>© 2025 Nusarat Mental Health Support. All rights reserved.</p>
        <p style={{marginTop: '5px', fontSize: '14px', opacity: 0.7}}>You are not alone. Help is always available.</p>
      </footer>
    </div>
  );
};

export default App;
