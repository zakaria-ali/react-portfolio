import React from 'react'
import './Header.css'
import CV from '../../assets/CV_Zakaria.pdf'
import profile from '../../assets/profile.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {delay, motion} from 'framer-motion'

function Header() {
  return (
    <div className='header container' id='home'>
        <h5>Hello,I'm</h5>
        <h1>Zakaria WildAli</h1>
        <h5>Front-end Developer</h5>
        <div className="btns">
            <a href={CV} download className='btn'>Download CV </a>
            <a href='#contact' className='btn btn-primary'>Let's Talk </a>
        </div>
        <div className="header-footer">
            <div className="social">
                <a href="https://www.linkedin.com/in/zakaria-wildali-b6798325a/" target="_blank" ><FaLinkedin /></a>
                <a href="https://github.com/zakaria-ali" target="_blank" ><FaGithub /> </a>
                <a href="https://www.facebook.com/zakarya.wildali.7" target="_blank" ><FaFacebook /> </a>
            </div>
            <motion.img
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={{type: "spring",duration:3}}
            src={profile} alt="" />
            <a href='#contact' className='scroll-down'>Scroll Down</a>
        </div>
    </div>
  )
}

export default Header