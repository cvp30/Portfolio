

const Title = ({children}) => {
  return (
    <div className="relative">
      <p className="text-red xl:text-5xl 2xl:text-6xl">
        {children}
      </p>
      <span className="absolute w-1/2 h-1 -bottom-3 bg-red"></span>
      <span className="absolute w-1/5 h-1 -bottom-5 bg-red"></span>
    </div>
  )
}

export default Title;