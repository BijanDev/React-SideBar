import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        MUI
      </div>
      <div className="navbar-search">
        <div className="icon">
          <span role="img" aria-label="profile">👤</span>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleMobileMenuToggle}>
        ☰
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <div className="dropdown-item">
            <span role="img" aria-label="mail">📬</span> Messages
          </div>
          <div className="dropdown-item">
            <span role="img" aria-label="notifications">🔔</span> Notifications
          </div>
          <div className="dropdown-item">
            <span role="img" aria-label="profile">👤</span> Profile
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
