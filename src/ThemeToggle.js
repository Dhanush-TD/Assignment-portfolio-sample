import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h3>Current Theme: {theme}</h3>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
