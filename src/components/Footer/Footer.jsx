import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <a href="#" className='footer-logo'>Wild Ali.</a>

            <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-socials">
                <a href="https://www.facebook.com/zakarya.wildali.7"target="_blank"><FaFacebookF /> </a>
                <a href="https://www.instagram.com/zakaria_wildali/"target="_blank"><BsInstagram /></a>
                <a href="https://www.linkedin.com/in/zakaria-wildali-b6798325a/" target="_blank"><FaLinkedinIn /></a>
            </div>
            <div className="footer-copyright">
                <small>&copy; Zakaria WildAli. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer