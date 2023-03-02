import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
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
      <p className="titles box-border text-3xl px-4 py-1 rounded">CONTACT ME</p>

      <form ref={form} onSubmit={sendEmail}  className=" w-2/5 h-full py-8 mt-12 flex flex-col items-center gap-8">
        <input style={{background:'none'}} className='w-full p-4 outline-none  border-l-black border-l-4 border-b-black border-b-4' type="text" name="user_name" placeholder='Your Name' autoComplete="off" required/>
        
        <input style={{background:'none'}} className='w-full p-4 outline-none  border-l-black border-l-4 border-b-black border-b-4' type="email" name="user_email" placeholder='Your Email' autoComplete="off" required />
        
        <textarea style={{background:'none'}} className='w-full h-60 p-4 outline-none  border-l-black border-l-4 border-b-black border-b-4 resize-none' name="message" placeholder='I want to contact you...'required />
        
        <input className='box-border flex gap-3 items-center p-2 bg-gradient-to-b from-[#f2295b] to-[#FF3A3A] rounded' type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact;