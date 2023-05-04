const Title = ({ children, mid = true }) => {
  return (
    <div className={`${mid ? '' : 'lg:items-start'} items-center relative flex flex-col  font-bold`}>
      <p className=" text-3xl lg:text-4xl 2xl:text-5xl text-skyBlue drop-shadow-iconSky">
        {children}
      </p>

      <p className=" title absolute whitespace-nowrap uppercase text-4xl lg:text-5xl 2xl:text-6xl bottom-6 2xl:bottom-8">
        {children}
      </p>
    </div>
  )
}

export default Title;