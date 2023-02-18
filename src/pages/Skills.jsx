import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons'
const Skills = () => {

  const skills = [
    {
      title: "React",
      icon:"https://img.icons8.com/color/48/null/react-native.png",
      percentage:95
    },
    {
      title: "Javascript",
      icon:"https://img.icons8.com/color/48/null/javascript--v1.png",
      percentage:80
    },
    // {
    //   title: "Sequelize",
    //   icon:"https://sequelize.org/img/logo.svg",
    //   percentage:64
    // },
    {
      title: "Express.js",
      icon:"https://img.icons8.com/officel/40/null/express-js.png",
      percentage:60
    },
    {
      title: "postgreSQL",
      icon:"https://img.icons8.com/color/96/null/postgreesql.png",
      percentage:85
    },
    {
      title: "HTML5",
      icon:"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png",
      percentage:80
    },
    {
      title: "CSS",
      icon:"https://img.icons8.com/fluency/96/null/css3.png",
      percentage:75
    },
    {
      title: "Bootstrap",
      icon:"https://img.icons8.com/color/96/null/bootstrap.png",
      percentage:75
    },
    {
      title: "Tailwind",
      icon:"https://img.icons8.com/color/96/null/tailwindcss.png",
      percentage:65
    },
    {
      title: "Python",
      icon:"https://img.icons8.com/fluency/96/null/python.png",
      percentage:80
    },
    {
      title: "C / C++",
      icon:"https://img.icons8.com/color/96/null/c-plus-plus-logo.png",
      percentage:100
    },
  ]


  const [active, setActive] = useState(true);
  console.log(active)
  return (
    <div id="skills" className="w-full h-200 pt-16 px-24 text-center bg-[#202831]">
      <p className="text-5xl font-bold">My Skills</p>

      <div className=" flex justify-center  mt-10">
        <button onClick={()=> setActive(!active)} className={active? "py-2 px-3 text-lg border-none bg-highlight text-[black] transition duration-700 ease-in-out font-bold": "py-2 px-3 text-lg border-none transition duration-700 ease-in-out font-bold"} ><h2>Tech Skills</h2></button>
        <button onClick={()=> setActive(!active)} className={!active? "py-2 px-3 text-lg border-none bg-highlight text-[black] transition duration-700 ease-in-out font-bold": "py-2 px-3 text-lg border-none transition duration-700 ease-in-out font-bold"}><h2>Soft Skills</h2></button>
      </div>

      <div className="">

      </div>

      <div className={active ? "mt-12 h-3/5 w-5/6 m-auto grid grid-cols-2 gap-x-24  ": "hidden"}>
      {
        skills.map((skill, key)=>{
          return (
            <ProgressBar 
              key={key}
              title={skill.title}
              icon={skill.icon}
              percentage={skill.percentage}
            />
          )
        })
      }
      </div>

      <div className={!active?" h-3/5 mt-12 w-5/6 m-auto flex justify-center items-center":"hidden"}>
        <div className="h-96 w-96 rounded-full  relative">
          <div className="flex gap-2 items-center absolute -left-16 -top-4">
            <p>Time Management</p>
            <div className="w-16 h-16 rounded-full p-1 border-8 border-[#f0a10e] bg-white">
              <img src="https://img.icons8.com/dotty/80/null/wall-clock.png" alt="" />
            </div>
          </div>

          <div className="flex gap-2 items-center absolute top-14 -left-[10.5rem]">
            <p>Emotional Intelligence</p>
            <div className="w-16 h-16 rounded-full p-1 border-8 border-[#f0a10e] bg-white">
              <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-emotional-human-resources-flaticons-lineal-color-flat-icons.png" alt="" />
            </div>
          </div>

          <div className="flex gap-2 items-center absolute top-40 -left-[7.5rem]">
            <p>Teamwork</p>
            <div className="w-16 h-16 rounded-full p-1 border-8 border-[#f0a10e] bg-white">
              <img src="https://img.icons8.com/external-goofy-line-kerismaker/96/null/external-Teamwork-business-goofy-line-kerismaker.png" alt="" />
            </div>
          </div>

          <div className="flex gap-2 items-center absolute bottom-16 -left-32">
            <p>Problem Solving</p>
            <div className="w-16 h-16 rounded-full p-1 border-8 border-[#f0a10e] bg-white">
              <img src="https://img.icons8.com/ios/50/null/problem-solving-skills.png" alt="" />
            </div>
          </div>
          
          <div className="flex gap-2 items-center absolute -left-20 -bottom-4">
            <p>Continuous Learning</p>
            <div className="w-16 h-16 rounded-full p-1 border-8 border-[#f0a10e] bg-white">
              <img src="https://img.icons8.com/ios/50/null/willingness-to-learn.png" alt="" />
            </div>
          </div>


          <div className="flex gap-2 items-center absolute  -top-4 -right-24">
            <div className="w-16 h-16 rounded-full p-1 border-8 border-[#f0a10e] bg-white">
              <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-emotional-human-resources-flaticons-lineal-color-flat-icons.png" alt="" />
            </div>
            <p>Emotional Intelligence</p>
          </div>

          <div className="flex gap-2 items-center absolute  top-14 -right-44">
            <div className="w-16 h-16 rounded-full p-1 border-8 border-[#f0a10e] bg-white">
              <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-emotional-human-resources-flaticons-lineal-color-flat-icons.png" alt="" />
            </div>
            <p>Emotional Intelligence</p>
          </div>


        </div>
      </div>
      

    </div>
  )
}

export default Skills;