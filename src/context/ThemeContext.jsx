import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
