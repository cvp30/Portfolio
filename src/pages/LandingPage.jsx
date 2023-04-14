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
      <div className="w-full lg:w-10/12 mx-auto max-w-screen-2xl">
        <Home />
        <hr className="text-line "/>
        <About />
        <hr className="text-line "/>
        <Skills />
        <hr className="text-line "/>
        <Works />
        {/* <hr className="text-line "/>
        <Contact /> */}
      </div>
      {/* <About />
      <Skills />
      <Works /> */}
      {/* <ModeButton />
      <NavBar />
      <div className="pl-28 2xl:pl-36">
        <Home />
        <About />
        <Skills />
        // <Works />
        <Contact />
      </div> */}
    </div>
  )
}

export default LandingPage;