import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Title from '../components/Title';
const Contact = () => {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formRef.current)
    // emailjs.sendForm('service_56e9qaf', 'template_eyx3pnb', form.current, '3siD_3fKDOAd1t8nH')
    //   .then((result) => {
    //     alert(result.text);
    //   }, (error) => {
    //     alert(error.text);
    //   });
  };

  return (
    <div id="contact" className="flex flex-col justify-around items-center w-full max-w-screen-2xl mx-auto h-screen pt-10">
      <Title>Contact Me</Title>

      <div className='relative box-border h-4/5 max-w-screen-2xl aspect-video flex flex-col'>
        <img className='absolute w-full h-full -z-20 rounded-xl shadow-lg shadow-dark dark:shadow-white' src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?b=1&s=170667a&w=0&k=20&c=2sJEN1Hhg6heUi1ZxKs6pJDwcyLYXPc4pUGd3hEjOjE=" alt="" />

        <div className='w-1/2 h-full p-4'>

          <form ref={formRef} className='w-full h-full flex flex-col justify-center items-center gap-2 font-bold text-sm'>
            <input style={{background:'none'}} className='w-full outline-none p-2 border border-white text-white rounded' type="text" placeholder='Your Name...'/>
            <input style={{background:'none'}} className='w-full outline-none p-2 border border-white text-white rounded' type="email" placeholder='Your Email...' />
            <textarea style={{background:'none'}} className='w-full outline-none p-2 border border-white text-white rounded' cols="30" rows="10" placeholder='I want to contact you...'/>
            <button onClick={sendEmail} >Send</button>
          </form>
        </div>

      </div>
      {/* <form onSubmit={sendEmail} ref={formRef} >
      </form> */}
      {/* <p className="titles box-border text-3xl px-4 py-1 rounded">CONTACT ME</p> */}

      {/* <form ref={form} onSubmit={sendEmail}  className=" w-2/5 h-full py-8 mt-12 flex flex-col items-center gap-8">
        <input style={{background:'none'}} className='w-full p-4 outline-none  border-l-black border-l-4 border-b-black border-b-4' type="text" name="user_name" placeholder='Your Name' autoComplete="off"/>
        
        <input style={{background:'none'}} className='w-full p-4 outline-none  border-l-black border-l-4 border-b-black border-b-4' type="email" name="user_email" placeholder='Your Email' autoComplete="off"/>
        
        <textarea style={{background:'none'}} className='w-full h-60 p-4 outline-none  border-l-black border-l-4 border-b-black border-b-4 resize-none' name="message" placeholder='I want to contact you...'/>
        
        <button className='box-border flex gap-3 items-center py-1 px-3  bg-gradient-to-b from-[#f2295b] to-[#FF3A3A] rounded'>send</button>
      </form> */}
    </div>
  )
}

export default Contact;