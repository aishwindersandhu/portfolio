import React from 'react';
import Hero from './components/Hero';
import { Header } from './components/Header';
import { About } from './components/About';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Interests from './components/Interests';
// import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-sans">
      <div style={{backgroundColor:'black',color:'#b8ae88'}}>
        <Header></Header>
        <About></About>
      </div>
      {/* <Hero />
      <About />
      <Portfolio />
      <Interests />
      <Contact /> */}
    </div>
  );
}