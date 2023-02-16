import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import linkedinIcon from '../assets/linkedinIcon.png'
import githubIcon from '../assets/githubIcon.png'

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
    <div id="home" className=" w-full h-200 text-center  font-bold bg-[rgba(0,0,0,.8)] bg-[url('https://hawkticehurst.com/imgs/hero.png')] bg-cover bg-center">
      <div className="w-full h-200 absolute  bg-[rgba(20,25,31,.95)]">
        <h1 className="z-0 pt-40">Hola!  👋</h1>

        <div className="w-full h-32 my-16">
          <p className="text-8xl" ref={el}></p>
        </div>

        <div id="texto">
          <span>Desarrollo <i className="text-highlight ">aplicaciones web</i></span>
          <span>Me fascina <i className="text-highlight">la programación</i></span>
        </div>


        <h2 className=" w-2/5 mx-auto">
          Hola, me llamo <i className="text-highlight ">Carlos Valer</i>, Fullstack developer
        </h2>

        <div className="flex flex-col justify-center items-center mt-20 ">
          <button className=" border border-highlight hover:bg-highlight transition duration-300 ease-in-out py-3 px-4 rounded-3xl  text-xl ">
            Download CV
            <FontAwesomeIcon icon={faDownload} className="ml-4" />
          </button>

          <div className="mt-12 flex gap-8">

            <a href="https://www.linkedin.com/in/carlosvaler/" target="_blank">
              <img className="w-10 h-10" src={linkedinIcon} alt="" />
            </a>
            <a href="https://github.com/cvp30" target="_blank">
              <img className="w-10 h-10" src={githubIcon} alt="" />
            </a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home;