import { Link } from "react-router-dom";

const Card = ({ title, image, tech, type, githubLink, deployLink }) => {
  return (

    <div className="w-[30rem] h-[32rem] relative flex flex-col gap-8 items-center  shadow-xl shadow-[#000000]">

      <img className="w-full h-1/2 object-cover object-center" src={image} alt="" />
      <div className="flex justify-between items-center px-8 w-full">
        <p className="text-3xl font-bold">{title}</p>
        <p className="bg-black text-white rounded-xl p-2">{type}</p>
      </div>

      <div className="flex justify-start gap-4 w-full px-8">
        {
          tech.map((icon, key) => {
            return (
              <img className="w-10" key={key} src={icon} alt={key} />
            )
          })
        }
      </div>

      <div className="w-full flex justify-around ">
        <Link to={githubLink} target="_blank"> 
          <button className="border-4 px-4 py-3 tracking-[0.1rem] box-border hover:bg-black hover:text-white transition duration-300 ease-in-out">Code</button>
        </Link>

        <Link to={deployLink} target="_blank"> 
          <button className="border-4 px-4 py-3 tracking-[0.1rem] box-border hover:bg-black hover:text-white transition duration-300 ease-in-out">Demo</button>
        </Link>
      </div>
    </div>
  )
}

export default Card;