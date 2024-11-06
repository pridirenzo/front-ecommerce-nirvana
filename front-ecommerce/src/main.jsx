import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/footer/Footer.css";
import { ThemeContextProvider } from "./services/theme/theme.context.jsx";
import { UserContextProvider } from "./services/authentication/user.context.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UserContextProvider>
  </StrictMode>
);
