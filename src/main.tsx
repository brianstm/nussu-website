import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import NavBar from "./components/ui/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <NavBar />
      <App />
    </div>
  </StrictMode>
);
