import React, { useContext } from "react";
import '../styles/techStack.css';
import { ThemeContext } from "./ThemeContext";
import { StackTabs } from "./techStackTabs";

export const TechStack = () => {
  const { lightMode } = useContext(ThemeContext);
  const styles = {
    techSectionClass: `${lightMode ? `bg-[#EAE4D7]` : `bg-black`} tech-stack-section pt-2 p-5`
  }
 
  return (
    <React.Fragment>
      <section className={styles.techSectionClass}>
        <div className="mb-5 tech-stack-title">MY TOOLKIT</div>
        <StackTabs></StackTabs>
      </section>
    </React.Fragment>
  );
}