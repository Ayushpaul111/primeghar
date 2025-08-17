import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: '2rem', backgroundColor: '#333', color: 'white', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>PrimeGhar</h3>
          <p style={{ margin: 0, opacity: 0.8 }}>Your trusted real estate partner</p>
        </div>
        <div style={{ borderTop: '1px solid #555', paddingTop: '1rem' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>
            © {currentYear} PrimeGhar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
