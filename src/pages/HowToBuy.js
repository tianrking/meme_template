import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import backgroundImage from '../BG.png';
import buyingGuideImage from '../a.png';

const HowToBuy = () => {
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
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    borderRadius: '15px',
    marginBottom: '20px',
  };

  return (
    <div style={pageStyle}>
      <Header />
      <div style={contentStyle}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>How to Buy EcoPenguin Token</h1>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Step 1: Create a Wallet</h2>
          <p>Download Phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to https://phantom.app.</p>
        </div>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Step 2: Get Some SOL</h2>
          <p>Have SOL in your wallet to switch to EPT. If you don't have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.</p>
        </div>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Step 3: Go to Raydium.io</h2>
          <p>Connect to Raydium. Go to the provided swap link in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the EPT token address into Raydium, select EPT, and confirm. When Phantom prompts you for a wallet signature, sign.</p>
        </div>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Step 4: Switch SOL for EPT</h2>
          <p>Switch SOL for EPT. We have ZERO taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</p>
        </div>
        <img src={buyingGuideImage} alt="Buying Guide" style={imageStyle} />
      </div>
      <Footer />
    </div>
  );
};

export default HowToBuy;