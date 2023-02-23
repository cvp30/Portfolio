import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const Skills = () => {

  const skillsNow = [
    {
      title: "React",
      icon: "https://img.icons8.com/officel/80/null/react.png",
    },
    {
      title: "Javascript",
      icon: "https://img.icons8.com/color/48/null/javascript--v1.png",
    },
    {
      title: "Express.js",
      icon: "https://img.icons8.com/office/160/null/express-js.png",
    },
    {
      title: "PostgreSQL",
      icon: "https://img.icons8.com/color/96/null/postgreesql.png",
    },
    {
      title: "HTML5",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png",
    },
    {
      title: "CSS",
      icon: "https://img.icons8.com/fluency/96/null/css3.png",
    },
    {
      title: "Bootstrap",
      icon: "https://img.icons8.com/color/96/null/bootstrap.png",
    },
    {
      title: "Tailwind",
      icon: "https://img.icons8.com/color/96/null/tailwindcss.png",
    },
  ]
  const skillsLearn = [
    {
      title: "Angular",
      icon: "https://img.icons8.com/fluency/96/null/angularjs.png",
    },
    {
      title: "TypeScript",
      icon: "https://img.icons8.com/color/96/null/typescript.png"
    }
  ]
  const otherSkills = [
    {
      title: "Python",
      icon: "https://img.icons8.com/fluency/96/null/python.png",
    },
    {
      title: "C++",
      icon: "https://img.icons8.com/color/96/null/c-plus-plus-logo.png",
    },
    {
      title: "C",
      icon: "https://img.icons8.com/color/96/null/c-programming.png"
    }
  ]

  const display = (arr) => {
    return (
      <div className="flex flex-wrap gap-8">
        {
          arr.map(elem => {
            return (
              <div className="flex flex-col items-center gap-2 w-24 m-2">
                <img className="w-full p-2" src={elem.icon} alt={elem.title} />
                {/* <p className="font-thin">{elem.title}</p> */}
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div id="skills" className="w-full flex flex-col items-center font-bold pt-12">
      <p className="tracking-[.4rem] text-5xl">My Skills</p>

      <div className="flex flex-col items-center gap-8 w-1/3 py-12">
        <p className="text-2xl">Using Now:</p>
        { display(skillsNow)}
      </div>

      <div className="flex justify-center w-full px-60 ">
        <div className="flex flex-col items-center gap-8 px-24 py-12">
          <p className="text-2xl">Learning:</p>
          { display(skillsLearn)}
        </div>

        <div className="flex flex-col items-center gap-8 px-24 py-12">
          <p className="text-2xl">Other Skills:</p>
          { display(otherSkills)}
        </div>


      </div>



      {/* <div className="flex gap-6 mx-16">
        <div className=" shadow px-4 py-2 shadow-primary hover:shadow-lg hover:shadow-primary box-border w-1/3 flex flex-col gap-8">
          <p className="">USING NOW:</p>
          {display(skillsNow)}
        </div>

        <div className=" shadow px-4 py-2 shadow-primary hover:shadow-lg hover:shadow-primary box-border w-1/3 flex flex-col gap-8">
          <p>LEARNING:</p>
          { display(skillsLearn) }

        </div>

        <div className=" shadow px-4 py-2 shadow-primary hover:shadow-lg hover:shadow-primary box-border w-1/3 flex flex-col gap-8">
          <p>OTHER SKILLS:</p>
          { display(otherSkills) }
        </div>

      </div> */}
    </div>
  )
}

export default Skills;