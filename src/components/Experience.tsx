import React,{useContext} from "react";
import '../styles/experience.css';
import { ThemeContext } from "./ThemeContext";

export const Experience = () => {
  const {lightMode} = useContext(ThemeContext);
  const styles  ={
    experienceSectionClass : `${lightMode ? `bg-[#EAE4D7]`:`bg-black`} h-full w-full about-section pt-2 p-5`
  }
  return (
    <React.Fragment>
      <section className={styles.experienceSectionClass} >
        <div className="w-full h-3/4">
          <div className="mb-10 about-me-header latest-project-title">
            <span>EXPERIENCE</span>
            <span className="launch-arrow-resume">
              <a href="https://drive.google.com/file/d/1enUL9tsOVM8e-8hBEuKQUnirUsoXOT5y/view?raw=1"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="37-Arrow Up">
                  <path d="M30 18v7a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h6V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7v-7z" /><path d="M6.29 24.29 7.7 25.7 28 5.41V14h2V3a1 1 0 0 0-1-1H17v2h9.59z" /></g>
                </svg>
              </a>
            </span>
          </div>

        </div>
      </section>
    </React.Fragment>
  )
}