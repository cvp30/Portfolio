import Button from "../components/Button";

const Home = () => {

  return (
    <section id="home" className=" lg:w-screen h-screen mx-auto max-w-screen-2xl flex items-center justify-center pt-5">
      <div className="card relative flex justify-center bg-cover bg-center bg-homeImg box-border w-[90%] max-w-screen-2xl lg:w-[80%] h-[80%] border-4 border-[black]">
        <div className="z-10 w-full h-full absolute bg-[#0000004d]"></div>
        <figure className="z-20 hidden lg:flex justify-center w-1/2 h-full ">
          
          <img
            className="h-full"
            src="https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/photo1.png"
          />
        </figure>

        <div className="z-20 h-full w-full lg:w-1/2 flex flex-col items-center justify-center gap-20 lg:tracking-[.2em]">
          <div className="flex flex-col items-center lg:items-start gap-6">
            <p className="text-base">Hello👋, I'm</p>
            <p className="text-5xl text-white font-bold">Carlos Valer</p>

            <div className="flex items-center gap-4">
              <p className="text-2xl text-white">Fullstack Developer</p>
              <img className=" h-5" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Animated-Flag-Peru.gif" alt="" />
            </div>
          </div>

          <Button>
            Work with me
          </Button>

        </div>
      </div>
    </section>

  )
}

export default Home;