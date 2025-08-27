import React from 'react';
import '../styles/tabData.css';

export const TabData = ({techUsed}) =>{

  const renderTechList = ()=>{
    let tabArr: HTMLElement[] = [];
    techUsed.length > 0 && techUsed.map((tech)=>{
      let tabDiv = <div className="
               border-[#000] 
               rounded-md transition-colors
              bg-[#B8AE88] text-black tab-data-div">
        {tech}
      </div>;
      tabArr.push(tabDiv);
    })
    return tabArr;
  }
  return(
    <React.Fragment>
      {renderTechList()}
    </React.Fragment>
  )
}