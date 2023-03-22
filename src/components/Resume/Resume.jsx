import React from 'react'
import './Resume.css'
import AAUP from '../../assets/aaup.png'
import School from '../../assets/school.png'
import ITG from '../../assets/itg.jpg'

// Import Swiper 
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Resume() {
    return (
        <div className=' container section' id='resume'>
            <h5>my education and experience</h5>
            <h2>Resume</h2>
            <Swiper pagination={true} modules={[Pagination]} className="resume-container">
                <SwiperSlide className="resume-contient">
                    <div>
                        <img src={AAUP} alt="" />
                    </div>
                    <h2>B.Sc. Computer Systems Engineering ( CSE )</h2>
                    <h3>Arab American University ( AAUP ), Jenin</h3>
                    <h4>Average 3.2</h4>
                    <h5>2018 - 2023</h5>
                </SwiperSlide>
                <SwiperSlide className="resume-contient ">
                    <div>
                        <img src={School} alt="" />
                    </div>
                    <h2>Diploma, Computer Engineering</h2>
                    <h3>Selat Edaher Vocational School</h3>
                    <h4>Average 96.4</h4>
                    <h5 className='biger'>2017 - 2018</h5>
                </SwiperSlide>
                <SwiperSlide className="resume-contient">
                    <div>
                        <img src={ITG} alt="" />
                    </div>
                    <h2>Front End Developer</h2>
                    <h3>I trained at ITG company, during this period 
                        I gained a lot of information and experience, and I carried out many projects and tasks.</h3>
                    <h5 style={{marginTop: "1rem"}}>2023</h5>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Resume