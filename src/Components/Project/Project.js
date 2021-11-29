import React, { useRef, useState } from "react";
import { Container } from 'react-bootstrap';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import project1 from '../../image/project/screencapture-shahrin-responsive-portfolio-netlify-app-2021-11-29-21_04_19.png';
import project2 from '../../image/project/screencapture-thirsty-mccarthy-18e7ac-netlify-app-2021-11-29-21_08_36.png';
import project3 from '../../image/project/screencapture-wonderful-nobel-18c7b4-netlify-app-2021-11-29-21_10_12.png';
import project5 from '../../image/project/screencapture-admiring-wiles-bd865e-netlify-app-2021-11-29-21_11_02.png';
import project6 from '../../image/project/screencapture-car-service-agency-project-netlify-app-2021-11-29-21_09_17.png';
import project7 from '../../image/project/screencapture-hero-shahrin-store-netlify-app-2021-11-29-21_11_59.png';
import project8 from '../../image/project/screencapture-nike-react-home-netlify-app-2021-11-29-21_07_00.png';
import './Project.css'

import SwiperCore, {
    EffectCoverflow,Pagination
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([EffectCoverflow,Pagination]);
  
const Project = () => {
    return (
        <div>
            <Container>

                <h2 className='text-center mb-5'>My Project</h2>
            <div className='text-center'  >
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
    <div className='project'>
    <SwiperSlide><img className='project-img' src={project1} /></SwiperSlide>
    </div>
 
  <div className='project'>
  <SwiperSlide><img className='project-img' src={project2} /></SwiperSlide>
  </div>
  
  <div className='project'>
  <SwiperSlide><img className='project-img' src={project3} /></SwiperSlide>
  
  </div>
  <div className='project'>
  <SwiperSlide><img className='project-img' src={project5} /></SwiperSlide>
  </div>
  <div className='project'>
  <SwiperSlide><img className='project-img' src={project6} /></SwiperSlide>
  </div>
  <div className='project'>
  <SwiperSlide><img className='project-img' src={project7} /></SwiperSlide>
  </div>
  <div className='project'>
  <SwiperSlide><img className='project-img' src={project8} /></SwiperSlide>
  </div>

  </Swiper>
    </div>
            </Container>
        </div>
    );
};

export default Project;