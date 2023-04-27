import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css';
import './Projects.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Projects=()=> {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="projects" id='projects'>
            <span style={{color:darkMode?'white':''}}>My Recent Projects</span>
            <span>Portfolio</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='projects-slider'
            >

                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;