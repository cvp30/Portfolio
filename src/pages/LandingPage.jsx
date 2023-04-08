import NavBar from "../components/NavBar";
import Home from "./Home";
import About from "./About"
import Skills from "./Skills";
import Works from "./Works"
import Contact from "./Contact";
import Footer from "../components/Footer";
import ModeButton from "../components/ModeButton";
import Header from "../components/Header";


const LandingPage = () => {
  return (
    <div>
      
      <Header />
      <Home />
      <About />
      {/* <ModeButton />
      <NavBar />
      <div className="pl-28 2xl:pl-36">
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div> */}
    </div>
  )
}

export default LandingPage;