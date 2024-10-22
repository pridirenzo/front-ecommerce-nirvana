import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Tema actualizado a ", newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    console.log("Efecto de tema ejecutado: ", theme); 
    if (theme === "dark") {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "white";
    }
  }, [theme]);
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  