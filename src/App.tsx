import React from 'react';
import Hero from './components/Hero';
import { Header } from './components/Header';
import { About } from './components/About';
import '../src/index.css'

export default function App() {
  return (
    <div className="font-sans">
      <div className="body-div">
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