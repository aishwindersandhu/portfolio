import React from 'react';

export const Header = () => {
  const styles = {
    header:{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      fontFamily:'Sans-serif',
      fontSize: '20px',
      padding:'1rem 5rem 1rem 5rem',
    },
    name:{
      fontSize:'25px',
    },
    nav:{
      fontSize:'15px',
      margin:'0 1rem',
      textDecoration:'none',
      color:'#b8ae88',
      fontWeight:'400'
    }
  }
  return (
    <header style={styles.header}>
      <h1 style={styles.name}>Aishwinder Sandhu</h1>
      <nav>
        <a href="#about" style={styles.nav}>About</a>
        <a href="#portfolio" style={styles.nav}>Portfolio</a>
        <a href="#interests" style={styles.nav}>Interests</a>
        <a href="#contact" style={styles.nav}>Contact</a>
      </nav>
    </header>
  )
}

