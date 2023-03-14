import NavBar from "../components/NavBar";
import Home from "./Home";
import About from "./About"
import Skills from "./Skills";
import Works from "./Works"
import Contact from "./Contact";
import Footer from "../components/Footer";


const LandingPage = () => {
  return (
    <div>


      <NavBar />
      <div className="pl-36">
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer /> 
      </div>
    </div>
  )
}

export default LandingPage;