import React from 'react'
import './Portfolio.css'
import { projects } from '../../data/projects'

function Portfolio() {
    return (
        <div className='container section' id='portfolio'>
            <h5>my recent work</h5>
            <h2>Portfolio</h2>
            <div className="portfolio-container">
                {
                    projects.map((project, i) => (
                        <div className="portfolio-card" key={i}>
                            <div>
                                {project.image}
                            </div>
                            <p> {project.description} </p>
                            <div className="btns">
                                <a href= {project.github} className='btn btn-primary' target="_blanke" >Github </a>
                                <a href= {project.preview} className='btn ' target="_blanke" >Preview</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio