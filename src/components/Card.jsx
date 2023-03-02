import { Link } from "react-router-dom";
import Button from "./Button";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
const Card = ({ title, image, tech, type, githubLink, deployLink }) => {
  return (

    <div className="w-96 h-120 relative flex flex-col gap-8 items-center bg-darkGray hover:bg-[#2c2c2c] transition duration-300 ease-in-out shadow-xl shadow-[#000000] rounded-lg">

      <img className="w-full h-1/2 object-cover object-center rounded-t-lg " src={image} alt="" />
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
          <Button content="code" icon={faCode} />
        </Link>

        <Link to={deployLink} target="_blank">
        <Button content="demo" icon={faEye} />
        </Link>
      </div>
    </div>
  )
}

export default Card;