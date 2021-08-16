import React, { useState, createContext } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState({});

  return (
    <ThemeContext.Provider value={{
      darkMode, setDarkMode
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'Components using AuthContext must be rendered within the Auth Provider'
    );
  }
  return context;
};

export default ThemeProvider;
