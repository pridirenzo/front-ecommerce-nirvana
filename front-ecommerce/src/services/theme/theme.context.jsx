import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

  // contexto para el manejo de tema claro/oscuro, seteo en almacenamiento local y tmb en un estado
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
    const login = document.getElementById("loginTitle");
    const email = document.getElementById("emailTitle");
    const password = document.getElementById("passTitle");
    const password2 = document.getElementById("pass2Title");
    const register = document.getElementById("registerTitle");
    const name = document.getElementById("nameTitle");
    const surname = document.getElementById("surnameTitle");
    const registerEmail = document.getElementById("registerEmailTitle");
    const registerPassword = document.getElementById("registerPasswordTitle");
    const registerPassword2 = document.getElementById("registerPasswordTitle2");
    const discography = document.getElementById("musicLandingTitle");
    const vinyl = document.getElementById("vinylTitle");
    const cd = document.getElementById("cdTitle");
    const shirt = document.getElementById("shirtTitle");
    const jumper = document.getElementById("jumperTitle");
    const superadmin = document.getElementById("superadminDashTitle");
    const supAdminNav = document.getElementById("supAdminNav");
    const resetPassword = document.getElementById("resetPasswordTitle");
    const passwordText = document.getElementById("explanationPasswordText");
    const newPasswordTitle = document.getElementById("newPasswordTitle");
    const newPasswordText1 = document.getElementById("newPasswordText1");
    const newPass1 = document.getElementById("newPass1");
    const newPass2 = document.getElementById("newPass2");
    const salesTitle = document.getElementById("salesDashTitle");
    const height = document.getElementById("heightText");
    const width = document.getElementById("widthText");
    const musicButton1 = document.getElementById("musicButton1");
    const musicButton2 = document.getElementById("musicButton2");
  
    // me aseguro de que los textos y elementos se muestren con el color acorde al tema
    if (theme === "dark") {
      document.body.style.backgroundColor = "black";
      if (navbar) navbar.style.backgroundColor = "yellow";
      if (footer) footer.style.backgroundColor = "yellow";
      if (title) title.style.color = "yellow";
      if (merch) merch.style.color = "yellow";
      if (clothes) clothes.style.color = "yellow";
      if (music) music.style.color = "yellow";
      if (accessories) accessories.style.color = "yellow";
      if (login) login.style.color = "yellow";
      if (email) email.style.color = "yellow";
      if (password) password.style.color = "yellow";
      if (password2) password2.style.color = "yellow";
      if (register) register.style.color = "yellow";
      if (name) name.style.color = "yellow";
      if (surname) surname.style.color = "yellow";
      if (registerEmail) registerEmail.style.color = "yellow";
      if (registerPassword) registerPassword.style.color = "yellow";
      if (registerPassword2) registerPassword2.style.color = "yellow";
      if (discography) discography.style.color = "yellow";
      if (vinyl) vinyl.style.color = "yellow";
      if (cd) cd.style.color = "yellow";
      if (shirt) shirt.style.color = "yellow";
      if (jumper) jumper.style.color = "yellow";
      if (superadmin) superadmin.style.color = "yellow";
      if (supAdminNav) supAdminNav.style.backgroundColor = "yellow";
      if (resetPassword) resetPassword.style.color = "yellow";
      if (passwordText) passwordText.style.color = "yellow";
      if (newPasswordTitle) newPasswordTitle.style.color = "yellow";
      if (newPasswordText1) newPasswordText1.style.color = "yellow";
      if (newPass1) newPass1.style.color = "yellow";
      if (newPass2) newPass2.style.color = "yellow";
      if (salesTitle) salesTitle.style.color = "yellow";
      if (height) height.style.color = "yellow";
      if (width) width.style.color = "yellow";
      if (musicButton1) musicButton1.style.color = "yellow";
      if (musicButton2) musicButton2.style.color = "yellow";
    } else {
      document.body.style.backgroundColor = "#DDDDDD";
      if (navbar) navbar.style.backgroundColor = "#A4AAA6";
      if (footer) footer.style.backgroundColor = "#A4AAA6";
      if (title) title.style.color = "black";
      if (merch) merch.style.color = "black";
      if (clothes) clothes.style.color = "black";
      if (music) music.style.color = "black";
      if (accessories) accessories.style.color = "black";
      if (login) login.style.color = "black";
      if (email) email.style.color = "black";
      if (password) password.style.color = "black";
      if (password2) password2.style.color = "black";
      if (register) register.style.color = "black";
      if (name) name.style.color = "black";
      if (surname) surname.style.color = "black";
      if (registerEmail) registerEmail.style.color = "black";
      if (registerPassword) registerPassword.style.color = "black";
      if (registerPassword2) registerPassword2.style.color = "black";
      if (discography) discography.style.color = "black";
      if (vinyl) vinyl.style.color = "black";
      if (cd) cd.style.color = "black";
      if (shirt) shirt.style.color = "black";
      if (jumper) jumper.style.color = "black";
      if (superadmin) superadmin.style.color = "black";
      if (supAdminNav) supAdminNav.style.backgroundColor = "#A4AAA6";
      if (resetPassword) resetPassword.style.color = "black";
      if (passwordText) passwordText.style.color = "black";
      if (newPasswordTitle) newPasswordTitle.style.color = "black";
      if (newPasswordText1) newPasswordText1.style.color = "black";
      if (newPass1) newPass1.style.color = "black";
      if (newPass2) newPass2.style.color = "black";
      if (salesTitle) salesTitle.style.color = "black";
      if (height) height.style.color = "black";
      if (width) width.style.color = "black";
      if (musicButton1) musicButton1.style.color = "black";
      if (musicButton2) musicButton2.style.color = "black";
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
  