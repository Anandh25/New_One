import React, { useRef } from 'react';
import './contact.css'

import {BsInstagram} from 'react-icons/bs'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'


import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c7wwi6i', 'template_6jm98m4', form.current, 'j9dN0MBem02EevOR9')
      e.target.reset() //the form will rest after give submit
  };




  return (
    <section id='contact' className='contact section container'>

      <div className="sectionTitle">
    <span className='titleNumber'>
      04.
    </span>
    <h5 className='titleText'>Contact Us
      <div className='underline'>
        <span></span>
      </div>
    </h5>
   </div>

   <div className="contactContainer grid">
    <div className="socialContacts grid">
      <h3>Talk to me</h3>
      <div className="cards grid">

        <div className="card">
          <div>
             <BsInstagram className='icon'/>
          </div>
          <h4>Instagram</h4>
          <span className="userName">
            @anandh_mano
          </span>

          <div>
            <a href="https://www.instagram.com/anandh_mano/" target='_blank' className="flex">Send Message
            <TbArrowBigRightLines className='icon'/>
            </a>
          </div>
        </div>

        <div className="card">
          <div>
             <AiFillLinkedin className='icon'/>
          </div>
          <h4>LinkedIn</h4>
          <span className="userName">
            @anandhmanoharan
          </span>

          <div>
            <a href="https://www.linkedin.com/in/anandhmanoharan-2592a913a/" className="flex" target='_blank'>Send Message
            <TbArrowBigRightLines className='icon'/>
            </a>
          </div>
        </div>

        <div className="card">
          <div>
             <AiOutlineTwitter className='icon'/>
          </div>
          <h4>Twitter</h4>
          <span className="userName">
            @AnandhSai5
          </span>

          <div>
            <a href="https://twitter.com/AnandhSai5" className="flex" target='_blank'>Send Message
            <TbArrowBigRightLines className='icon'/>
            </a>
          </div>
        </div>

      </div>
    </div>

    <div className="form grid">
      <h3>Send me an email</h3>

      <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Enter your Name' name='name'/>
          <input type="email" placeholder='Enter your Email' name='email'/>
          <textarea name="message" placeholder='Enter your message'></textarea>
          <button className="formBtn" type='Submit' name='submit'>
            Send Email
          </button>
      </form>
    </div>
   </div>
   
   </section>
  )
}

export default Contact
