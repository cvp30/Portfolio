import { skillsNow, skillsLearn, otherSkills } from "../data/skills"
const Skills = () => {

  const display = (arr) => {
    return (
      <div className="flex flex-wrap gap-x-12 gap-y-12 mx-8 p-2 bg-darkGray  border-black shadow-lg shadow-black rounded-xl">
        {
          arr.map((elem, key) => {
            return (
              <div key={key} className="flex flex-col items-center gap-2 w-16 m-2">
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
    <div id="skills" className="w-full max-w-screen-2xl mx-auto flex flex-col items-center font-bold pt-24">
      <p className="titles box-border text-3xl px-4 py-1 rounded">MY SKILLS</p>

      <div className="flex flex-col">
        <div className="flex flex-col gap-8 w-full py-12">
          <p className="text-2xl text-primary">Using Now:</p>
          {display(skillsNow)}
        </div>

        <div className="flex flex-col gap-8 w-1/3 py-12">
          <p className="text-2xl text-primary">Learning:</p>
          {display(skillsLearn)}
        </div>

        <div className="flex flex-col gap-8 w-1/2 py-12">
          <p className="text-2xl text-primary">Other Skills:</p>
          {display(otherSkills)}
        </div>
      </div>


    </div>
  )
}

export default Skills;