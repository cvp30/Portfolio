import Button from "../components/Button";

const Home = () => {

  return (
    <section id="home" className="w-full h-full lg:h-[40rem] pt-24 lg:pt-20 max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-4 lg:gap-0">
      
      <div className="lg:w-1/2  w-full h-[28rem] flex flex-col justify-center items-center lg:items-start gap-4">
        <p className="text-[#c4cfde]">HELLO👋, I'M</p>

        <p style={{ WebkitTextFillColor: 'transparent' }} className="text-5xl lg:text-6xl font-bold bg-gradient-to-t from-[#ff5353] to-[#ff0000] bg-clip-text w-full text-center lg:text-left">Carlos Valer</p>
        <div className="flex items-center gap-4">
          <p className="text-2xl">Fullstack Developer</p>
          <img className=" h-5" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Animated-Flag-Peru.gif" alt="" />
        </div>


        <p className="w-5/6 text-[#c4cfde] text-center lg:text-left">
          I work in all phases of the life cycle of a web application, with knowledge of frontend design and development, database management and backend programming.
        </p>
        <div className="pt-12">
          <Button>
            Work with me
          </Button>
        </div>

      </div>

      <div className="w-full  lg:w-1/2 h-56 lg:h-[28rem] flex justify-center">
        <figure className="h-full aspect-[9/10] relative  shadow-rightBottom flex justify-center rounded-xl after:-z-10 after:rounded-xl after:absolute after:w-full after:h-full after:shadow-leftTop">
          <img className="w-full bottom-0 absolute z-10" src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png" alt="" />
        </figure>
      </div>      
    </section>
    // <section id="home" className=" lg:w-screen h-screen mx-auto max-w-screen-2xl flex items-center justify-center pt-5">
    //   <div className="card relative flex justify-center bg-cover bg-center bg-homeImg box-border w-[90%] max-w-screen-2xl lg:w-[80%] h-[80%] border-4 border-[black]">
    //     <div className="z-10 w-full h-full absolute bg-[#0000004d]"></div>

    //     <figure className="z-20 hidden lg:flex items-center justify-center w-1/2 h-full ">
    //       {/* <img className="w-full h-full" src={bgImage} alt="" /> */}
    //       <img
    //         className="h-full"
    //         src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png"
    //       />
    //       {/* <Hexagon /> */}
    //     </figure>

    //     <div className="z-20 h-full w-full lg:w-1/2 flex flex-col items-center justify-center gap-20 lg:tracking-[.2em]">
    //       <div className="flex flex-col items-center lg:items-start gap-6">
    //         <p className="text-base">Hello👋, I'm</p>
    //         <p className="text-5xl text-white font-bold">Carlos Valer</p>

    //         <div className="flex items-center gap-4">
    //           <p className="text-2xl text-white">Fullstack Developer</p>
    //           <img className=" h-5" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Animated-Flag-Peru.gif" alt="" />
    //         </div>
    //       </div>



    //       <Button>
    //         Work with me
    //       </Button>

    //     </div>
    //   </div>
    // </section>

  )
}

export default Home;