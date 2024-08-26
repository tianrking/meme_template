import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import HowToBuy from './pages/HowToBuy';
import Tokenomics from './pages/Tokenomics';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;