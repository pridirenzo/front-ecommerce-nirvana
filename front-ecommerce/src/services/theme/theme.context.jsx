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
    
    const navbar = document.getElementById("landingNavbar");
    const footer = document.getElementById("landingFooter");
    const title = document.getElementById("landingTitle");
  
    if (theme === "dark") {
      document.body.style.backgroundColor = "black";
      if (navbar) navbar.style.backgroundColor = "yellow";
      if (footer) footer.style.backgroundColor = "yellow";
      if (title) title.style.color = "yellow";
    } else {
      document.body.style.backgroundColor = "#DDDDDD";
      if (navbar) navbar.style.backgroundColor = "#A4AAA6";
      if (footer) footer.style.backgroundColor = "#A4AAA6";
      if (title) title.style.color = "black";
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
  