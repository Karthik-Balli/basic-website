import React from 'react';
import '../styles.css'

function Header() {
  return (
    <header className="header">
      <h1>Karthik Balli</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
