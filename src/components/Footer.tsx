import React from 'react';

export const Footer = () =>{
  return (
   <React.Fragment>
      <div className="bg-black h-full about-section pt-2 p-5 w-full">
        <nav style={{display:'flex', justifyContent:'center'}}>
        <a href="#about" className="header-nav" style={{margin:'1rem 2rem 1rem 2rem'}}>LINKEDIN</a>
        <a href="#portfolio" className="header-nav" style={{margin:'1rem 2rem 1rem 2rem'}}>GMAIL</a>
        <a href="#interests" className="header-nav" style={{margin:'1rem 2rem 1rem 2rem'}}>GITHUB</a>
        <a href="#contact"  className="header-nav"></a>
      </nav>
      </div>
   </React.Fragment>
  )
}