import LogoName from '../assets/LogoName.png'

const NavBar = () => {
  const style = "relative px-1 font-bold after:content-[''] after:absolute after:bg-highlight after:h-[2px] after:w-[0] after:left-0 after:-bottom-1 after:duration-300 hover:after:w-[100%] hover:text-highlight";

  return (
    <div className="absolute z-10 box-border  w-full h-24 flex items-center justify-between px-12 ">
      
      <a className='h-full' href="#home">
        <img className='h-4/5' src={ LogoName } alt="" />

      </a>


      <menu className="text-lg flex gap-6 fond-bold">
        <a className={style} href="#home">HOME</a>
        <a className={style} href="#about">ABOUT</a>
        <a className={style} href="#skills">SKILLS</a>
        <a className={style} href="">WORKS</a>
        <a className={style} href="">EXPERIENCE</a>
        <a className={style} href="">EDUCATION</a>
        <a className={style} href="">CONTACT</a>
      </menu>

    </div>
  )
}

export default NavBar;