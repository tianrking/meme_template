import React from 'react';
import backgroundImage from '../BG.png';
import mascotGif from '../a.png'; // 请确保您有这个 GIF 文件

const Home = () => {
  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white',
    padding: '20px',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '40px',
    maxWidth: '1000px',
    width: '100%',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  };

  const flexContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '40px',
  };

  const textContentStyle = {
    flex: 1,
  };

  const imageStyle = {
    maxWidth: '300px',
    borderRadius: '10px',
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>ABOUT US</h1>
        <div style={flexContainerStyle}>
          <div style={textContentStyle}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>THE STRONGEST MEME + AI IN HISTORY</h2>
            <p style={{ marginBottom: '10px' }}>TOTAL SUPPLY: 202.4 billion</p>
            <p style={{ marginBottom: '10px' }}>NETWORK: Solana Chain</p>
            <p style={{ marginBottom: '10px' }}>CONTRACT: 2miHpQbYLPvXxC2V234jrrtnJdejd5xW883a5ToNW3g</p>
          </div>
          <div>
            <img src={mascotGif} alt="POGAI Mascot" style={imageStyle} />
            <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '1.2rem' }}>Proof of Great AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;