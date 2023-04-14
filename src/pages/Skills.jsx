import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Title from "../components/Title"
import { skillsNow, skillsLearn, otherSkills } from "../data/skills"


const Skills = () => {

  const [state, setState] = useState(1);

  const display = (arr) => {
    return (
      <div className="h-5/6 w-full flex flex-wrap justify-center items-start py-8">
        {
          arr.map((elem, key) => {
            return (
              <div key={key} className="relative h-36 aspect-square flex justify-center items-center">
                <img className="w-10/12 p-4 hover:w-full transition-all duration-500 ease-in-out" src={elem.icon} alt={elem.title} />
              </div>
            )
          })
        }
      </div>
    )
  }

  const options = [
    'Using Now',
    'Learning',
    'Other Skills',
  ]

  return (
    <div id="skills" className="lg:h-screen h-full max-w-screen-2xl py-20 mx-auto flex flex-col items-center gap-16 font-bold dark:text-white">
      <Title>
        My Skills
      </Title>

      <div className="hidden lg:flex flex-col items-center w-5/6 h-full">
        <div className="flex justify-center items-center lg:gap-0 w-[40rem] h-20 font-normal relative shadow-rightBottom rounded-xl after:-z-10 after:rounded-xl after:absolute after:w-full after:h-full after:shadow-leftTop">
          {
            options.map((opt, idx) => {
              return (
                <button key={idx} onClick={() => setState(idx + 1)} className={`${state === idx + 1 ? 'shadow-rightBottom rounded-xl' : ''} h-full w-1/3 uppercase hover:shadow-rightBottom hover:rounded-xl transition-all duration-500 ease-in-out`}>
                  {opt}
                </button>
              )
            })
          }
        </div>

        {
          state === 1 ?
            display(skillsNow)
            :
            state === 2 ?
              display(skillsLearn)
              :
              display(otherSkills)
        }
      </div>

      <div className="lg:hidden w-full h-16">
        <Swiper

          speed={1500}
          freeMode={true}
          grabCursor={true}
          modules={[Autoplay, Keyboard]}
          autoplay={{
            delay: 700,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          className="h-full"
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 0,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 5,
              spaceBetween: 0,
              centeredSlides: true,
            },
          }}
        >
          {
            [...skillsNow, ...otherSkills].map((skill, key) => {
              return (
                <SwiperSlide key={key}>
                  <img src={skill.icon} className="h-full" />
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>




    </div>
  )
}

export default Skills;