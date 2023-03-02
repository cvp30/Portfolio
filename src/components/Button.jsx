import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ content, icon }) => {

    return (
    <button className=" box-border flex gap-3 items-center p-2 bg-gradient-to-b from-[#f2295b] to-[#FF3A3A] rounded">
      <FontAwesomeIcon icon={icon} />
      {content}
    </button>
  )
}

export default Button;