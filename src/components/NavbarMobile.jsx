import { useState } from "react";
import { Menu, Close } from "../icons";
import { motion } from 'framer-motion';

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
      <button className="h-8 text-light" onClick={() => setActive(!active)}>
        <Menu />
      </button>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={active ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-[black] fixed top-0 right-0"
      />

      <motion.div
        variants={itemVariants}
        initial='hidden'
        animate={active ? 'visible' : ''}
        className={`${active ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center gap-8 text-sm font-semibold transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setActive(false)}
          className="h-8 absolute top-3 right-2"
        >
          <Close />
        </div>

        {
          navigationItems.map((item, key) => {
            return (
              <a key={key} onClick={()=> setActive(false)} className="capitalize" href={`#${item}`}>{item}</a>
            )
          })
        }

      </motion.div>



    </nav>
  )
}

export default NavbarMobile;