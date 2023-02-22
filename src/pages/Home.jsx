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
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1500,
      fadeOut: true,
      loop: true,
      showCursor: false
    };
    typed.current = new Typed(el.current, options);
  }, []);


  return (
    <div className=" h-full ">
      <div className=" flex justify-between font-bold py-10 px-36">

        <div className=" flex flex-col gap-12 w-2/5 ">

          <p className="text-9xl text-[#ffffff28] tracking-[1rem]">HELLO!</p>
          <div className="text-6xl">
            <p>I'm</p>
            <p className="text-primary">Carlos David Valer</p>
          </div>

          <div className="h-2 w-80 rounded bg-primary"></div>

          <p className="text-3xl">Fullstack Developer</p>
        </div>

        <div className=" flex items-center justify-start">
          <div className="text-3xl" ref={el}></div>

          <div id="texto">
            <p><span className="text-primary">&lt;</span> I like <i className="text-primary ">to travel /&gt;</i></p>
            <p><span className="text-primary">&lt;</span> but most of all <i className="text-primary ">I enjoy programming /&gt;</i></p>
            <p><span className="text-primary">&lt;</span> Code is <i className="text-primary">poetry /&gt;</i></p>
          </div>
        </div>

        <div className=" vertically text-2xl flex gap-8 items-center">
          <p>Follow me</p>
          <div className="w-1 h-36 bg-primary rounded"></div>

          <div className="flex gap-4">
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