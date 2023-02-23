import NavBar from "../components/NavBar";
// import { Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About"

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  )
}

export default LandingPage;