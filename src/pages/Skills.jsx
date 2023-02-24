import { skillsNow, skillsLearn, otherSkills } from "../data/skills"
const Skills = () => {

  const display = (arr) => {
    return (
      <div className="flex flex-wrap gap-x-24 gap-y-12 mx-8">
        {
          arr.map((elem, key) => {
            return (
              <div key={key} className="flex flex-col items-center gap-2 w-24 m-2">
                <img className="w-full p-2" src={elem.icon} alt={elem.title} />
                <p>{elem.title}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div id="skills" className="w-full flex flex-col items-center font-bold pt-24">
      <p className="tracking-[.4rem] text-5xl">My Skills</p>

      <div className="flex flex-col gap-8 w-3/5 py-12">
        <p className="text-2xl">Using Now:</p>
        {display(skillsNow)}
      </div>

      <div className="flex flex-col gap-8 w-3/5 py-12">
        <p className="text-2xl">Learning:</p>
        {display(skillsLearn)}
      </div>

      <div className="flex flex-col gap-8 w-3/5 py-12">
        <p className="text-2xl">Other Skills:</p>
        {display(otherSkills)}
      </div>

    </div>
  )
}

export default Skills;