import { Link } from 'react-router-dom';
import LogoName from '../assets/LogoName.png'

const NavBar = () => {
  
  const style = "relative px-1 font-bold after:content-[''] after:absolute after:bg-primary after:h-[2px] after:w-[0] after:left-0 after:-bottom-1 after:duration-300 hover:after:w-[100%] hover:text-primary";

  return (
    <div className="sticky bg-[black] top-0 z-10 box-border w-full h-24 flex items-center justify-between px-12 ">
      
      <Link className='h-full' to="/">
        <img className='h-4/5' src={ LogoName } />
      </Link>

      <div className="text-lg flex gap-6 font-bold">
        <Link className={style} to="/">HOME</Link>
        <Link className={style} to="/about">ABOUT</Link>
        <Link className={style} to="/skills">SKILLS</Link>
        <Link className={style} to="">WORKS</Link>
        <Link className={style} to="">EDUCATION</Link>
        <Link className={style} to="">CONTACT</Link>
      </div>

    </div>
  )
}

export default NavBar;