
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css'
import { FiMail } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import ContactOptions from './ContactOptions'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q0uuwqc', 'template_lrne5gf', form.current, 'yCG23xvQvaqutzb6T')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <ContactOptions icon={<FiMail className='contact__option-icon' />} title='Email' contactAddress='hamzanaseer.dev@gmail.com' hRef="mailto: abc@example.com" />
          <ContactOptions icon={<AiFillLinkedin className='contact__option-icon' />} title='LinkedIn' contactAddress='hamza-naseer-8a0277220' hRef='https://www.linkedin.com/in/hamza-naseer-8a0277220/' />
          <ContactOptions icon={<BsWhatsapp className='contact__option-icon' />} title='WhatsApp' contactAddress='+92 3416238865' hRef=' https://wa.me/923416238865' />
        </div>
        {/* End of contact ========== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='your message'></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact