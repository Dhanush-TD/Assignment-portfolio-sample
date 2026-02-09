import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, setLight, setDark } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={setLight}>Light Theme</button>
      <button onClick={setDark} style={{ marginLeft: "10px" }}>
        Dark Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
