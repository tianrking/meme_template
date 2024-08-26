import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => alert('About button clicked!')}>About</button>
      {/* You can add more content here */}
    </div>
  );
}

export default HomePage;

