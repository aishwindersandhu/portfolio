import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import '../styles/footer.css';

export const Footer = () => {
  const { lightMode } = useContext(ThemeContext);
  const styles = {
    footerSection: `${lightMode ? `bg-[#CEC4A7]` : `bg-black`} h-full about-section w-full`,
    linkedinIcon: lightMode ? 'linkedinLight' : 'linkedinDark',
    gmailIcon: lightMode ? 'gmailLight' : 'gmailDark',
    githubIcon: lightMode ? 'githubLight' : 'githubDark'
  }
  return (
    <React.Fragment>
      <div className={styles.footerSection}>
        <div className="flex flex-row">
          <div className="w-2/5 footerNote">
            <div>Loosely designed in <a href="https://www.figma.com/design/jqBJpvykIWkLrIWbITWCmx/Aishwinder-Portfolio-Dark?node-id=0-1&p=f&t=YUlEc73l9fWzA1jA-0" target='_blank' className="footerTech">Figma </a>
              and developed in <a href="https://code.visualstudio.com/" className="footerTech" target="blank">Visual Studio Code</a> by yours truly. Built with <a href="https://react.dev/" className="footerTech" target="_blank">React.js</a>,
              <a href="https://www.typescriptlang.org/" className="footerTech" target="_blank">Typescript</a> and <a href="https://tailwindcss.com/" className="footerTech" target="_blank">Tailwind CSS</a>, deployed with <a href="https://www.netlify.com/" target="_blank" className="footerTech">Netlify</a>. </div>
          </div>
          <div className="w-3/5">
            <nav className="footerNav">
              <a href="https://www.linkedin.com/in/aishwinder-sandhu-3b5002102/"
                target="_blank"
                className="header-nav" style={{ margin: '1rem' }} >
                <img src={`/icons/${styles.linkedinIcon}.svg`} />
              </a>
              <a href="https://github.com/aishwindersandhu/"
                target="_blank" className="header-nav" style={{ margin: '1rem ' }}>
                <img src={`/icons/${styles.githubIcon}.svg`} />
              </a>
              <a href="mailto:aishwinder.sandhu@gmail.com" className="header-nav" style={{ marginTop: '10px' }}>
                <img src={`/icons/${styles.gmailIcon}.svg`} />
              </a>

              <a href="#contact" className="header-nav"></a>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}