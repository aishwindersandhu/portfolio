import React from 'react';
import '../styles/header.css';

export const Header = () => {
  return (
    <header className="header-div flex flex-row">
      <h1 className="header-name">AISHWINDER SANDHU</h1>
      <nav>
        <a href="#about" className="header-nav">ABOUT</a>
        <a href="#portfolio" className="header-nav">PROJECT</a>
        <a href="#interests" className="header-nav">INTERESTS</a>
        <a href="#contact"  className="header-nav">CONTACT</a>
      </nav>
    </header>
  )
}

