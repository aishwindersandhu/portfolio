import '../styles/header.css';
import React, { useState } from 'react';
import { ToggleButton } from './ToggleButton';

export const Header = () => {
  
  return (
    <header className="header-div flex flex-row">
      <h1 className="header-name w-1/4">AISHWINDER SANDHU</h1>
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-6">
          <a href="#about" className="header-nav">ABOUT</a>
          <a href="#portfolio" className="header-nav">PROJECT</a>
          <a href="#interests" className="header-nav">INTERESTS</a>
          <a href="#contact" className="header-nav">CONTACT</a>
        </nav>

        {/* Toggle, Can extract this into a new component altogether and add props*/}
        <ToggleButton></ToggleButton>
      </div>
    </header>
  )
}

