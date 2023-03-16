import { useState } from "react";
import { Moon, Sun } from "../icons";


const ModeButton = () => {
  const [active, setActive] = useState(true);

  const handleMode = () => {
    document.documentElement.classList.toggle("dark");
    setActive(!active);
  }
  return (
    <button
      onClick={handleMode}
      className='fixed xl:right-8 xl:top-8 2xl:right-10 2xl:top-10 flex justify-center items-center xl:h-8 xl:w-8 2xl:h-10 2xl:w-10'>
        <span className={`${!active?'-translate-x-full text-[rgba(0,0,0,0)]':'text-dark'} h-full absolute transition-all duration-500 ease`}>
          <Sun />
        </span>

        <span className={`${!active?'-translate-x-0 text-white':'translate-x-full text-[rgba(0,0,0,0)]'} h-full absolute transition-all duration-500 ease`}>
          <Moon />
        </span>

    </button>
  )
}

export default ModeButton;