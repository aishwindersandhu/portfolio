import React from 'react';
import { Header } from './components/Header';
import { LayoutComponent } from './components/Layout';
import '../src/index.css'

export default function App() {
  return (
    <div className="font-sans">
      <div className="body-div">
        <Header></Header>
        <div className="flex flex-row mt-10" style={{ height: 'auto' }}>
          {/* multiple grid layout */}
          <LayoutComponent
          ></LayoutComponent>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}