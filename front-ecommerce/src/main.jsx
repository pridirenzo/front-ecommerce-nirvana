import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/footer/Footer.css";
import { ThemeContextProvider } from "./services/theme/theme.context.jsx";
import { UserContextProvider } from "./services/authentication/user.context.jsx";
import { MusicProvider } from "./services/music/music.context.jsx";
import LoaderContextProvider from "./services/loadercontext/LoaderContext.jsx";


createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <LoaderContextProvider>
      <UserContextProvider>
        <ThemeContextProvider>
          <MusicProvider>
            <App />
          </MusicProvider>
        </ThemeContextProvider>
      </UserContextProvider>
    </LoaderContextProvider>
  </StrictMode>
);
