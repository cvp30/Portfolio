import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { Link } from "react-router-dom";
import Back from "../components/Back";

const Home = () => {

  // const el = useRef(null);
  // const typed = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     stringsElement: '#texto',
  //     typeSpeed: 40,
  //     backSpeed: 40,
  //     backDelay: 1500,
  //     fadeOut: true,
  //     loop: true,
  //     showCursor: false
  //   };
  //   typed.current = new Typed(el.current, options);
  // }, []);


  return (
    <div className="w-full h-screen">
      <Back />
      <h1>
        holaa
      </h1>
    </div>
      // <div id="home" className="truncate relative w-full h-screen border">
        
        // <div className="absolute -z-10 md:-right-48 lg:-right-96 -top-20 w-4/5 h-250  bg-black rotate-8"></div>

        // <div className="w-full h-full flex z-20 md:mt-12 lg:mt-24 font-extrabold">
        //   <div className="w-1/2 h-full flex flex-col items-start pt-8 pl-44 gap-16 border">
        //       <p className="text-4xl">Hi, I am</p>

        //       <div>
        //         <p className="text-7xl">Carlos Valer</p>
        //         <p className="text-2xl text-[#848282]">FullStack Developer</p>
        //       </div>

        //       <div className="flex mt-12 gap-12">
        //         <Link to="https://github.com/cvp30" target="_blank">
        //           <img className="w-16 p-2 bg-silver shadow-lg shadow-black" src="https://img.icons8.com/glyph-neue/128/000000/github.png" alt="github" />
        //         </Link>

        //         <Link to="https://www.linkedin.com/in/carlosvaler/" target="_blank">
        //           <img className="w-16 p-3 bg-silver shadow-lg shadow-black" src="https://img.icons8.com/metro/104/null/linkedin.png" alt="linkedin" />
        //         </Link> 

        //         <Link to="https://twitter.com/carlosvaler17" target="_blank">
        //           <img className="w-16 p-3 bg-silver shadow-lg shadow-black" src="https://img.icons8.com/ios-filled/100/null/twitter.png" alt="" />
        //         </Link>
        //       </div>

        //   </div>



        //   <div className=" w-1/2 h-full flex flex-col items-center pt-12 gap-12 ">
        //     <>
        //       <img className="w-96 " src="http://marveltheme.com/tf/html/johny/johny-legend/img/dark/profile.jpg" alt="asd" />
        //     </>

        //     <div ref={el} className="w-full h-12 text-white text-2xl text-center font-bold mt-4">
        //     </div>
        //     <div id="texto">
        //       <p><span className="text-primary">&lt;</span> If you can imagine it<br /> <i className="text-primary ">you can program it /&gt;</i></p>
        //       <p><span className="text-primary">&lt;</span> When a programmer is born he doesn't cry<br /> <i className="text-primary ">he says "Hello World" /&gt;</i></p>
        //       <p><span className="text-primary">&lt;</span> Code is <i className="text-primary">poetry /&gt;</i></p>
        //     </div>
        //   </div>
        // </div> 
      // </div>
  )
}

export default Home;