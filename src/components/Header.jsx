import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NavbarMobile from "./NavbarMobile";
import SocialNetworks from "./SocialNetworks";

const Header = () => {

  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  }, [])

  return (
    <header className={`${bg ? 'bg-[rgba(0,0,0,0.83)]': ''} w-full h-16 2xl:h-20 z-50 flex items-center fixed transition-all duration-300`}>

      <div className="w-full h-full max-w-screen-2xl mx-auto flex items-center justify-between lg:px-10 px-2">

        {/* logo */}
        <a href="#" className="logo text-3xl 2xl:text-4xl">
          Carlos Valer  
        </a>
        
        {/* SECTIONS */}
        <div className="hidden lg:block lg:h-full">
          <NavBar />
        </div>

        {/* SOCIAL NETWORKS */}
        <div className="hidden lg:block">
          <SocialNetworks />
        </div>

        {/* NAV MOBILE */}
        <div className="lg:hidden">
          <NavbarMobile />
        </div>

      </div>

      

    </header>
  )
}

export default Header;