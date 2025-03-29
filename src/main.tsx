import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/ui/header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <div>
        <Header />
        <App />
      </div>
    </Router>
  </StrictMode>
);
