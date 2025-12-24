import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeroParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      style={{
        position: "absolute",
        inset: 0,
      }}
      options={{
        background: {
          color: {
            value: "transparent", // IMPORTANT for overlay usage
          },
        },
        fpsLimit: 30,
        detectRetina: true,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: ["repulse", "bubble"],
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
            },
            remove: {
              quantity: 2,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            enable: false,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: {
              min: 0.5,
              max: 1,
            },
            straight: false,
            bounce: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 150,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ["star", "circle"],
          },
          size: {
            value: {
              min: 0.1,
              max: 2,
            },
          },
        },
      }}
    />
  );
}
