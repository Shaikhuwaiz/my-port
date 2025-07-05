import React from "react";
import ReactDOM from "react-dom/client";
import App from "./compo.tsx";
import "./index.css";
import Navbar from "./navbar.tsx";
import Hero from "./hero.tsx"; // adjust path if needed
import TechStack from "./TechCard";
import { motion } from "framer-motion";
import DraggableBall from "./DraggableBall.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <div className="min-h-screen bg-gray-100">
      <Hero />
    </div>
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
      <TechStack />
    </div>

    <div style={{ padding: "20px" }}>
      <DraggableBall />
    </div>
  </React.StrictMode>
);
