import { useEffect, useRef } from "react";
import Typed from "typed.js";

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
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: false
    };
    typed.current = new Typed(el.current, options);
  }, []);
  

  return (
    <div className=" w-full h-176 border border-[red] text-center pt-40">
      <h1 className="">Hola!</h1>
      <div className="w-full h-32 my-16">
        <p className="text-8xl font-bold" ref={el}></p>
      </div>

      <div id="texto">
        <span>Desarrollo <i className="text-highlight ">aplicaciones web</i></span>
        <span>Me fascina <i className="text-highlight">la programación</i></span>
      </div>
      

      <h2>Hola, me llamo <i className="text-highlight ">Carlos Valer</i>, soy Fullstack developer</h2>
    </div>
  )
}

export default Home;