// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="logo">
        <img src="/img/logoportofolio.png" alt="Sabar Martua Tamba" />
      </div>
      <nav className="nav-list">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/personaldata">Personal Data</Link></li>
          <li><Link to="/skills">My Skill</Link></li>
          <li><Link to="/projects">My Project</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
