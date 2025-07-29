import react from "react";
import { About } from "./About";
import { ProfileImage } from "./ProfileImage";
import { TechStack } from "./TechStack";
import { LatestProject } from "./latestProject";

export const LayoutComponent = () => {
  return (
    <react.Fragment>
      <div className="w-3/5 ">
        <div className="flex flex-row">
           <div className="w-3/5 h-1/2">
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
    </react.Fragment>
  )
}