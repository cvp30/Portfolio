import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Section from "../context/Section";
import github from '../assets/networks/github.png'
import linkedin from '../assets/networks/linkedin.png'
import twitter from '../assets/networks/twitter.png'
import LinkNetwork from "../components/LinkNetwork";
import card from '../assets/landing.png'
import Button from "../components/Button";

import { Github, Linkedin, Twitter } from "../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {

  // const el = useRef(null);
  // const typed = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     stringsElement: '#texto',
  //     typeSpeed: 80,
  //     backDelay: 1500,
  //     fadeOut: true,
  //     loop: true,
  //     showCursor: false
  //   };
  //   typed.current = new Typed(el.current, options);


  // }, []);

  

  return (
    <div id="home" className="h-screen max-w-screen-2xl mx-auto flex justify-around items-center font-bold">
      <div className=" flex flex-col justify-center gap-10 h-3/5">
        <div className="flex flex-col gap-2 dark:text-white">
          <h1>Hi, I'm Carlos</h1>
          <h3 className="text-orange">Fullstack Developer</h3>
        </div>

        <div className="flex flex-col gap-12">
          <Button content="HIRE ME" icon={faBell} />
          <div className="flex justify-center gap-12 items-center dark:text-white">
            <Link>
              <Github />
            </Link>

            <Link>
              <Linkedin />
            </Link>

            <Link>
              <Twitter />
            </Link>
          </div>

        </div>

      </div>

      <div className="relative h-2/3 flex items-center">
      {/* <svg className="absolute -z-20 shadow-md w-full h-full" viewBox="0 0 961.84 480.92" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect class="bg" id="bg" x="0" y="0" width="961.84" height="480.92" fill="#EEEEEE"></rect><circle cx="1442.76" cy="240.46" r="961.84" fill="#ff5722" stroke="none" strokeWidth="10"></circle></svg> */}
        <div className="absolute border-orange border-l-8 border-t-8 left-0 top-0 w-1/4 h-1/5"></div>
        <img
          className=" h-full w-full"
          src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png"
        />
        <div className="absolute border-orange border-b-8 border-r-8 -right-4 -bottom-8 w-1/4 h-1/5"></div>
      </div>



    </div>
    // <div id="home" className="font-bold w-full h-screen  pt-20 flex justify-center items-center">
    //   <div className=" box-border relative flex flex-row bg-card bg-cover bg-center bg-no-repeat  mx-20 h-[34rem]   aspect-20/9 xl:aspect-22/9 border-4 border-black rounded-lg">
    //     <div className="absolute w-full h-full blur-sm border border-black bg-[rgba(0,0,0,.6)]"></div>
    //     <div className="z-10 flex flex-col justify-center gap-8 px-10 lg:w-7/12">

    //       <p className="titles box-border text-xl w-32 px-4 py-1 rounded">WELCOME</p>

    //       <div ref={el} className="box-border w-full h-20 lg:text-4xl xl:text-5xl"></div>

    //       <div id="texto">
    //         <p><span className="text-primary">&lt;</span> Hello, I'm <i className="text-primary ">Carlos /&gt;</i></p>
    //       </div>

    //       <p>Apasionated Fullstack Developer</p>

    //       <div className="flex gap-8">
    //         <LinkNetwork url="https://github.com/cvp30" image={github} />
    //         <LinkNetwork url="https://www.linkedin.com/in/carlosvaler/" image={linkedin} />
    //         <LinkNetwork url="https://twitter.com/carlosvaler17" image={twitter} />
    //       </div>

    //     </div>

    //     <div className="relative w-5/12">
    //       <img className="absolute bottom-0 h-[30rem]" src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png" alt="" />
    //     </div>
    //   </div>

    // </div>

  )
}

export default Home;