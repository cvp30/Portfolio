import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Title from '../components/Title';
import { Github, Linkedin, Twitter, Mail } from '../icons';
import { Link } from 'react-router-dom';

const Contact = () => {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_56e9qaf', 'template_eyx3pnb', formRef.current, '3siD_3fKDOAd1t8nH')
      .then((result) => {
        alert(result.text);
      }, (error) => {
        alert(error.text);
      });
  };

  return (
    <div id="contact" className="w-full max-w-screen-2xl mx-auto h-screen flex flex-col gap-8 items-center pt-10 font-bold">
      <Title>Contact Me</Title>

      <div className='relative shadow-lg shadow-dark dark:shadow-white box-border bg-no-repeat h-5/6 max-w-screen-2xl aspect-video flex'>
        <div className='z-10 w-1/3 h-full flex flex-col items-start justify-around p-14 dark:text-white font-bold pl-8'>
          <Link className='xl:h-7 2xl:h-9 xl:text-base 2xl:text-xl flex gap-3 items-center' to="mailto:carlos.valer.p30@gmail.com">
            <Mail />
            carlos.valer.p30@gmail.com
          </Link>
          <Link className='xl:h-7 2xl:h-9 xl:text-base 2xl:text-xl flex gap-3 items-center' to="https://github.com/cvp30" target="_blank">
            <Github />
            /cvp30
          </Link>
          <Link className='xl:h-7 2xl:h-9 xl:text-base 2xl:text-xl flex gap-3 items-center' to="https://www.linkedin.com/in/carlosvaler/" target="_blank">
            <Linkedin />
            /carlosvaler
          </Link>
          <Link className='xl:h-7 2xl:h-9 xl:text-base 2xl:text-xl flex gap-3 items-center' to="https://twitter.com/carlosvaler17" target="_blank">
            <Twitter />
            /carlosvaler17
          </Link>
        </div>

        <form ref={formRef} className='z-10 w-2/3 h-full px-20 py-10  flex flex-col items-center justify-between gap-3 dark:text-white xl:text-sm 2xl:text-lg'>

          <div className='flex flex-col gap-2 w-full h-16 '>
            <div className='flex items-center gap-8'>
              <label className='' htmlFor="nameId">Name:</label>
              {/* <p className='xl:text-xs 2xl:text-base text-red'>error</p> */}
            </div>
            <input  name="user_name" className='bg-transparent border-l-[1px] border-b-[1px] rounded-bl border-dark dark:border-white font-mono py-1 px-2' id="nameId" type="text" placeholder='Your Name...' />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex items-center gap-8'>
              <label className='dark:text-white' htmlFor="mailId">Email</label>
              {/* <p className='xl:text-xs 2xl:text-base text-red'>error</p> */}
            </div>
            <input  name="user_email" className='bg-transparent border-l-[1px] border-b-[1px] rounded-bl w-full font-mono py-1 px-2' id="mailId" type="email" placeholder='Your Email...' />
          </div>
          <div className='flex flex-col gap-2 w-full '>
            <div className='flex items-center gap-8'>
              <label className='dark:text-white' htmlFor="textareaId">Message</label>
              {/* <p className='xl:text-xs 2xl:text-base text-red'>error</p> */}
            </div>
            <textarea name="message" className=' border-l-[1px] border-b-[1px] rounded-bl bg-transparent font-mono italic py-1 px-2 h-36 resize-none' id="textareaId" cols="30" rows="10" placeholder='I want to contact you...'></textarea>
          </div>

          <button onClick={sendEmail} className='flex gap-2 justify-center items-center px-3 py-2 mx-auto bg-white dark:text-dark transition-all duration-200 ease outline-none hover:bg-red hover:text-white dark:hover:text-white '>
            <Mail />
            Send
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact;