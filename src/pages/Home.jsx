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
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: false
    };
    typed.current = new Typed(el.current, options);
  }, []);


  return (
    <div id="home" className=" w-full h-200 text-center  font-bold  bg-[url('https://media.istockphoto.com/id/1305012465/es/vector/conexi%C3%B3n-a-internet-sentido-abstracto-de-la-ciencia-y-el-fondo-de-dise%C3%B1o-gr%C3%A1fico-tecnol%C3%B3gico.jpg?s=612x612&w=0&k=20&c=uD0OXt4Seao0vLn0xQn8GQt8Lvs_-oFDxaJVcDq5JOQ=')] bg-cover bg-center">
      <div className="w-full h-200 absolute  bg-[rgba(20,25,31,.7)]">
        <h1 className="z-0 pt-40">Hello!  👋</h1>

        <div className="w-full h-32 my-16">
          <p className="text-8xl" ref={el}></p>
        </div>

        <div id="texto">
          <span>I develop <i className="text-highlight ">web apps</i></span>
          <span>I love <i className="text-highlight">programming</i></span>
        </div>


        <h1 className=" w-2/5 mx-auto">
          I´m <i className="text-highlight ">Carlos Valer</i>, Fullstack developer
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