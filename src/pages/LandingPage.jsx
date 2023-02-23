import NavBar from "../components/NavBar";
// import { Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Skills from "./Skills";
import Works from "./Works"

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Works />
    </div>
  )
}

export default LandingPage;