import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e4sd8wl', 'template_tbax03d', form.current, 'AvJOd4ZmBSOXPjYvu')
    e.target.reset()
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      
      <div className="container contact__container">
      <div className=" contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>info@theanimate24.com</h5>
          <a href='mailto:info@theanimate24.com' target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>Animate24</h5>
          <a href='https://mobile.facebook.com/theanimate24/?ref=page_internal&mt_nav=0&_rdc=1&_rdr' target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <a href='https://wa.me/message/U3JVYP3TLFB7N1' target='_blank' >Send a message</a>
        </article>
      </div>
      {/*End of Contact*/}

      <form ref={form} onSubmit={sendEmail}>
        <input type='text' placeholder='Your Business or Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required />
        <button type='submit' className='btn btn-primary' >Send Message</button>

      </form>
      </div>

    </section>
  )
}

export default Contact