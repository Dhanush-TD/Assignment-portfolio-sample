import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const setLight = () => setTheme("light");
  const setDark = () => setTheme("dark");

  return (
    <ThemeContext.Provider value={{ theme, setLight, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
