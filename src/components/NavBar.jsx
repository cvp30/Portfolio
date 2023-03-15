import { Home, User, Code, Work, Contact } from "../icons";
import Section from "./Section";

const NavBar = () => {



  return (
    <div className='fixed h-screen w-36 flex flex-col shadow-xl shadow-dark  dark:shadow-white text-darkblue dark:text-white'>
      <a href="#home" className='h-1/6 w-full  text-5xl flex justify-center items-center font-bold'>
        <span className="text-orange">&lt;</span>
        CV
        <span className="text-orange">/&gt;</span>
      </a>
      <div className='h-5/6 w-full flex flex-col justify-center items-center gap-10 text-lg font-semibold tracking-wide'>
        <Section
          direction="#home"
          icon={<Home />}
          name="Home"
        />

        <Section
          direction="#about"
          icon={<User />}
          name="About"
        />

        <Section
          direction="#skills"
          icon={<Code />}
          name="Skills"
        />

        <Section
          direction="#works"
          icon={<Work />}
          name="Works"
        />

        <Section
          direction="#contact"
          icon={<Contact />}
          name="Contact"
        />

        
      </div>
    </div>
  )
}

export default NavBar;