// src/Starfield.tsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function Starfield() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000" },
        particles: {
          number: { value: 100 },
          size: { value: 1.5 },
          move: { speed: 0.2 },
          opacity: { value: 0.5 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
        },
      }}
    />
  );
}
