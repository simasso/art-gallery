import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { FavouritesContextProvider } from "./contexts/FavouritesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <FavouritesContextProvider>
        <App />
      </FavouritesContextProvider>
    </BrowserRouter>
  </StrictMode>
);
