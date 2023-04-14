const Title = ({children, mid=true}) => {
  return (
    <div className={`${mid ? '':'lg:items-start'} items-center relative flex flex-col  font-bold`}>
      <p className="title whitespace-nowrap text-4xl lg:text-5xl uppercase">
        {children}
      </p>
      <p className="text-3xl lg:text-4xl uppercase absolute -bottom-6">
        {children}
      </p>
    </div>
  )
}

export default Title;