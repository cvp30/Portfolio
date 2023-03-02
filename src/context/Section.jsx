import { useEffect, useState } from "react";




const Section = () => {

  const [val, setVal] = useState(window.innerHeight);

  useEffect(() => {
    if(val > 0) {
      setTimeout(() => {
        setVal(value => value-1)
      }, 2);
    }
  },[val])

  return (
    // <>
    //   <div style={{height: val}} className="relative z-20 top-0 left-0 w-1/3 h-full bg-[red]"></div>

    // </>
    <div style={{height: val}} className='absolute w-screen divide-x'>
      <div className="absolute z-20 -top-0 left-0 w-1/3 h-full bg-[red]"></div>

    </div>
  )
}

export default Section;