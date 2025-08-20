import React,{useContext} from "react";
import '../styles/techStack.css';
import { ThemeContext } from "./ThemeContext";

export const TechStack = () =>{
  const {lightMode} = useContext(ThemeContext);
  const styles ={
    techSectionClass: `${lightMode ? `bg-[#EAE4D7]`:`bg-black`} tech-stack-section h-full pt-2 p-5`
  }
  return (
    <React.Fragment>
       <section className={styles.techSectionClass}>
         <div className="mb-10 tech-stack-title">TECH STACK</div>
          <div>
            <ul>
              <li>
                {/* insert icons */}
                React,React Native
              </li>
              <li>
                {/* insert icons */}
                Redux, Redux ToolkitJS
              </li>
              <li>HTML, CSS, JavaScript</li>
              <li>Currently learning/working : React, Python/Scikit-learn</li>
              <li>Experience on: AngularJS, Cordova, </li>
            </ul>
          </div>
      </section>
    </React.Fragment>
  );
}