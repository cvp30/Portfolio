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
    
    <div id="about" className="h-screen max-w-screen-2xl pt-10 mx-auto flex flex-col justify-around items-center font-bold dark:text-white">
      <Title>
        About Me
      </Title>

      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="w-2/5 h-full flex flex-col items-center justify-center gap-10">
          <img className=" aspect-[3/4] h-3/5" src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png" alt="" />

          <Link to="https://www.dropbox.com/s/mzqerludm7pz3fn/CV.pdf?dl=0" target="_blank" >
            <Button>
              <Download />
              <p>View my CV</p>
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
                    <p className="font-bold">{card.title}</p>
                    <p className="text-xs tracking-wider">
                      {card.content}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default About;