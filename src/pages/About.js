import React from 'react';
import Footer from '../components/Footer'; // 导入 Footer 组件
import Header from '../components/Header';
import backgroundImage from '../BG.png';

const About = () => {
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

  return (
    <div style={pageStyle}>
      <Header />
      <div style={contentStyle}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>About EcoPenguin Token</h1>
        <p>
          In a world where the effects of climate change are becoming increasingly apparent, a group of passionate environmentalists and blockchain enthusiasts came together with a shared vision: to harness the power of memes and cryptocurrency to drive positive change for our planet. Thus, the EcoPenguin Token (EPT) was born.
        </p>
        <p>
          Inspired by the adorable and resilient penguin, EPT is more than just a meme token. It's a symbol of our commitment to environmental conservation and a rallying cry for like-minded individuals to join forces and make a difference. The penguin, a beloved creature facing the dire consequences of melting ice caps and rising sea levels, serves as a poignant reminder of the urgent need for action.
        </p>
        <p>
          The EcoPenguin Token team believes that the blockchain technology behind cryptocurrencies can be a powerful tool for driving environmental initiatives. By creating a token that not only serves as a means of exchange but also directly contributes to conservation efforts, we aim to foster a global community of eco-conscious individuals who are passionate about protecting our planet.
        </p>
        <p>
          A portion of every EPT transaction is automatically allocated to a conservation fund, which supports various environmental projects and organizations worldwide. From protecting penguin habitats in Antarctica to funding renewable energy research, the EcoPenguin Token is dedicated to making a tangible impact.
        </p>
        <p>
          But EPT is not just about fundraising. We believe in the power of education and awareness. Through our engaging social media campaigns, informative content, and partnerships with environmental influencers, we strive to educate the public about the pressing environmental challenges we face and inspire them to take action in their own lives.
        </p>
        <p>
          As the EcoPenguin Token community grows, so does our collective impact. We envision a future where EPT is not just a successful cryptocurrency, but a catalyst for environmental change. By bringing together the worlds of memes, blockchain, and environmental activism, we are creating a unique and powerful movement that has the potential to reshape our planet's future.
        </p>
        <p>
          Join us on this exciting journey as we work towards a greener, more sustainable world. Together, we can protect the penguins, preserve our ecosystems, and create a brighter future for generations to come. EcoPenguin Token: where memes meet meaning, and every transaction makes a difference.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;