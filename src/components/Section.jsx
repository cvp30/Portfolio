
const Section = ({direction, icon, name}) => {
  return (
    <a href={direction} className='relative group flex flex-col justify-center items-center w-full h-10'>
      <span className="flex items-center text-orange absolute group-hover:translate-x-10 group-hover:text-[rgba(0,0,0,0)] h-full transition-all duration-500 ease">
        {icon}
      </span>
      <p className='absolute left-2 text-[rgba(0,0,0,0)] group-hover:translate-x-10 group-hover:text-orange transition-all duration-500 ease text-sm'>
        {name}
      </p>
    </a>
  )
}

export default Section;