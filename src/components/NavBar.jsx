

const NavBar = () => {
  return (
    <div className="absolute z-10 box-border  w-full h-24 flex items-center justify-between px-12 ">
      
      <h1 className="text-highlight font-bold">Carlos Valer</h1>

      <menu className="text-lg flex gap-14 font-bold">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="">Skills</a>
        <a href="">Works</a>
        <a href="">Experience</a>
        <a href="">Education</a>
        <a href="">Contact</a>
      </menu>

    </div>
  )
}

export default NavBar;