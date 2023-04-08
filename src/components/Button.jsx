const Button = ({ children }) => {
  
    return (
    <button className="h-12 flex gap-2 justify-center items-center px-3 py-3 mx-auto lg:mx-0 border dark:text-dark  shadow-lg shadow-[rgba(255,87,36,.6)] transition-all duration-200 ease outline-none hover:bg-red hover:text-white dark:hover:text-white hover:-translate-y-1.5 group-active:-translate-y-px">
      { children }
    </button>
  )
}

export default Button;