import { Github, Preview } from "../icons";

const Card = ({ title, image, description, githubLink, deployLink }) => {
  return (
    <div className=" h-44 lg:h-64 2xl:h-80 aspect-video group relative overflow-hidden">
      <img src={image} className="h-full w-full group-hover:scale-110 transition-all duration-500 ease-in-out" />

      <div className=" absolute flex flex-col gap-2 lg:gap-5 bg-[#000000e2] bottom-0 w-full h-0 group-hover:p-2 group-hover:h-2/3 transition-all duration-500 ease-in-out">
        <p>{title}</p>
        <p className="text-[#a1a1a1] text-xs lg:tracking-[0.07rem]">{description}</p>
        <div className="w-full h-6  lg:h-8 flex justify-center  gap-16 text-red">
          <a href={githubLink} target="_blank">
            <Github />
          </a>
          <a href={deployLink} target="_blank">
            <Preview />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card;