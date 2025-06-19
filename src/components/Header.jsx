import React, { useState } from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo-and-toggle">
        <a href = "./pages/home"><img src="/logo.png" alt="Tacoma Family Eyecare Logo" className="logo" /></a>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/team">Our Team</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/insurance">Insurance</NavLink>
        <NavLink to="/eyelib">Eye Library</NavLink>
        <NavLink to="/location">Location & Hours</NavLink>
        <NavLink to="/hipaa">HIPAA</NavLink>
      </nav>
    </header>
  );
}

export default Header;
