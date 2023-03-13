

const Title = ({children}) => {
  return (
    <div className="relative">
      <h2 className="text-orange">
        {children}
      </h2>
      <span className="absolute w-1/3 h-1 -bottom-3 bg-orange"></span>
      <span className="absolute w-1/5 h-1 -bottom-5 bg-orange"></span>
    </div>
  )
}

export default Title;