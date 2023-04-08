const Title = ({children, mid=true}) => {
  return (
    <div className={`${mid ? '':'lg:items-start'} items-center relative flex flex-col  font-bold`}>
      <p className="title whitespace-nowrap text-4xl lg:text-6xl uppercase">
        {children}
      </p>
      <p className="text-2xl lg:text-3xl absolute -bottom-4">
        {children}
      </p>
    </div>
  )
}

export default Title;