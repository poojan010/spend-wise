import React, { createContext, useContext, useState } from 'react';
import { Theme } from './types';  // Make sure to define the Theme types

// Define Light and Dark themes
export const LightTheme: Theme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#6200ee',
    secondary: '#03dac6',
  },
};

export const DarkTheme: Theme = {
  colors: {
    background: '#000000',
    text: '#ffffff',
    primary: '#bb86fc',
    secondary: '#03dac6',
  },
};

// Define the context type
type ThemeContextType = {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: LightTheme,  // Default theme is light
  isDarkMode: false,  // Default mode is light
  toggleTheme: () => {}, // Default empty function
});

export const useTheme = () => useContext(ThemeContext);

// The provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Correct implementation of the toggleTheme function
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const theme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
