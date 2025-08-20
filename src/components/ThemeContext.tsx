import React, { createContext, useContext, useState } from 'react';

//Defining my Theme
//create context with default values
export const ThemeContext = createContext({
  lightMode: false,
  toggleTheme: () => { },
});
//create context provider
export const ThemeContextProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);
  const toggleTheme = () => {
    setLightMode(prev => !prev);
  }
return (
    <ThemeContext.Provider value={{ lightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}