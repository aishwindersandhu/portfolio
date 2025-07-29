import React from 'react';
import '../styles/about.css';

export const About = () => {
  return (
    <React.Fragment>
      <section className="bg-black h-full about-section pt-2 p-5">
         <div className="mb-10 about-me-header">ABOUT ME</div>
          <div>
            <ul>
              <li>
                {/* insert icons */}
                Front-End Developer with over 5 years of industry experience.
              </li>
              <li>
                {/* insert icons */}
                Believes in creating and devloping smooth and seamless user experience.
              </li>
              <li>UI/UX Design and AI/ML Enthusiast.</li>
              <li>Fashion, Travel and Coffee Driven</li>
              <li></li>
            </ul>
          </div>
      </section>
    </React.Fragment>
  )
}