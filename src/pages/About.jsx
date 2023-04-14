import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";


import Button from "../components/Button";
import Title from "../components/Title";
import { Backend, Design, Frontend } from "../icons";

const About = () => {

  const features = [
    {
      'icon': <Backend />,
      'title': 'Backend',
      'text': 'Database administration, schema design, SQL and performance optimization.',
    },
    {
      'icon': <Design />,
      'title': 'Design',
      'text': 'Custom and responsive designs for web and apps. Experience in web development integrating design and functionality.',
    },
    {
      'icon': <Frontend />,
      'title': 'Web Development',
      'text': 'User interface design, CSS styling and programming in languages such as HTML, JavaScript, React, etc.',
    },
  ]

  return (

    <section id="about" className="w-full h-full max-w-screen-2xl pt-20 pb-14 mx-auto flex flex-col gap-4">
      <div className=" h-96 flex flex-col-reverse lg:flex-row justify-center items-center">

        <figure className="hidden lg:w-1/2 h-full lg:flex items-center justify-center">
          <img className=" aspect-[3/4] h-full" src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png" alt="" />
        </figure>

        <div className="lg:w-1/2 h-full flex flex-col items-center lg:items-start justify-center gap-16">
          <div>
            <Title mid={false}>
              About Me
            </Title>
          </div>

          <p className="text-sm text-center lg:text-start font-thin p-2 lg:p-0">
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

      <div className="hidden w-[90%] lg:w-full h-64 lg:flex flex-col mx-auto lg:flex-row gap-8 mt-10">
        {
          features.map((feature, key) => {
            return (
              <div key={key} className="h-64 lg:h-full aspect-[4/3] flex flex-col relative shadow-rightBottom rounded-xl after:-z-10 after:rounded-xl after:absolute after:w-full after:h-full after:shadow-leftTop">
                <div className="h-1/3 w-full flex justify-center text-red">
                  {feature.icon}
                </div>

                <div className="h-2/3 w-full flex flex-col justify-start gap-2 p-3">
                  <p className="w-full text-2xl uppercase font-bold">{feature.title}</p>
                  <p className="w-full ">{feature.text}</p>
                </div>
              </div>
            )
          } )
        }
      </div>
      <div className="lg:hidden w-[95%] lg:w-full h-72 flex mx-auto items-center mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-full h-full"
        >
          {
            features.map((feature, key) => {
              return (
                <SwiperSlide key={key}>
                  <div className="mx-auto h-60 m-5 aspect-[4/3] flex flex-col relative shadow-rightBottom rounded-xl after:-z-10 after:rounded-xl after:absolute after:w-full after:h-full after:shadow-leftTop">
                    <div className="h-1/3 w-full flex justify-center text-red">
                      {feature.icon}
                    </div>

                    <div className="h-2/3 w-full flex flex-col justify-start gap-2 p-3">
                      <p className="w-full text-xl text-red uppercase">{feature.title}</p>
                      <p className="w-full">{feature.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>
    </section>
  )
}

export default About;