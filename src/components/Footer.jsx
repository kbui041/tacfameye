import React from 'react';
import '../index.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <p>Phone: (253) 671-6012</p>
        <p>Fax: (253) 671-6013</p>
        <p>tacomafamilyeyecare@gmail.com</p>
      </div>

      <div className="footer-chunk">
        <div className="footer-location">
          Located <span style={{ color: 'red' }}>INSIDE</span> Tacoma COSTCO: 2219 South 37th St, Tacoma, WA 98409
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Tacoma Family Eyecare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
