import { Link } from "react-router-dom";


const LinkNetwork = ({ url, image }) => {
  return (
    <Link to={url}  target="_blank">
      <img className="bg-darkGray w-10 p-1 shadow-lg shadow-black rounded" src={image} alt="" />
    </Link>
  )
}

export default LinkNetwork;