import { Home, User, Code, Work, Contact } from "../icons";
import Section from "./Section";

const NavBar = () => {

  return (
    <div className='box-border fixed h-screen xl:w-28 2xl:w-36 flex flex-col shadow-xl shadow-dark  dark:shadow-white text-darkblue dark:text-white'>
      <a href="#home" className='h-1/6 w-full xl:text-4xl 2xl:text-5xl flex justify-center items-center font-bold'>
        <span className="text-red">&lt;</span>
        CV
        <span className="text-red">/&gt;</span>
      </a>
      <div className=' h-5/6 w-full flex flex-col justify-center items-center xl:gap-10 2xl:gap-12 text-lg font-bold tracking-wide'>
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