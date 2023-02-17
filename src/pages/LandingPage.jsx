import NavBar from "../components/NavBar";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default LandingPage;