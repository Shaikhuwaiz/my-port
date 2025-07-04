import React from "react";
import ReactDOM from "react-dom/client";
import App from "./compo.tsx";
import "./index.css";
import Navbar from "./navbar.tsx";
import Hero from "./hero.tsx"; // adjust path if needed
import TechStack from "./TechCard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <div className="min-h-screen bg-gray-100">
      <Hero />
    </div>
  </React.StrictMode>
);
