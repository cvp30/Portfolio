import Button from "../components/Button";

import { Github, Linkedin, Twitter } from "../icons";
import { Link } from "react-router-dom";
import { Alert } from "../icons";

const Home = () => {

  return (
    <div id="home" className="h-screen max-w-screen-2xl mx-auto flex justify-around items-center font-bold">
      <div className=" flex flex-col justify-center gap-10 h-3/5">
        <div className="flex flex-col gap-2 dark:text-white">
          <h1>Hi, I'm Carlos</h1>
          <div className="flex justify-start items-center gap-4">
            <h3 className="text-[#fc4a4a]">Fullstack Developer</h3>
            <img className=" h-5" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Animated-Flag-Peru.gif" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <a href="#contact">
            <Button>
              <Alert />
              <p>HIRE ME</p>
            </Button>
          </a>
          <div className="flex justify-center gap-12 items-center dark:text-white">
            <Link to="https://github.com/cvp30" target="_blank">
              <Github />
            </Link>

            <Link to="https://www.linkedin.com/in/carlosvaler/" target="_blank">
              <Linkedin />
            </Link>

            <Link to="https://twitter.com/carlosvaler17" target="_blank">
              <Twitter />
            </Link>
          </div>

        </div>

      </div>

      <div className="relative h-2/3 flex items-center">
        <div className="absolute border-red border-l-8 border-t-8 left-0 top-0 w-1/4 h-1/5"></div>
        <img
          className=" h-full w-full"
          src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png"
        />
        <div className="absolute border-red border-b-8 border-r-8 -right-4 -bottom-8 w-1/4 h-1/5"></div>
      </div>
    </div>
  )
}

export default Home;