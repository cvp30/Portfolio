import Home from "./Home";
import About from "./About"
import Skills from "./Skills";
import Works from "./Works"
import Contact from "./Contact";
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
        <hr className="text-line "/>
        <Contact />
      </div>
    </div>
  )
}

export default LandingPage;