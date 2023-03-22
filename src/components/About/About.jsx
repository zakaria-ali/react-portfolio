import React from 'react'
import './About.css'
import aboutME from '../../assets/about-me.png'
import {FaAward} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'
import {MdWorkOutline} from 'react-icons/md'
import NumberCounter  from 'number-counter';

function About() {
    return (
    <div className='container section' id='about-me'>
        <h5>Get to know</h5>
        <h2>About Me</h2>
        <div className="about">
            <div className="about-img">
                <div>
                    <img src={aboutME} alt="" />
                </div>
            </div>
            <div className="about-content">
                <div className="cards">
                    <div className="card">
                        <FaAward />
                        <h5>Experience</h5>
                        <div>
                            <small>
                            <NumberCounter end={2} start={0} delay='2' preFix="+" className="numbering" /> months training
                            </small>
                        </div>  
                    </div>
                    <div className="card">
                        <TiTick />
                        <h5>Skills</h5>
                        <small><NumberCounter end={13} start={0} delay='2' preFix="+" className="numbering"/>learned</small>
                    </div>
                    <div className="card">
                        <MdWorkOutline />
                        <h5>projects</h5>
                        <small>
                        <NumberCounter end={9} start={0} delay='2' preFix="+" className="numbering" />completed
                        </small>
                    </div>
                </div>
                <p> I create responsive web pages that are well
                    coded and have accurate dimensions, I incorporate animations beautifully and smoothly.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </div>
    )
}

export default About