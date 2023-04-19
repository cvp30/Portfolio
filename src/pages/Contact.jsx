import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Title from '../components/Title';
import { Github, Linkedin, Twitter, Mail } from '../icons';
import Button from '../components/Button';

const Contact = () => {

  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  })
  const formRef = useRef();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (input.user_name && input.user_email && input.message) {
      emailjs.sendForm('service_56e9qaf', 'template_eyx3pnb', formRef.current, '3siD_3fKDOAd1t8nH')
      .then(result => {
        alert(result.text);
      }, (error) => {
        alert(error.text);
      })
    }
  };

  return (
    <section id="contact" className='box-border pt-24 pb-12 w-full h-full lg:h-156 2xl:h-194 flex flex-col lg:flex-row items-center justify-center'>
      <div className='w-full lg:w-1/2 h-full flex flex-col justify-around gap-8 py-14 px-10'>
        <Title>
          Contact Me
        </Title>

        <p className='text-sm 2xl:text-lg font-normal text-center lg:text-start'>
          Hey! You want to talk to me? Great! You can fill out the contact form here or just send me an email. If you have any questions, comments or just want to say hi, feel free to contact me! I'm always happy to meet new people - see you!
        </p>

        <div className='w-full flex flex-col gap-4 2xl:text-xl'>
          <a className='flex gap-5 items-center h-7 2xl:h-9' href="mailto:carlos.valer.p30@gmail.com">
            <Mail />
            carlos.valer.p30@gmail.com
          </a>

          <a className='flex gap-5 items-center h-7 2xl:h-9' href="https://github.com/cvp30" target="_blank">
            <Github />
            /cvp30
          </a>

          <a className='flex gap-5 items-center h-7 2xl:h-9' href="https://www.linkedin.com/in/carlosvaler/" target="_blank">
            <Linkedin />
            /carlosvaler
          </a>

          <a className='flex gap-5 items-center h-7 2xl:h-9' href="https://twitter.com/carlosvaler17" target="_blank">
            <Twitter />
            /carlosvaler17
          </a>


        </div>


      </div>

      <div className='w-11/12 lg:w-1/2 h-full'>

        <form ref={formRef} onSubmit={sendEmail} onChange={handleChange} className='w-full h-full flex flex-col justify-center gap-8'>

          <input type="text" name='user_name' className="h-14 2xl:h-18 2xl:text-xl outline-none w-full bg-transparent px-5 tracking-[.1rem] relative shadow-rightBottom rounded-xl after:top-0 after:left-0 after:-z-10 after:rounded-xl after:absolute after:w-full after:h-full after:shadow-leftTop" placeholder='Your Name...' />

          <input type="email" name='user_email' className="h-14 2xl:h-18 2xl:text-xl outline-none w-full bg-transparent px-5 tracking-[.1rem] relative shadow-rightBottom rounded-xl after:top-0 after:left-0 after:-z-10 after:rounded-xl after:absolute after:w-full after:h-full after:shadow-leftTop" placeholder='Your Email...' />

          <textarea name='message' className=' 2xl:text-xl outline-none resize-none w-full h-48 2xl:h-56 bg-transparent p-5 tracking-[.1rem] relative shadow-rightBottom rounded-xl after:top-0 after:left-0 after:-z-10 after:rounded-xl after:absolute after:w-full after:h-full after:shadow-leftTop' placeholder='I want to contact you...'></textarea>

          <div className='w-1/2 mx-auto flex justify-center'>
            <Button>
              Send Message
            </Button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact;