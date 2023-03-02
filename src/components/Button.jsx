import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Button = ({ content }) => {
  return (
    <button className="box-border flex gap-3 items-center p-2 bg-gradient-to-b from-[#f2295b] to-[#FF3A3A] rounded">
      <FontAwesomeIcon icon={faBell} />
      {content}
    </button>
  )
}

export default Button;