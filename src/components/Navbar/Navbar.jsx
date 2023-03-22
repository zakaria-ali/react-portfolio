import React, { useState } from 'react'
import './Navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiBookContent} from 'react-icons/bi'
import {TiContacts} from 'react-icons/ti'
import {MdWorkOutline} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'


function Navbar() {
    const [activeNav,setActiveNav] = useState("#home")
    return (
        <nav>
            <a href="#home" 
            onClick={() => setActiveNav("#home")}
            className={activeNav === "#home" ? 'active' : ""}><AiFillHome /></a>
            <a href="#about-me"
            onClick={() => setActiveNav("#about-me")}
            className={activeNav === "#about-me" ? 'active' : ""}
            ><AiOutlineUser /></a>
            <a href="#resume"
            onClick={() => setActiveNav("#resume")}
            className={activeNav === "#resume" ? 'active' : ""}
            ><FaUniversity /></a>
            <a href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? 'active' : ""}
            ><BiBookContent /></a>
            <a href="#services"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#services" ? 'active' : ""}
            ><RiServiceLine /></a>
            <a href="#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ? 'active' : ""}
            ><MdWorkOutline /></a>
            <a href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? 'active' : ""}
            ><TiContacts /></a>
        </nav>
    )
}

export default Navbar