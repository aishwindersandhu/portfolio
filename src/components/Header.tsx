import '../styles/header.css';
import React, { useState,useContext } from 'react';
import { ToggleButton } from './ToggleButton';
import { ThemeContext } from './ThemeContext';

export const Header = () => {
  const {lightMode} = useContext(ThemeContext);
  const styles ={
    header: `header-div ${lightMode ? `header-div-light` : `header-div-dark`} flex flex-row`,
    headerNav: `header-nav ${lightMode ? `header-nav-light`:`header-nav-dark`}`
  }
  return (
    <header className={styles.header}>
      <h1 className="header-name w-1/4">AISHWINDER SANDHU</h1>
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-6">
          <a href="#about" className={styles.headerNav}>ABOUT</a>
          <a href="#portfolio" className={styles.headerNav}>PROJECT</a>
          <a href="#interests" className={styles.headerNav}>INTERESTS</a>
          <a href="#contact" className={styles.headerNav}>CONTACT</a>
        </nav>
        <ToggleButton></ToggleButton>
      </div>
    </header>
  )
}

