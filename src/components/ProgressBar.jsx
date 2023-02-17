

const ProgressBar = ({ title, icon, percentage }) => {

  return (
    <div className="w-112 p-2 box-border ">
      <div className="flex justify-between items-center px-4">
        <div className="h-16 flex gap-4 items-center">
          <h3>{title}</h3>
          <img className="w-10" src={icon} alt="" />
        </div>
        <p>{percentage}%</p>
      </div>

      <div className="w-full mt-2 h-2 border border-highlight">
        <div style={{width: `${percentage}%`}} className="bg-highlight h-full"></div>
      </div>
    </div>
  )
}

export default ProgressBar;