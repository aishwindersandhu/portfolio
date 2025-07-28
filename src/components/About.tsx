import React from 'react';
import profileImage from '../assets/images/portfolioImage.jpeg';
import '../styles/about.css';

export const About = () => {
  {/* Intro Section */ }
  const styles = {
    header2: {
      fontSize: '50px',
      marginBottom: '0.5rem'
    },
    header3: {
      fontSize: '35px',
      marginBottom: '0.5rem'
    },
    aboutSection: { fontSize: '30px', lineHeight: '1.4' },
    buttonStyle: {
      marginTop: "1rem",
      padding: "0.5rem 1.5rem",
      backgroundColor: " rgb(17, 17, 17)",
      color: '#b8ae88',
      cursor: "pointer",
      border: "1px solid #b8ae88",
    },
    aboutHeader: {
      marginLeft: '5rem',
      color: '#b8ae88',
    },
    aboutDescription: {
      color: '#b8ae88',
      fontSize: '20px',
      paddingRight: '5rem'
    },
    interests: {
      display: 'flex'
    },
    interestsDesc: {
      width: '320px',
      height: '300px',
      border: '1px solid #b8ae88',
      marginRight: '10rem'
    }
  }
  return (
    <React.Fragment>
      <section className ="about-section">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img
              src={profileImage}
              alt="Aishwinder_Sandhu"
              className="image-style"
            />
          </div>
            <div className="about-text">
          <h2 style={styles.header2}>Hi, I'm Aishwinder</h2>
          <p style={styles.aboutSection}>
            Front-End Developer with <br /> a Passion for Fashion, Design & Code.
          </p>
          {/* <button style={styles.buttonStyle}>
            View Work Link Github
          </button> */}
        </div>
        </div>
      
      </section>
      <section >
        <div style={styles.aboutHeader}>
          <h3 style={styles.header3}>About Me</h3>
          <p style={styles.aboutDescription}>
            I'm a Front-End Developer who believes writing clean code is as important as clean lines.
            With over 5 years of industry experience as a Developer, a bug that I have never been able to resolve is of Fashion.
            When I'm not building interfaces, you'll see me scrolling Pinterest and building my mood board, following timeless Fashion and Influencers.
            To keep the fit of my style, you'll spot me on a squash court and gym. I take inspiration from travels and untold stories.
          </p>
        </div>
      </section>
      <section >
        <div style={styles.aboutHeader}>
          <h3 style={styles.header3}>Interests</h3>
          <div style={styles.interests}>
            <div style={styles.interestsDesc}></div>
            <div style={styles.interestsDesc}></div>
            <div style={styles.interestsDesc}></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}