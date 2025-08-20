import react from "react";
import { About } from "./About";
import { ProfileImage } from "./ProfileImage";
import { TechStack } from "./TechStack";
import { LatestProject } from "./latestProject";
import { Experience } from "./Experience";
import { Footer } from "./Footer";

export const LayoutComponent = () => {
  return (
    <react.Fragment>
      <div className="w-3/5">
        <div className="flex flex-row">
          <div className="w-3/5 ">
            <About></About>
          </div>
          <div className="w-2/5 ml-5"><ProfileImage></ProfileImage></div>
        </div>
        <div className="flex flex-row mt-5">
          <div className="w-1/2">
            <TechStack></TechStack>
          </div>
          <div className="w-1/2 ml-5"> <LatestProject></LatestProject></div>
        </div>
      </div>
      <div className="w-2/5">
        <div className="flex flex-row ml-5"><Experience></Experience></div>
         <div className="flex flex-row ml-5 mt-5"><Footer></Footer></div>
      </div>
    </react.Fragment>
  )
}