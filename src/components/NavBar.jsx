
const NavBar = () => {

  const navigationItems = ['home', 'about', 'skills', 'works', 'contact'];

  return (
    <nav className="h-full w-full flex items-center gap-12 text-sm 2xl:text-lg font-semibold text-light">
      {
        navigationItems.map((item, key) => {
          return (
            <a key={key} className="capitalize hover:text-skyBlue hover:drop-shadow-iconSky transition-all duration-200 ease-in-out" href={`#${item}`}>{item}</a>
          )
        })
      }
    </nav>
  )
}

export default NavBar;