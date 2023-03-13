import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ content, icon }) => {
  
  //  box-border  relative border border-orange text-center text-orange rgb(255, 87, 36)
    return (
    <button className="flex gap-2 justify-center items-center px-3 py-2 mx-auto bg-white rounded-3xl shadow-lg shadow-[rgba(255,87,36,.6)] transition-all duration-200 ease outline-none hover:bg-orange hover:text-white hover:-translate-y-1.5 group active:-translate-y-px">
      <FontAwesomeIcon icon={icon} bounce/>
      {content}
    </button>
  )
}

export default Button;