import React from 'react'
import './Services.css'
import {MdDeveloperMode} from 'react-icons/md'
import {BsPersonCheckFill} from 'react-icons/bs'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {BsFillMotherboardFill} from 'react-icons/bs'
function Services() {
    return (
        <div className='container section' id='services'>
            <h5>what i offer</h5>
            <h2>Services</h2>
            <div className="services-container">
                <div className='service-card'>
                    <div>
                        <h3>Web Developer</h3>
                    </div>
                    <div>
                        <MdDeveloperMode />
                        <p>I maintain and build responsive web pages for 
                            all screens in the format you want, literally and in the required time.</p>
                    </div>
                </div>
                <div className='service-card'>
                    <div>
                        <h3>Backend Mentor</h3>
                    </div>
                    <div>
                        <BsPersonCheckFill />
                        <p>Since I'm familiar with a wide range of programming languages, 
                            such as C++, Java, Python...etc., I can give you advice and provide assistance.</p>
                    </div>
                </div>
                <div className='service-card'>
                    <div>
                        <h3>Computer Maintenance</h3>
                    </div>
                    <div>
                        <HiOutlineDesktopComputer />
                        <p>As well as formatting computers, downloading programs, and fixing some Windows problems, I'm able to 
                            disassemble the computer and install other components, such as RAM and hard drives.</p>
                    </div>
                </div>
                <div className='service-card'>
                    <div>
                        <h3>Other Skills</h3>
                    </div>
                    <div>
                        <BsFillMotherboardFill />
                        <p>Programming codes for the 8086 microprocessor, such as controlling an elevator or servo motor, as well as 
                            microcontrollers, such as controlling DC motors and the Arduino Uno, come naturally to me.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services