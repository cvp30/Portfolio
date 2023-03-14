import { Link } from "react-router-dom";
import Button from "./Button";
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
    </div>
  )
}

export default Card;