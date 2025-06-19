import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo-and-toggle">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Tacoma Family Eyecare Logo" className="logo" />
        </NavLink>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          ☰
        </button>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/team" onClick={() => setMenuOpen(false)}>Our Team</NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
        <NavLink to="/insurance" onClick={() => setMenuOpen(false)}>Insurance</NavLink>
        <NavLink to="/eyelib" onClick={() => setMenuOpen(false)}>Eye Library</NavLink>
        <NavLink to="/location" onClick={() => setMenuOpen(false)}>Location & Hours</NavLink>
        <NavLink to="/hipaa" onClick={() => setMenuOpen(false)}>HIPAA</NavLink>
      </nav>
    </header>
  );
}

export default Header;
