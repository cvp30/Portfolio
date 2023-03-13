import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Button from "../components/Button";

import { Github, Linkedin, Twitter } from "../icons";
import { Link } from "react-router-dom";
import { Alert } from "../icons";

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
          <Button>
            <Alert />
            <p>HIRE ME</p>
          </Button>
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
        <div className="absolute border-orange border-l-8 border-t-8 left-0 top-0 w-1/4 h-1/5"></div>
        <img
          className=" h-full w-full"
          src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png"
        />
        <div className="absolute border-orange border-b-8 border-r-8 -right-4 -bottom-8 w-1/4 h-1/5"></div>
      </div>
    </div>
  )
}

export default Home;