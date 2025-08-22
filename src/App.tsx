import React, { useContext } from 'react';
import { Header } from './components/Header';
import { ThemeContext, ThemeContextProvider } from './components/ThemeContext';
import { LayoutComponent } from './components/Layout';
import '../src/index.css';
//can also include styled components here, to improve way of writing and assembling components
export default function App() {
  const { lightMode } = useContext(ThemeContext);
  //use it for styling
  const styles ={
    body: lightMode ? 'body-div-light':'body-div-dark'
  }
  return (
      <div className="font-sans">
        <div className={styles.body}>
          <Header></Header>
          <div className="flex flex-row mt-5" style={{ height: 'auto' }}>
            <LayoutComponent
            ></LayoutComponent>
            <div>
            </div>
          </div>
        </div>
      </div>
  );
}