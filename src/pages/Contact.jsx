import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_56e9qaf', 'template_eyx3pnb', form.current, '3siD_3fKDOAd1t8nH')
      .then((result) => {
        alert(result.text);
      }, (error) => {
        alert(error.text);
      });
  };

  return (
    <div id="contact" className="flex flex-col items-center w-full h-screen pt-24">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}  className="w-2/5 h-2/3 py-8 mt-12 flex flex-col items-center gap-8">
        <input style={{background:'none'}} className='w-full p-4 outline-none  border-l-black border-l-4 border-b-black border-b-4' type="text" name="user_name" placeholder='Your Name' autoComplete="off"/>
        
        <input style={{background:'none'}} className='w-full p-4 outline-none  border-l-black border-l-4 border-b-black border-b-4' type="email" name="user_email" placeholder='Your Email' autoComplete="off" />
        
        <textarea style={{background:'none'}} className='w-full h-60 p-4 outline-none  border-l-black border-l-4 border-b-black border-b-4 resize-none' name="message" placeholder='I want to contact you...'/>
        
        <input className='box-border border hover:bg-black hover:text-white transition duration-300 ease-in-out w-24 px-4 py-3 font-bold' type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact;