import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Button from './Button';

const NavBar = () => {
  
  const style = "relative px-1 font-bold after:content-[''] after:absolute after:bg-primary after:h-[2px] after:w-[0] after:left-0 after:-bottom-1 after:duration-300 hover:after:w-[100%] hover:text-primary";

  return (
    <div className='flex justify-center box-border z-20 fixed w-full bg-darkGray h-20'>
      <div className="max-w-screen-2xl  w-full h-full   font-bold flex items-center justify-center gap-16 px-8">
        <Link className='h-full' to="/">
          <img className='h-full w-28' src={ Logo } />
        </Link>

        <div className=" grow flex justify-end gap-12 pr-8">
          <a className={style} href="#home">Home</a>
          <a className={style} href="#about">About</a>
          <a className={style} href="#skills">Skills</a>
          <a className={style} href="#works">Works</a>
          <a className={style} href="#contact">Contact</a>
        </div>

        <Button content="HIRE ME"/>

      </div>

    </div>
      
  )
}

export default NavBar;