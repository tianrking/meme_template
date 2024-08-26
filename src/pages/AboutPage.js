import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">ABOUT US</h1>
      <div className="flex justify-between w-full">
        <div className="w-1/2 pr-8">
          <h2 className="text-2xl font-bold mb-4">THE STRONGEST MEME + AI IN HISTORY</h2>
          <p className="mb-2">TOTAL SUPPLY: 202.4 billion</p>
          <p className="mb-2">NETWORK: Solana Chain</p>
          <p className="mb-2">CONTRACT: 2miHpQbYLPvXxC2V234jrrtnJdejd5xW883a5ToNW3g</p>
        </div>
        <div className="w-1/2">
          <div className="w-full h-64 bg-gray-300"></div>
          <p className="text-center text-2xl font-bold mt-4">Proof of Great AI</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;