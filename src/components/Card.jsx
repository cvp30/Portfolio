import { Link } from "react-router-dom";
import { Github, Preview } from "../icons";

const Card = ({ title, image, description, tech, githubLink, deployLink }) => {
  return (
    <div className=" rounded-lg box-border flex flex-col gap-3 w-96 2xl:w-120 aspect-[10/11] p-1 shadow-lg shadow-dark dark:shadow-white">
      <img src={image} className="w-full rounded-t-lg" />

      <div className="w-full flex flex-col gap-2 dark:text-white">
        <div className="w-full h-6 2xl:h-8 flex justify-start gap-5">
          <p className="text-xl 2xl:text-2xl">{title}</p>
          <div className="flex gap-2">
            <Link to={deployLink} target="_blank">
              <Preview />
            </Link>
            <Link to={githubLink} target="_blank">
              <Github />
            </Link>
          </div>
        </div>

        <p className="text-xs 2xl:text-base font-normal">{description}</p>

        <div className="flex flex-col gap-2">
          <p className="text-xs 2xl:text-base">technologies:</p>
          <div className="flex flex-wrap">
            {
              tech.map((icon, key) => {
                return (
                  <img key={key} className="w-8 h-8" src={icon} alt="" />
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
    // <div className="shadow-lg shadow-dark dark:shadow-white dark:text-white xl:w-72 2xl:w-[22rem] xl:p-3 aspect-[4/5] ">
    //   <div className="w-full h-1/2 flex items-center">
    //     <img className="w-full" src={image} alt="" />
    //   </div>

    //   <div className="box-border w-full xl:h-1/2 2xl:h-2/3 font-bold flex flex-col justify-around items-center gap-2">
    //     <div className="w-full h-7 flex justify-start items-center gap-4">
    //       <h3 className="xl:text-xl 2xl:text-2xl">{title}</h3>
    //       <div className="flex h-6 justify-center items-center gap-2">
    //         <Link className="h-full flex justify-center items-center" to={deployLink} target="_blank">
    //           <Preview />
    //         </Link>
    //         <Link className="h-full flex justify-center items-center" to={githubLink} target="_blank">
    //           <Github />
    //         </Link>
    //       </div>
    //     </div>

    //     <div className="w-full h-1/3 flex gap-2 flex-wrap items-center">
    //       {
    //         tech.map((image, key) => {
    //           return (
    //             <img key={key} className="w-8 h-8" src={image} alt="" />
    //           )
    //         })
    //       }
    //     </div>
    //   </div>
    // </div>
  )
}

export default Card;