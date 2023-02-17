import ProgressBar from "../components/ProgressBar";

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
    // {
    //   title: "Express.js",
    //   icon:"https://img.icons8.com/officel/40/null/express-js.png",
    //   percentage:60
    // },
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

  return (
    <div id="skills" className="w-full h-200 pt-16 px-44 text-center bg-[#202831]">
      <p className="text-5xl font-bold">My Skills</p>

      <div className="flex flex-wrap gap-y-8 gap-x-16 justify-between">
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

      <div className="">
    
      </div>

    </div>
  )
}

export default Skills;