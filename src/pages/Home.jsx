import Button from "../components/Button";

const Home = () => {

  return (
    <section id="home" className="w-full h-full lg:h-160
    2xl:h-194 pt-24 lg:pt-20 max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-4 lg:gap-0">
      
      <div className="lg:w-1/2  w-full h-112 flex flex-col justify-center items-center lg:items-start gap-4">
        <p className="text-[#c4cfde] 2xl:text-xl">HELLO👋, I'M</p>

        <p style={{ WebkitTextFillColor: 'transparent' }} className="text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-gradient-to-t from-[#f91a1a] to-[rgb(233,0,23)] bg-clip-text w-full text-center lg:text-left">
          Carlos Valer
        </p>
        <div className="flex items-center gap-4">
          <p className="text-2xl 2xl:text-3xl">Fullstack Developer</p>
          <img className=" h-5 2xl:h-6" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Animated-Flag-Peru.gif" alt="" />
        </div>


        <p className="w-5/6 text-[#c4cfde] text-center lg:text-left 2xl:text-xl">
          I work in all phases of the life cycle of a web application, with knowledge of frontend design and development, database management and backend programming.
        </p>
        <a href="#contact" className="mt-12 rounded-xl">
          <Button>
            Work with me
          </Button>
        </a>

      </div>

      <div className="w-full  lg:w-1/2 lg:h-112 2xl:h-132 flex justify-center">
        <figure className="h-full aspect-9/10 relative  shadow-rightBottom flex justify-center rounded-xl after:-z-10 after:rounded-xl after:absolute after:w-full after:h-full after:shadow-leftTop">
          <img className="w-full bottom-0 absolute z-10" src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png" alt="" />
        </figure>
      </div>      
    </section>
  )
}

export default Home;