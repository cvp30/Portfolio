
const Section = ({direction, icon, name}) => {
  return (
    <a href={direction} className='relative group flex flex-col justify-center items-center w-full h-10'>
      <span className="flex items-center text-red absolute group-hover:translate-x-10 group-hover:text-[rgba(0,0,0,0)] h-full transition-all duration-500 ease">
        {icon}
      </span>
      <p className="absolute -translate-x-full text-[rgba(0,0,0,0)] group-hover:text-red group-hover:translate-x-0 transition-all duration-500 ease">
        {name}
      </p>
    </a>
  )
}

export default Section;