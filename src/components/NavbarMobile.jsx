import { useState } from "react";
import { Menu, Close } from "../icons";
import { motion } from 'framer-motion';
import SocialNetworks from "./SocialNetworks";

const NavbarMobile = () => {

  const navigationItems = ['home', 'about', 'skills', 'works', 'contact']
  const [active, setActive] = useState(false);

  const variants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }


  return (
    <nav className="relative">
      <button className="h-8 text-red" onClick={() => setActive(!active)}>
        <Menu />
      </button>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={active ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-[#17191c] fixed top-0 right-0"
      />

      <motion.div
        variants={itemVariants}
        initial='hidden'
        animate={active ? 'visible' : ''}
        className={`${active ? 'right-0' : '-right-full'}  fixed top-0 bottom-0 w-full flex flex-col justify-center items-center gap-8 text-sm font-semibold transition-all duration-300 overflow-hidden`}
      >
        <div className="logo text-3xl">
          Carlos Valer  
        </div>

        <hr className="text-line w-11/12"/>

        <div
          onClick={() => setActive(false)}
          className="h-8 p-2 absolute top-3 right-2 text-red rounded-full bg-background"
        >
          <Close />
        </div>

        {
          navigationItems.map((item, key) => {
            return (
              <a key={key} onClick={() => setActive(false)} className="capitalize" href={`#${item}`}>{item}</a>
            )
          })
        }

        <hr className="text-line w-11/12"/>

        <div className="w-full flex justify-center">
          <SocialNetworks />
        </div>

      </motion.div>



    </nav>
  )
}

export default NavbarMobile;