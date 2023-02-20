import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const Skills = () => {

  const skillsNow = [
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
  ]
  const skillsLearn = []
  const otherSkills = [
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

  const soft = [
    {
      skill: "Time Management",
      img: "https://img.icons8.com/dotty/80/null/wall-clock.png"
    },
    {
      skill: "Emotional Intelligence",
      img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-emotional-human-resources-flaticons-lineal-color-flat-icons.png"
    },
    {
      skill: "Problem Solving",
      img: "https://img.icons8.com/ios/50/null/problem-solving-skills.png"
    },
    {
      skill: "Continuous Learning",
      img: "https://img.icons8.com/ios/50/null/willingness-to-learn.png"
    },
    {
      skill: "Active Listening",
      img: "https://img.icons8.com/ios-filled/100/null/listening--v2.png"
    },
    {
      skill: "Adaptability",
      img: "https://cdn-icons-png.flaticon.com/512/7441/7441240.png"
    },
    {
      skill: "Acountability",
      img: "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/null/external-clipboard-advertising-kiranshastry-lineal-kiranshastry-1.png"
    },
    {
      skill: "Teamwork",
      img: "https://img.icons8.com/external-goofy-line-kerismaker/96/null/external-Teamwork-business-goofy-line-kerismaker.png"
    },
  ]


  return (
    <div id="skills" className="w-full h-200 pt-16 px-24 text-center">
      <p className="text-5xl font-bold">My Skills</p>

      <div className="border w-4/5 h-4/5 flex justify-center grow gap-12">
      {
        skillsNow.map((skill, key)=>{
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

    </div>
  )
}

export default Skills;