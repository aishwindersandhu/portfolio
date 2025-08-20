import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const Footer = () => {
  const {lightMode} = useContext(ThemeContext);
  const styles = {
    footerSection: `${lightMode ? `bg-[#B8AE88]`:`bg-black`} h-full about-section pt-2 p-5 w-full`
  }
  return (
    <React.Fragment>
      <div className={styles.footerSection}>
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://www.linkedin.com/in/aishwinder-sandhu-3b5002102/"
            target="_blank"
            className="header-nav" style={{ margin: '1rem 2rem 1rem 2rem' }} >LINKEDIN</a>
          <a href="mailto:aishwinder.sandhu@gmail.com" className="header-nav" style={{ margin: '1rem 2rem 1rem 2rem' }}>GMAIL</a>
          <a href="https://github.com/aishwindersandhu/"
            target="_blank" className="header-nav" style={{ margin: '1rem 2rem 1rem 2rem' }}>GITHUB</a>
          <a href="#contact" className="header-nav"></a>
        </nav>
      </div>
    </React.Fragment>
  )
}