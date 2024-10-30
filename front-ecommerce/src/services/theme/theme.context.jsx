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
    const merch = document.getElementById("merchTitle");
    const clothes = document.getElementById("clothesTitle");
    const music = document.getElementById("musicTitle");
    const accessories = document.getElementById("accessoriesTitle");
  
    if (theme === "dark") {
      document.body.style.backgroundColor = "black";
      if (navbar) navbar.style.backgroundColor = "yellow";
      if (footer) footer.style.backgroundColor = "yellow";
      if (title) title.style.color = "yellow";
      if (merch) merch.style.color = "yellow";
      if (clothes) clothes.style.color = "yellow";
      if (music) music.style.color = "yellow";
      if (accessories) accessories.style.color = "yellow";
    } else {
      document.body.style.backgroundColor = "#DDDDDD";
      if (navbar) navbar.style.backgroundColor = "#A4AAA6";
      if (footer) footer.style.backgroundColor = "#A4AAA6";
      if (title) title.style.color = "black";
      if (merch) merch.style.color = "black";
      if (clothes) clothes.style.color = "black";
      if (music) music.style.color = "black";
      if (accessories) accessories.style.color = "black";
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
  