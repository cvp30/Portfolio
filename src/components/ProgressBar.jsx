import { useEffect, useState } from "react";


const ProgressBar = ({ title, icon, percentage }) => {
  const [value, setValue] = useState(0);

  useEffect(()=>{
    if(value < percentage) setValue(value+1);
  }, [value])

  return (
    <div className="w-full box-border">
      <div className="px-4">
        <div className="h-8 pb-4 flex gap-2 items-center">
          <img className="w-10" src={icon} alt="" />
          <h3>{title}</h3>
        </div>
      </div>

      <div className="w-full mt-1 h-3 border border-highlight rounded">
        <div style={{width: `${value}%`}} className="relative bg-gradient-to-b from-highlight via-[black] to-[orange] h-full rounded">
          <p className="bg-highlight z-20 text-[black] font-bold rounded-lg box-border w-14 absolute -right-7 -top-10">
            {percentage}%
            <div className="-z-10 absolute w-4 h-4 bg-highlight  rotate-45 right-5 top-3"></div>  
          </p>

        </div>

      </div>
    </div>
  )
}

export default ProgressBar;