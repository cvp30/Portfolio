import { faHome, faUser, faCode, faBriefcase, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NavBar = () => {
  
  const handleMode = () => {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className='fixed h-screen w-36 bg-white dark:bg-darkblue text-darkblue dark:text-white'>
      <p className='text-6xl font-bold'>CV</p>
      <div className='flex flex-col gap-10 mt-24 text-lg font-semibold tracking-wide'>
        <a href="#home" className='flex gap-3 justify-start items-center pl-4 hover:text-orange'>
          <FontAwesomeIcon icon={faHome} />
          <p className='text-sm'>Home</p>
        </a>

        <a href="#about" className='flex gap-3 justify-start items-center pl-4 hover:text-orange'>
          <FontAwesomeIcon icon={faUser} />
          <p className='text-sm'>About</p>
        </a>

        <a className='flex gap-3 justify-start items-center pl-4 hover:text-orange'>
          <FontAwesomeIcon icon={faCode} />
          <p className='text-sm'>Skills</p>
        </a>

        <a className='flex gap-3 justify-start items-center pl-4 hover:text-orange'>
          <FontAwesomeIcon icon={faBriefcase} />
          <p className='text-sm'>Works</p>
        </a>

        <a className='flex gap-3 justify-start items-center pl-4 hover:text-orange'>
          <FontAwesomeIcon icon={faMessage} />
          <p className='text-sm'>Contact</p>
        </a>
      
        <button onClick={handleMode} className='border border-[red]'>
          darkmode
        </button>
      
      </div>
      
    </div>
    // <div className='flex justify-center box-border z-20 fixed w-full bg-darkGray h-16'>
    //   <div className="box-border max-w-screen-2xl w-full h-full font-bold flex items-center justify-center gap-16 px-8">
    //     <Link className='h-full flex items-center' to="/">
    //       <img className='w-24 h-12' src={ Logo } />
    //     </Link>

    //     <div className=" grow flex justify-end gap-12 pr-8">
    //       <a className={style} href="#home">Home</a>
    //       <a className={style} href="#about">About</a>
    //       <a className={style} href="#skills">Skills</a>
    //       <a className={style} href="#works">Works</a>
    //       <a className={style} href="#contact">Contact</a>
    //     </div>

    //     <Button content="HIRE ME" icon={faBell} />

    //   </div>

    // </div>
      
  )
}

export default NavBar;