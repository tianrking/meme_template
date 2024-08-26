import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '1rem 0',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    margin: '0.25rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>HOME</Link>
      <Link to="/about" style={linkStyle}>ABOUT US</Link>
      <Link to="/how-to-buy" style={linkStyle}>HOW TO BUY</Link>
      <Link to="/tokenomics" style={linkStyle}>TOKENOMICS</Link>
      <Link to="/contact" style={linkStyle}>CONTACT</Link>
      <a href="#" style={linkStyle}>中文版</a>
    </nav>
  );
};

export default Header;