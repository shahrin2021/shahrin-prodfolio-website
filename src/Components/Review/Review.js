import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Review.css'
import { Col } from 'react-bootstrap';
import SwiperCore, {
    Navigation,Pagination,History
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Navigation,Pagination,History]);
  
  
const Review = ({review}) => {
    return (
        <Col lg={12} md ={12}>
              
    <Swiper spaceBetween={50} slidesPerView={1} navigation={true} pagination={true} history={{
  "key": "slide"
}} className="mySwiper">
  <SwiperSlide >
      
  </SwiperSlide>
 
    </Swiper>
        </Col>
    );
};

export default Review;