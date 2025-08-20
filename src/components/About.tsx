import React, {useContext} from 'react';
import '../styles/about.css';
import { ThemeContext } from './ThemeContext';

export const About = () => {
  const {lightMode} = useContext(ThemeContext);
  const styles ={
    sectionClass : `${lightMode ? `bg-[#EAE4D7]`:`bg-black`} h-full about-section pt-2 p-5`
  }
  return (
    <React.Fragment>
      <section className={styles.sectionClass}>
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