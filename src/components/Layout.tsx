import react from "react";
import { About } from "./About";
import { ProfileImage } from "./ProfileImage";

export const LayoutComponent  = () =>{
  return (
    <react.Fragment>
       <div className="w-3/5 h-1/2 flex flex-row">
            <div className="w-3/5">
              <About></About>
            </div>
            <div className="w-2/5 ml-5"><ProfileImage></ProfileImage></div>
          </div>
    </react.Fragment>
  )
}