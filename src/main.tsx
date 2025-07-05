import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./navbar.tsx";
import App from "./compo.tsx"; // Assuming this is your main portfolio
import Hero from "./hero.tsx";
import TechStack from "./TechCard.tsx";
import Home from "./Home/home.tsx"; // Make sure this path matches exactly
import Projects from "./Projects/projects.tsx";
import About from "./About/about.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100">
              <App />
              <Hero />
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Languages Learned
                </h2>
                <TechStack />
              </div>
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
