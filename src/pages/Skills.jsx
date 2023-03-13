import { useState } from "react"
import Title from "../components/Title"
import { skillsNow, skillsLearn, otherSkills } from "../data/skills"
const Skills = () => {

  const [state, setState] = useState(1);

  const display = (arr) => {
    return (
      <div className="h-full w-full flex flex-wrap gap-6">
        {
          arr.map((elem, key) => {
            return (
              <div key={key} className="flex flex-col items-center gap-2 w-24 h-36 m-2">
                <img className="w-full p-1" src={elem.icon} alt={elem.title} />
                <p className="text-sm tracking-wider">{elem.title}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <div id="skills" className="h-screen max-w-screen-2xl pt-10 mx-auto flex flex-col items-center gap-16 font-bold dark:text-white">
      <Title>
        My Skills
      </Title>

      <div className="flex flex-col items-center gap-8 w-4/5 h-2/3">
        <div className="flex justify-around gap-10 w-full">
          <button onClick={()=> setState(1)} className={`${state===1?'after:border after:w-full text-orange':'after:w-0'} relative hover:text-orange transition hover:after:duration-300 hover:after:ease-out  hover:after:w-full after:h-0 after:absolute hover:after:border after:border-orange after:left-0 after:-bottom-2`}>Using Now</button>
          <button onClick={()=> setState(2)} className={`${state===2?'after:border after:w-full text-orange':'after:w-0'} relative hover:text-orange transition hover:after:duration-300 hover:after:ease-out  hover:after:w-full after:h-0 after:absolute hover:after:border after:border-orange after:left-0 after:-bottom-2`}>Learning</button>
          <button onClick={()=> setState(3)} className={`${state===3?'after:border after:w-full text-orange':'after:w-0'} relative hover:text-orange transition hover:after:duration-300 hover:after:ease-out  hover:after:w-full after:h-0 after:absolute hover:after:border after:border-orange after:left-0 after:-bottom-2`}>Other Skills</button>
        </div>

        <div className="w-5/6 h-1/2">
          {
            state === 1? 
              display(skillsNow)
              :
              state === 2?
                display(skillsLearn)
                :
                display(otherSkills)
          }
        </div>
      </div>
    </div>
  )
}

export default Skills;