import react from "react";
import '../styles/latestProject.css'
export const LatestProject = () => {
  return (
    <react.Fragment>
      <section className="bg-[#B8AE88] h-full pt-2 p-5 latest-project-section" >
        <div className="mb-10 about-me-header latest-project-title">LATEST WORK</div>
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
    </react.Fragment>
  );
}