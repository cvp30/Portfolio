import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Section from "../context/Section";
import github from '../assets/networks/github.png'
import linkedin from '../assets/networks/linkedin.png'
import twitter from '../assets/networks/twitter.png'
import LinkNetwork from "../components/LinkNetwork";
import card from '../assets/landing.png'

const Home = () => {

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      stringsElement: '#texto',
      typeSpeed: 80,
      backDelay: 1500,
      fadeOut: true,
      loop: true,
      showCursor: false
    };
    typed.current = new Typed(el.current, options);


  }, []);

  return (

    <div id="home" className="font-bold w-full h-screen  pt-20 flex justify-center items-center">
      <div className=" box-border relative flex flex-row bg-card bg-cover bg-center bg-no-repeat  mx-20 h-[28rem]  aspect-20/9 xl:aspect-22/9 border-4 border-black rounded-lg">
        <div className="absolute w-full h-full blur-sm border border-black bg-[rgba(0,0,0,.6)]"></div>
        <div className="z-10 flex flex-col justify-center gap-8 px-10 lg:w-7/12">

          <p className="titles box-border text-xl w-32 px-4 py-1 rounded">WELCOME</p>

          <div ref={el} className="box-border w-full h-20 lg:text-4xl xl:text-5xl"></div>

          <div id="texto">
            {/* <p><span className="text-primary">&lt;</span> If you can imagine it<br /> <i className="text-primary ">you can program it /&gt;</i></p> */}
            <p><span className="text-primary">&lt;</span> Hello, I'm <i className="text-primary ">Carlos /&gt;</i></p>
            {/* <p><span className="text-primary">&lt;</span> Code is <i className="text-primary">poetry /&gt;</i></p> */}
          </div>

          <p>Apasionated Fullstack Developer</p>

          <div className="flex gap-8">
            <LinkNetwork url="https://github.com/cvp30" image={github} />
            <LinkNetwork url="https://www.linkedin.com/in/carlosvaler/" image={linkedin} />
            <LinkNetwork url="https://twitter.com/carlosvaler17" image={twitter} />
          </div>

        </div>

        <div className="relative w-5/12">
          <img className="absolute bottom-0 h-[30rem]" src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png" alt="" />
        </div>
      </div>

    </div>

  )
}

export default Home;