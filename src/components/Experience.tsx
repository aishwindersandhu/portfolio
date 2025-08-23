import React,{useContext} from "react";
import '../styles/experience.css';
import { ThemeContext } from "./ThemeContext";

export const Experience = () => {
  const {lightMode} = useContext(ThemeContext);
  const styles  ={
    experienceSectionClass : `${lightMode ? `bg-[#EAE4D7]`:`bg-black`} h-full w-full about-section pt-2 p-5`,
    launchArrow: `launch-arrow-resume ${lightMode ? `launch-arrow-light`: `launch-arrow-dark`}`
  }
  return (
    <React.Fragment>
      <section className={styles.experienceSectionClass} >
        <div className="w-full h-3/4">
          <div className="mb-5 about-me-header latest-project-title">
            <span>EXPERIENCE</span>
            <span className={styles.launchArrow}>
              <a href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://drive.usercontent.google.com/download?id=1enUL9tsOVM8e-8hBEuKQUnirUsoXOT5y&authuser=0&acrobatPromotionSource=GoogleDriveNativeView"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="37-Arrow Up">
                  <path d="M30 18v7a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h6V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7v-7z" /><path d="M6.29 24.29 7.7 25.7 28 5.41V14h2V3a1 1 0 0 0-1-1H17v2h9.59z" /></g>
                </svg>
              </a>
            </span>
          </div>
          <div className="mb-5 about-me-header experience-sub-heading">
            <div className="experience-data-heading">EDUCATION</div>
            <div className="experience-data"><b>University College Dublin</b> | MSc. Information Systems (2:1)</div>
            <div className="experience-data"><b>Symbiosis International University</b> | BTech. Computer Science (3.34)</div>
          </div>
            <div className="mb-5 about-me-header experience-sub-heading">
            <div className="experience-data-heading">PROFESSIONAL EXPERIENCE</div>
            <div className="experience-data"> 
              <a  href="https://www.wipro.com/" target="_blank"><b>Wipro Technologies, Consltant to HSBC - London (2020-2022) </b></a>
              <ul className="experience-data-list">
                <li>Developed a Financial Dashboard for the employees of HSBC, for tracking their data ,clients data and deals.</li>
                {/* Tabs for experience */}
              </ul>
            </div>
            <div className="experience-data">
              <a  href="https://www.tripeasy.com/" target="_blank"><b>Internet Travel Solutions (2019-2020)</b></a>
              <ul className="experience-data-list">
                <li>Led the migration of already existing product from AngularJS to ReactJS.</li>
                {/* Tabs for experience */}
              </ul>
            </div>
            <div className="experience-data">
              <a  href="https://www.questglobal.com/" target="_blank"><b>Mobiliya Technologies (2017-2019)</b></a>
               <ul className="experience-data-list">
                <li>Consumed & constributed to HP's internal library - Veneer Native.</li>
                <li>Awarded #3, highest code contributor in development.</li>
                {/* Tabs for experience */}
              </ul>
              </div>
            <div className="experience-data"><a  href="https://www.questglobal.com/" target="_blank"><b>Freelance Software Developer (2022-2024)</b></a></div>

          </div>

        </div>
      </section>
    </React.Fragment>
  )
}