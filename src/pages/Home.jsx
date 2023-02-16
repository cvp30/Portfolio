import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(()=> {
    const options = {
    	// strings: [
      //   'Desarrollo aplicaciones web',
      //   'Me fascina la programación',
      // ],
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
    <div className=" w-full h-176 text-center pt-24 font-bold">
      <h1>Hola!</h1>
      
      <div className="w-full h-32 my-16">
        <p className="text-8xl" ref={el}></p>
      </div>

      <div id="texto">
        <span>Desarrollo <i className="text-highlight ">aplicaciones web</i></span>
        <span>Me fascina <i className="text-highlight">la programación</i></span>
      </div>
      

      <h2>
        Hola, me llamo <i className="text-highlight ">Carlos Valer</i>, soy Fullstack developer
      </h2>
    
      <button className=" border border-highlight hover:bg-highlight transition duration-300 ease-in-out py-3 px-4 rounded-3xl  text-xl mt-20">
        Download CV
        <FontAwesomeIcon icon={faDownload} className="ml-4"/>
      </button>
    </div>
  )
}

export default Home;