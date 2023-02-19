import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div id="about" className="w-full h-200 flex ">
      <div className="h-full w-[45%] p-16">
        <img
          style={{ boxShadow: "-40px 100px rgba(9,198,255,.2)" }}
          className="mx-auto border-[12px] border-primary "
          src="http://marveltheme.com/tf/html/johny/johny-legend/img/dark/profile.jpg"

        />
      </div>

      <div className="h-full w-[55%] p-auto pt-24 pl-12">
        <p className="text-5xl font-bold">About Me</p>

        <div className="flex flex-col gap-12 text-2xl mt-16 mr-32 text-[#ffffffab]">
          <p>
            I am passionate about web technology development, although I have been developing
            for a short time I have learned a lot, with +800 hrs. a lot, with +800 hrs. developing,
            I keep growing and improving my current skills.  At this moment I'm looking for
            my first opportunity to show my skills and start my way in what I love to do
            and start my way in what I love to do.
          </p>

          <p>
            I consider that I have a solid foundation in programming and I am able to work alone, but I like more to program in a team, I am passionate about my work, always trying to improve and optimize my product to provide a better user experience.
          </p>
        </div>

        <div className="flex gap-16 mt-12 ml-12">
          <a href="https://www.dropbox.com/s/mzqerludm7pz3fn/CV.pdf?dl=0" target="_blank">
            <button className=" box-border hover:bg-primary hover:text-[black] transition duration-300 ease-in-out py-3 px-4   text-2xl ">
              Download CV
              <FontAwesomeIcon icon={faDownload} className="ml-4" />
            </button>
          </a>

          <a href="#contact">
            <button className="font-bold hover:bg-primary hover:text-[black] transition duration-300 ease-in-out py-3 px-4 text-2xl ">
              Hire me!
            </button>
          </a>

        </div>


      </div>


    </div>
  )
}

export default About;