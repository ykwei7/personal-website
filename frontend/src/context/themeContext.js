import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  const DARK_MODE_KEY = "dark-mode";
  const currTheme = localStorage.getItem(DARK_MODE_KEY) ?? true;
  const [isDarkMode, setIsDarkMode] = useState(currTheme);
  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    localStorage.setItem(DARK_MODE_KEY, isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
