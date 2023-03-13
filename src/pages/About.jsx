
const About = () => {
  return (
    <div id="about" className="h-full max-w-screen-2xl mx-auto flex flex-col justify-between items-center pt-20 font-bold dark:text-white">
      <h2 className="text-orange">About me</h2>

      <div className="flex justify-around w-full h-96 px-12">
        <div className="box-border flex flex-col gap-8 w-80 p-4 shadow-lg shadow-orange">
          <div className="flex justify-center items-center gap-2">
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-programmer-mobile-app-development-flaticons-lineal-color-flat-icons-3.png" alt="" />
            <p>Who I am?</p>
          </div>
          <p className=" text-xs tracking-wider">
            Hi, I consider myself passionate about web development, self-taught,
            with a great ambition to continue growing and learning.
          </p>
        </div>

        <div className="box-border flex flex-col gap-8 w-80 p-4 shadow-lg  shadow-orange">
          <div className="flex justify-center items-center gap-2">
            <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-write-graphic-design-xnimrodx-blue-xnimrodx.png" alt="" />
            <p>Education</p>
          </div>
          <p className="text-xs tracking-wider">
            I studied Computer Science, along the way I discovered my passion for web development,
            I trained in it and currently I continue to learn and improve my skills as a fullstack developer.
          </p>
        </div>

        <div className="box-border flex flex-col gap-8 w-80 p-4 shadow-lg shadow-orange">
          <div className="flex justify-center items-center gap-2">
            <img src="https://img.icons8.com/external-prettycons-flat-prettycons/64/null/external-job-social-media-prettycons-flat-prettycons.png" alt="" />
            <p>Job</p>
          </div>
          <p className="text-xs tracking-wider">
            I am currently looking for my first job and the great opportunity
            to show my skills and apply them to some real life environment
          </p>
        </div>
      </div>

    </div>
    // <div id="about" className="w-full h-full max-w-screen-2xl flex flex-col items-center mx-auto gap-20 pt-24">
    //   <p className="titles box-border text-3xl px-4 py-1 rounded">ABOUT ME</p>

    //   <div className='flex gap-16 container'>
    //     <div className='relative py-10 px-6 border-2 border-black shadow-lg shadow-black bg-darkGray w-1/3 rounded-lg flex flex-col gap-2 items-center'>
    //       <img className='absolute -top-8 left-40' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-programmer-mobile-app-development-flaticons-lineal-color-flat-icons-3.png" alt="" />
    //       <p className='font-bold text-primary'>WHO I AM?</p>
    //       <p className='text-sm'>I consider myself passionate about web development, self-taught,
    //       with a great ambition to continue growing and learning.</p>
    //     </div>

    //     <div className='relative py-10 px-6 border-2 border-black shadow-lg shadow-black bg-darkGray w-1/3 rounded-lg flex flex-col gap-2 items-center'>
    //       <img className='absolute -top-8 left-40' src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-write-graphic-design-xnimrodx-blue-xnimrodx.png" alt="" />
    //       <p className='font-bold text-primary'>EDUCATION</p>
    //       <p className='text-sm'>
    //         I studied Computer Science, along the way I discovered my passion for web development, 
    //         I trained in it and currently I continue to learn and improve my skills as a fullstack developer. 
    //       </p>
    //     </div>

    //     <div className='relative py-10 px-6 border-2 border-black shadow-lg shadow-black bg-darkGray w-1/3 rounded-lg flex flex-col gap-2 items-center'>
    //       <img className='absolute -top-12 left-36' src="https://img.icons8.com/external-prettycons-flat-prettycons/94/null/external-job-social-media-prettycons-flat-prettycons.png" alt="" />
    //       <p className='font-bold text-primary'>JOB</p>
    //       <p className='text-sm'>
    //         I am currently looking for my first job and the great opportunity
    //         to show my skills and apply them to some real life environment
    //       </p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default About;