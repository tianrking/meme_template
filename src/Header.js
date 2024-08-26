import React from 'react';

function Header() {
  return (
    <header>
      <h1>My New Website</h1>
	   <button className="header-button" onClick={() => alert('Homepage button clicked!')}>Homepage</button>

    </header>
  );
}

export default Header;
