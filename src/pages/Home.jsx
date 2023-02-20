import { useEffect, useRef } from "react";
import Typed from "typed.js";

import linkedinIcon from '../assets/linkedinIcon.png'
import githubIcon from '../assets/githubIcon.png'
import twitterIcon from '../assets/twitterIcon.png'

const Home = () => {

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      stringsElement: '#texto',
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1500,
      loop: true,
      showCursor: false
    };
    typed.current = new Typed(el.current, options);
  }, []);


  return (
    <div id="home" className="  pt-20 w-full h-200 text-center font-bold">
      <div className="w-full h-200 absolute">
        <h1 className="z-0 ">Welcome!👋</h1>
        
        <div className="w-full h-32 my-16">
          <p className="text-8xl" ref={el}></p>
        </div>

        <div id="texto">
          <span>I develop <i className="text-primary ">web apps</i></span>
          <span>I love <i className="text-primary">programming</i></span>
        </div>


        <h1 className=" w-2/5 mx-auto">
          I´m <i className="text-primary ">Carlos Valer</i>, Fullstack developer
        </h1>

        <div className="flex flex-col justify-center items-center mt-20 ">

          <div className="mt-12 flex gap-16">

            <a href="https://www.linkedin.com/in/carlosvaler/" target="_blank">
              <img className="w-10 h-10" src={linkedinIcon} alt="" />
            </a>
            <a href="https://github.com/cvp30" target="_blank">
              <img className="w-10 h-10" src={githubIcon} alt="" />
            </a>
            <a href="https://twitter.com/carlosvaler17" target="_blank">
              <img className="w-10 h-10" src={twitterIcon} alt="" />
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Home;