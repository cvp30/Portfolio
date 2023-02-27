import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

const NavBar = () => {
  
  const style = "relative px-1 font-bold after:content-[''] after:absolute after:bg-primary after:h-[2px] after:w-[0] after:left-0 after:-bottom-1 after:duration-300 hover:after:w-[100%] hover:text-primary";

  return (
    <div className="fixed w-full h-24  z-10 box-border flex items-center justify-between px-12 ">
      
      <Link className='h-full' to="/">
        <img className='h-full w-32' src={ Logo } />
      </Link>

      <div className="sm:text-xs lg:text-lg flex gap-6 font-bold text-[white]">
        <a className={style} href="#home">HOME</a>
        <a className={style} href="#about">ABOUT</a>
        <a className={style} href="#skills">SKILLS</a>
        <a className={style} href="#works">WORKS</a>
        <a className={style} href="#contact">CONTACT</a>
      </div>

    </div>
  )
}

export default NavBar;