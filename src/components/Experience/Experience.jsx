import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import { skills } from '../../data/skills'
function Experience() {
    return (
        <div className='container section' id='experience'>
            <h5>what skills i have</h5>
            <h2> My Experience</h2>
            <div className="experience-content">
                <div className='frontend-content'>
                    <h3>Frontend Development</h3>
                    <div className="skills">
                        {
                            skills[0].frontend.map((skill, i) => (
                                <div className="detailes" key={i}>
                                    <div>
                                        <BsFillPatchCheckFill />
                                        <h4>{skill.name}</h4>
                                    </div>
                                <small>{skill.level}</small>
                            </div>
                            ))
                        }
                    </div>
                </div>
                <div className='backend-contnet'>
                    <h3>Backend Development</h3>
                    <div className="skills">
                        {
                            skills[1].backend.map((skill, i) => (
                                <div className="detailes" key={i}>
                                    <div>
                                        <BsFillPatchCheckFill />
                                        <h4>{skill.name}</h4>
                                    </div>
                                <small>{skill.level}</small>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience