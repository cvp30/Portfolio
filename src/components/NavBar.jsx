import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="box-border border border-[red] w-full h-24 flex items-center justify-between px-12">
      
      <h1 className="">Carlos Valer</h1>

      <menu className="text-lg flex gap-14 font-bold tracking-wider">
        <Link to="">Home</Link>
        <Link to="">About</Link>
        <Link to="">Skills</Link>
        <Link to="">Works</Link>
        <Link to="">Experience</Link>
        <Link to="">Education</Link>
        <Link to="">Contact</Link>
      </menu>

    </div>
  )
}

export default NavBar;