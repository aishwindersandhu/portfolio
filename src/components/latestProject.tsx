import react from "react";
import '../styles/latestProject.css';

export const LatestProject = () => {
  return (
    <react.Fragment>
      <section className="bg-[#B8AE88] h-full pt-2 p-5 latest-project-section" >
        <div className="mb-10 about-me-header latest-project-title">
          <span>LATEST WORK
            <a href="https://github.com/aishwindersandhu/demoaApp/tree/FaceCapture-Component"
              target="_blank">
              <span className="launch-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="37-Arrow Up"><path d="M30 18v7a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h6V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7v-7z" /><path d="M6.29 24.29 7.7 25.7 28 5.41V14h2V3a1 1 0 0 0-1-1H17v2h9.59z" /></g></svg>
              </span>
            </a>
          </span>
          {/* Attach hosted link, netlify link, for full demo */}

          <a href="https://github.com/aishwindersandhu/demoaApp/tree/FaceCapture-Component" target="_blank">
            <div style={{ fontSize: '15px', textDecoration: 'underline' }}>Github Link</div>
          </a>

        </div>
        <div>
        </div>
      </section>
    </react.Fragment>
  );
}