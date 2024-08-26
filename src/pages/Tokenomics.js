// import React from 'react';

// const Tokenomics = () => {
//   return (
//     <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
//       <h1>POGAI Tokenomics</h1>
//       <p>Details about POGAI token distribution and economics coming soon.</p>
//     </div>
//   );
// };

// export default Tokenomics;

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import backgroundImage from '../BG.png';
import penguinChart from '../a.png'; // Ensure you have this image
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Tokenomics = () => {
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

  const sectionStyle = {
    marginBottom: '40px',
  };

  const chartContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    marginBottom: '40px',
  };

  const data = [
    { name: 'Pre-sale', value: 50 },
    { name: 'Liquidity Pool', value: 20 },
    { name: 'Team', value: 10 },
    { name: 'Marketing', value: 10 },
    { name: 'Ecosystem Growth', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div style={pageStyle}>
      <Header />
      <div style={contentStyle}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>EcoPenguin Tokenomics</h1>
        
        <div style={sectionStyle}>
          <h2>Token Distribution</h2>
          <p>EcoPenguin Token (EPT) has a total supply of 100 billion tokens, carefully distributed to ensure long-term sustainability and growth:</p>
        </div>

        <div style={chartContainerStyle}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={sectionStyle}>
          <h2>Token Utility</h2>
          <p>EPT isn't just another meme token; it's a powerful tool for change:</p>
          <ul>
            <li><strong>Eco-Projects Funding:</strong> 2% of all transactions go directly to environmental conservation projects.</li>
            <li><strong>Community Governance:</strong> EPT holders can vote on key decisions and proposed eco-initiatives.</li>
            <li><strong>Exclusive Access:</strong> Hold EPT to gain access to premium features in our upcoming eco-themed NFT marketplace.</li>
            <li><strong>Staking Rewards:</strong> Earn additional EPT by participating in our eco-friendly staking program.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2>Deflationary Mechanism</h2>
          <p>To ensure the long-term value of EPT:</p>
          <ul>
            <li>1% of every transaction is automatically burned, reducing the total supply over time.</li>
            <li>Quarterly manual burns based on milestones achieved in our roadmap.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2>Vesting Schedule</h2>
          <p>To align long-term interests and prevent market disruptions:</p>
          <ul>
            <li><strong>Team Tokens:</strong> 12-month cliff, then linear vesting over 24 months.</li>
            <li><strong>Advisor Tokens:</strong> 6-month cliff, then linear vesting over 18 months.</li>
            <li><strong>Ecosystem Growth Fund:</strong> Locked for 6 months, then released quarterly based on community-approved proposals.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2>The EcoPenguin Promise</h2>
          <p>Our tokenomics are designed with one goal in mind: to create a sustainable, engaging, and impactful ecosystem. By holding EPT, you're not just investing in a token; you're joining a movement to make the world a greener place, one adorable penguin at a time.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tokenomics;