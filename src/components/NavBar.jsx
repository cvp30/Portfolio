import { useState } from "react";
import { Home, User, Code, Work, Contact, Menu, Close } from "../icons";
import Section from "./Section";

const NavBar = () => {

  const [ active, setActive ] = useState(false);

  return (
    <div className='box-border flex gap-2 flex-col fixed h-screen w-28 2xl:w-36 shadow-xl shadow-dark  dark:shadow-white text-darkblue dark:text-white'>
      <a href="#home" className='h-full lg:h-1/6 lg:w-full text-4xl 2xl:text-5xl flex justify-center items-center font-bold'>
        <span className="text-red">&lt;</span>
        CV
        <span className="text-red">/&gt;</span>
      </a>
      
      {/* <button onClick={()=> setActive(!active)} className="w-10 h-10 lg:hidden">
        <Menu />
      </button> */}
      
      <div className='lg:h-5/6  lg:bg-transparent  w-full flex flex-col justify-center items-center gap-10 2xl:gap-12 text-lg font-bold tracking-wide'>
        {/* <button onClick={()=> setActive(false)} className="h-10 w-10 lg:hidden text-white">
          <Close />
        </button> */}
        
        <Section
          direction="#home"
          icon={<Home />}
          name="HOME"
        />

        <Section
          direction="#about"
          icon={<User />}
          name="ABOUT"
        />

        <Section
          direction="#skills"
          icon={<Code />}
          name="SKILLS"
        />

        <Section
          direction="#works"
          icon={<Work />}
          name="WORKS"
        />

        <Section
          direction="#contact"
          icon={<Contact />}
          name="CONTACT"
        />

        
      </div>
    </div>
  )
}

export default NavBar;