import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="text-center">
        <img
          src="/api/placeholder/120/120"
          alt="POGAI Logo"
          className="w-24 h-24 mx-auto mb-4 rounded-full"
        />
        <h1 className="text-4xl font-bold mb-2">POGAI</h1>
        <p className="text-xl mb-8">PROOF OF GREAT AI</p>
        <div className="space-x-4">
          <Link
            to="/about"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            ABOUT
          </Link>
          <button
            onClick={() => alert('Buy functionality not implemented')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;