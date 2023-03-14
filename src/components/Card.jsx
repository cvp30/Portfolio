import { Link } from "react-router-dom";
import Button from "./Button";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import { View, Github } from "../icons";

const Card = ({ title, image, tech, type, githubLink, deployLink }) => {
  return (
    <div className="shadow-lg shadow-dark dark:shadow-white dark:text-white w-72 aspect-[3/4] p-3">
      <div className="w-full h-1/2 flex items-center">
        <img className="w-full" src={image} alt="" />
      </div>

      <div className="box-border w-full h-1/2 font-bold flex flex-col items-center gap-2">
        
        <h3>{title}</h3>
        <div className=" w-full flex justify-around">
          <Link to={deployLink} target="_blank">
            <Button>
              <View />
              <p className="text-xs">Preview</p>
            </Button>
          </Link>
          <Link to={githubLink} target="_blank">
            <Button>
              <Github />
              <p className="text-xs">Github</p>
            </Button>
          </Link>
        </div>
        <div className="w-full h-full flex gap-2 flex-wrap items-center">
          {
            tech.map((image, key) => {
              return (
                <img key={key} className="w-8 h-8" src={image} alt="" />
              )
            })
          }
        </div>

      </div>
      {/* <div className="w-full h-1/2 border px-4 flex items-center justify-center">
        <img className="h-[60%] w-2/3" src={image} alt="" /> */}
      {/* <div className="h-full w-1/3 vertical flex justify-center items-center font-bold">
          <h3>Hotel Booking</h3>
        </div> */}
      {/* </div> */}
    </div>
    // <div className="w-96 h-120 relative flex flex-col gap-8 items-center bg-darkGray hover:bg-[#2c2c2c] transition duration-300 ease-in-out shadow-xl shadow-[#000000] rounded-lg">

    //   <img className="w-full h-1/2 object-cover object-center rounded-t-lg " src={image} alt="" />
    //   <div className="flex justify-between items-center px-8 w-full">
    //     <p className="text-3xl font-bold">{title}</p>
    //     <p className="bg-black text-white rounded-xl p-2">{type}</p>
    //   </div>

    //   <div className="flex justify-start gap-4 w-full px-8">
    //     {
    //       tech.map((icon, key) => {
    //         return (
    //           <img className="w-10" key={key} src={icon} alt={key} />
    //         )
    //       })
    //     }
    //   </div>

    //   <div className="w-full flex justify-around ">
    //     <Link to={githubLink} target="_blank">
    //       <Button content="code" icon={faCode} />
    //     </Link>

    //     <Link to={deployLink} target="_blank">
    //     <Button content="demo" icon={faEye} />
    //     </Link>
    //   </div>
    // </div>
  )
}

export default Card;