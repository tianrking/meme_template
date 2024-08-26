import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '20px',
    textAlign: 'center',
    fontSize: '0.9rem',
  };

  return (
    <footer style={footerStyle}>
      <p>Copyright © 2024 Pogai</p>
    </footer>
  );
};

export default Footer;