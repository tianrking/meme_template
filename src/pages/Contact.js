import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import backgroundImage from '../BG.png';
import twitterLogo from '../X_logo.jpg';
import discordLogo from '../X_logo.jpg';
import emailIcon from '../mail.avif';

const Contact = () => {
  const pageStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '40px',
    maxWidth: '1000px',
    margin: '0 auto',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    flex: 1,
  };

  const sectionStyle = {
    backgroundColor: 'rgba(255, 0, 255, 0.1)',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const iconStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    padding: '10px',
  };

  return (
    <div style={pageStyle}>
      <Header />
      <div style={contentStyle}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>Contact Us</h1>
        <div style={sectionStyle}>
          <img src={twitterLogo} alt="Twitter" style={iconStyle} />
          <p>Follow us on Twitter: <a href="your-twitter-link" target="_blank" rel="noopener noreferrer">@EcoPenguinToken</a></p>
        </div>
        <div style={sectionStyle}>
          <img src={discordLogo} alt="Discord" style={iconStyle} />
          <p>Join our Discord community: <a href="your-discord-link" target="_blank" rel="noopener noreferrer">EcoPenguin Token Discord</a></p>
        </div>
        <div style={sectionStyle}>
          <img src={emailIcon} alt="Email" style={iconStyle} />
          <p>Email us at: <a href="mailto:info@ecopenguintoken.com">info@ecopenguintoken.com</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;