import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import WebDev from '../assets/webDev.png'
import Database from '../assets/database.png'

const About = () => {
  return (
    <div id="about" className="w-full h-screen flex flex-col items-center gap-8 pt-24">
      <p className="titles box-border text-3xl px-4 py-1 rounded">ABOUT ME</p>

      <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-programmer-mobile-app-development-flaticons-lineal-color-flat-icons-3.png" alt="" />
      <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-write-graphic-design-xnimrodx-blue-xnimrodx.png" alt="" />
      <img src="" alt="" />
      {/* <div className="w-1/2 text-xl">
        <p>
          I consider myself passionate about web development, self-taught,
          with a great ambition to continue growing and learning.
        </p>
        <br />
        <p>
          I am currently looking for my first job and the great opportunity
          to show my skills and apply them to some real life environment
        </p>
      </div>

      <Link href="https://www.dropbox.com/s/mzqerludm7pz3fn/CV.pdf?dl=0" target="_blank">
        <button className=" box-border border-4 hover:bg-black hover:text-white transition duration-300 ease-in-out py-3 px-4   text-2xl ">
          Download CV
          <FontAwesomeIcon icon={faDownload} className="ml-4" />
        </button>
      </Link>

      <div className='text-lg text-center flex justify-center gap-44 w-full h-1/4'>
        <div className='w-48  '>
          <div className='text-6xl font-bold text-primary h-2/3 pt-12'>UI/UX</div>
        </div>

        <div className='w-48  '>
          <img className='mx-auto h-2/3  pt-6' src={WebDev}/>
        </div>
        
        <div className='w-48 '>
          <img className='mx-auto h-2/3  pt-6' src={Database} alt="" />
        </div>
      </div>

      <p className='text-xl w-1/2 text-center'>
      I can create and design the site based on your needs and suggestions, 
      I can also start from scratch and consult you during the work
      </p> */}
    
    </div>
  )
}

export default About;