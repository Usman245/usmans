import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from './options'
import './globals.css'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the tsParticles engine
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // You can use this callback to do something when particles are loaded
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    options={particlesOptions}
    />
  );
};

export default ParticlesBackground;
