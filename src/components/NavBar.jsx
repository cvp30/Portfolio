import { Home, User, Code, Work, Contact } from "../icons";
import Section from "./Section";

const NavBar = () => {

  return (
    <div className='fixed h-screen w-32 flex flex-col shadow-xl shadow-dark  dark:shadow-white text-darkblue dark:text-white'>
      <a href="#home" className='h-1/6 w-full text-4xl flex justify-center items-center font-bold'>
        <span className="text-red">&lt;</span>
        CV
        <span className="text-red">/&gt;</span>
      </a>
      <div className=' h-5/6 w-full flex flex-col justify-center items-center gap-10 text-lg font-bold tracking-wide'>
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