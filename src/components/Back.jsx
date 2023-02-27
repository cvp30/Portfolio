import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Back = () => {

  const particlesInit = useCallback(engine => {
    loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async container => {
  //   await console.log(container);
  // }, []);

  return (
    <Particles 
      id="tsparticles" 
      init={particlesInit} 
      // url="http://foo.bar/particles.json" 
      // loaded={particlesLoaded} 
    />

  )
}

export default Back;