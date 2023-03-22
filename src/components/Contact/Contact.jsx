import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_za3lgvu', 'template_lyytg6l', form.current, 'gE5QNjK46bAHVHRpy')
        e.target.reset()
    };
    return (
        <div className='container section' id='contact'>
            <h5>get in touch</h5>
            <h2>Contact Me</h2>
            <div className="contact-container">
                <div className="contact-options">
                    <div className="contact-option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>zakaria.wildali.7@gmail.com</h5>
                        <a href="mailto:zakaria.wildali.7@gmail.com">Send a message</a>
                    </div>
                    <div className="contact-option">
                        <BsMessenger />
                        <h4>Messenger</h4>
                        <h5>Zakaria Wild Ali</h5>
                        <a href="https://www.facebook.com/zakarya.wildali.7" target={"_blank"}>Send a message</a>
                    </div>
                    <div className="contact-option">
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>+970 569407090</h5>
                        <a href="https://wa.me/+970569407090?text=hello" target={"_blank"}>Send a message</a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact