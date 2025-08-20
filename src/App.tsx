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
    <ThemeContextProvider>
      {/* Children props for ThemeContext Provider */}
      <div className="font-sans">
        <div className={styles.body}>
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
    </ThemeContextProvider>
  );
}