import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function HeroParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
      }}
      options={{
        background: { color: "transparent" },
        fpsLimit: 30,
        detectRetina: true,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            push: { quantity: 10 },
          },
        },
        particles: {
          number: {
            value: 200,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 0.1, max: 3 } },
          move: {
            enable: true,
            speed: { min: 0.5, max: 0.9 },
            outModes: "out",
          },
        },
      }}
    />
  );
}
