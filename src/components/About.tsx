import React from 'react';
import profileImage from '../assets/images/portfolioImage.jpeg';

export const About = () => {
  {/* Intro Section */ }
  const styles = {
    imageStyle: {
      width: '450px',
      height: '500px',
      objectFit: 'cover',
      marginRight: '5rem',
      marginLeft: '5rem',
      borderRadius: '10px'
    },
    sectionStyle:
    {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '3rem',
      paddingBottom: '5rem',
      borderBottom: '1px solid #b8ae88'
    },
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
      paddingRight:'5rem'
    },
    interests:{
      display:'flex'
    },
    interestsDesc:{
      width:'320px',
      height:'300px',
      border:'1px solid #b8ae88',
      marginRight:'10rem'
    }
  }
  return (
    <React.Fragment>
      <section style={styles.sectionStyle}>
        <img
          src={profileImage}
          alt="Aishwinder_Sandhu"
          style={styles.imageStyle}
        />
        <div>
          <h2 style={styles.header2}>Hi, I'm Aishwinder</h2>
          <p style={styles.aboutSection}>
            Front-End Developer with <br /> a Passion for Fashion, Design & Code.
          </p>
          {/* <button style={styles.buttonStyle}>
            View Work
          </button> */}
        </div>
      </section>
      <section style={styles.sectionStyle}>
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
      <section style={styles.sectionStyle}>
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