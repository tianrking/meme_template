import React from 'react';
import backgroundImage from '../BG.png';
import mascotGif from '../a.png';
import ImageTextSection from '../components/ImageTextSection';
import sampleImage1 from '../a.png'; // 请确保你有这个图片
import sampleImage2 from '../a.png'; // 请确保你有这个图片
import nvidiaLogo from '../logo1a.png'; // 请确保你有这个图片
import copilotLogo from '../logo1a.png'; // 请确保你有这个图片
import openaiLogo from '../logo1c.png'; // 请确保你有这个图片
import buyingGuideImage from '../a.png';

import twitterLogo from '../X_logo.jpg'; // 请确保你有这个图片
import discordLogo from '../X_logo.jpg'; // 请确保你有这个图片

import Footer from '../components/Footer'; // 导入 Footer 组件
const Home = () => {
  const pageStyle = {
    minHeight: '100vh',
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
    margin: '0 auto',
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

  const partnerLogoStyle = {
    height: '50px',
    margin: '0 20px',
  };

  const tokenomicsStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '15px',
    padding: '40px',
    margin: '40px 0',
    textAlign: 'center',
  };

  const socialMediaStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    margin: '40px 0',
  };

  const socialMediaIconStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    padding: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>ABOUT US</h1>
        <div style={flexContainerStyle}>
            <div style={textContentStyle}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>THE CUTEST MEME + ECO TOKEN IN HISTORY</h2>
                <p style={{ marginBottom: '10px' }}>TOTAL SUPPLY: 100 billion</p>
                <p style={{ marginBottom: '10px' }}>NETWORK: Solana Chain</p>
                <p style={{ marginBottom: '10px' }}>CONTRACT: [EcoPenguin Token Contract Address]</p>
            </div>
            <div>
                <img src={mascotGif} alt="EcoPenguin Mascot" style={imageStyle} />
                <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '1.2rem' }}>EcoPenguin Token</p>
            </div>
        </div>

        <ImageTextSection
        imageSrc={sampleImage1}
        title="Our Vision"
        content="EcoPenguin Token aims to revolutionize the intersection of memes and environmental conservation, creating a unique ecosystem where creativity meets sustainability. We envision a future where memes are not just entertainment, but powerful tools for driving positive change."
        isImageLeft={true}
        />

        <ImageTextSection
        imageSrc={sampleImage2}
        title="Community Driven"
        content="At the heart of EcoPenguin Token is our vibrant community. We believe in the power of collective action and creativity. Our platform is designed to harness the energy of our community, allowing members to contribute, create, and benefit from the growth of the EPT ecosystem while making a real difference for our planet."
        isImageLeft={false}
        />

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Our Partners</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={nvidiaLogo} alt="NVIDIA Logo" style={partnerLogoStyle} />
                <img src={copilotLogo} alt="Copilot Logo" style={partnerLogoStyle} />
                <img src={openaiLogo} alt="OpenAI Logo" style={partnerLogoStyle} />
            </div>
        </div>


        <ImageTextSection
        imageSrc={buyingGuideImage}
        title="HOW TO BUY"
        content={
            <>
            <p style={{ marginBottom: '20px' }}>A Guide to Buying EcoPenguin Token (EPT)</p>
            <ol style={{ paddingLeft: '20px' }}>
                <li>CREATE A WALLET: Download Phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to https://phantom.app.</li>
                <li>GET SOME SOL: Have SOL in your wallet to switch to EPT. If you don't have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.</li>
                <li>GO TO RAYDIUM.IO: Connect to Raydium. Go to the provided swap link in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the EPT token address into Raydium, select EPT, and confirm. When Phantom prompts you for a wallet signature, sign.</li>
                <li>SWITCH SOL FOR EPT: Switch SOL for EPT. We have ZERO taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</li>
            </ol>
            </>
        }
        isImageLeft={true}
        />

        <div style={tokenomicsStyle}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>TOKENOMICS</h2>
            <p>50% --- Pre-sale</p>
            <p>50% --- Liquidity pool (LP)</p>
        </div>

        <div style={socialMediaStyle}>
          <img src={twitterLogo} alt="Twitter" style={socialMediaIconStyle} />
          <img src={discordLogo} alt="Discord" style={socialMediaIconStyle} />
        </div>

        

      </div>
      <Footer /> 
      
    </div>
    
  );
};

export default Home;