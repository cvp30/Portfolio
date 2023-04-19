const Button = ( { children } ) => {
  
    return (
    <button className="h-12 2xl:h-16 2xl:text-xl px-3 py-3 shadow-rightBottom rounded-xl transition-all hover:shadow-lg hover:shadow-red  duration-300 ease-in-out">  
      { children }
    </button>
  )
}

export default Button;