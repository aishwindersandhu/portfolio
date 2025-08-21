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
         <div className="mb-5 about-me-header">ABOUT ME</div>
          <div>
            <p style={{fontSize:'20px'}}>Front-End Developer | UI/UX & AI/ML Enthusiast</p>
            <p className="mt-5">With 5+ years of crafting seamless and engaging digital experiences, I thrive on turning complex ideas into intuitive, user-friendly interfaces. Passionate about UI/UX design and exploring the potential of AI/ML in creating smarter interactions. When I’m not coding, you’ll find me fueled by coffee, exploring new travel destinations, or keeping up with the latest in fashion.</p>
          </div>
      </section>
    </React.Fragment>
  )
}