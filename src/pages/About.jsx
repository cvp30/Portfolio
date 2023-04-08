import { Link } from "react-router-dom";
import Button from "../components/Button";
import Title from "../components/Title";
import { Download } from "../icons";


const About = () => {

  const info = [
    {
      title: "Who I am?",
      content: "Hi, I consider myself passionate about web development, self-taught with a great ambition to continue growing and learning.",
      image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-programmer-mobile-app-development-flaticons-lineal-color-flat-icons-3.png",
    },
    {
      title: "Education",
      content: "I studied Computer Science, along the way I discovered my passion for web development I trained in it and currently I continue to learn and improve my skills as a fullstack developer.",
      image: "https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-write-graphic-design-xnimrodx-blue-xnimrodx.png",
    },
    {
      title: "Job",
      content: "I am currently looking for my first job and the great opportunity to show my skills and apply them to some real life environment",
      image: "https://img.icons8.com/external-prettycons-flat-prettycons/64/null/external-job-social-media-prettycons-flat-prettycons.png",
    },
  ]

  return (

    <section id="about" className="lg:h-screen w-screen max-w-screen-2xl pt-20 mx-auto">

      <div className=" h-[90%] flex flex-col-reverse lg:flex-row justify-center items-center gap-6">
        <figure className=" lg:w-1/3 h-full flex items-center justify-center">
          <img className=" aspect-[3/4] h-full" src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png" alt="" />
        </figure>

        <div className="lg:w-1/3 h-full flex flex-col items-center lg:items-start justify-center gap-16">
          <div>
            <Title mid={false}>
              About Me
            </Title>
          </div>
          
          <p className="text-sm font-thin">
            Passionate for web development, self-taught with a great ambition to continue growing and learning.<br /> 
            Studied Computer Science, along the way discovered passion for web development, trained in it, and currently continuing to learn and improve skills as a fullstack developer.
          </p>

          <div className="mx-auto">
            <Button>
              Download CV
            </Button>
          </div>


        </div>

      </div>



      {/* <div className="w-full h-5/6 flex justify-center items-center">
        <div className="w-2/5 h-full flex flex-col items-center justify-center gap-10">
          <img className=" aspect-[3/4] h-3/5" src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png" alt="" />

          <Link to="https://www.dropbox.com/s/mzqerludm7pz3fn/CV.pdf?dl=0" target="_blank" >
            <Button>
              <Download />
              <p className="xl:text-lg 2xl:text-2xl">View my CV</p>
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-around h-full w-3/5">
          {
            info.map(( card, key )=> {
              return (
                <div key={key} className="box-border flex gap-2 w-[70%] p-2 border border-dark dark:border-white shadow-lg shadow-dark dark:shadow-white">
                  <div className="flex w-1/4 justify-center items-center">
                    <img className="aspect-square " src={card.image} alt="" />
                  </div>
                  <div className="w-3/4">
                    <p className="text-base 2xl:text-xl font-bold">{card.title}</p>
                    <p className="text-xs 2xl:text-base tracking-wider">
                      {card.content}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div> */}
    </section>
  )
}

export default About;