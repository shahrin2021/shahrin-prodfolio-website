import React, { useEffect, useState } from 'react';
import  { useRef, } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Col } from 'react-bootstrap';
import SwiperCore, {
    Navigation,Pagination,History
  } from 'swiper';
  import { Container, Row } from 'react-bootstrap';
  import Review from '../Review/Review'; 
  // install Swiper modules
  SwiperCore.use([Navigation,Pagination,History]);


const Reviews = () => {
    // const [reviews , setReviews] = useState([]);
    // useEffect(()=>{
    //     fetch('https://raw.githubusercontent.com/shahrin2021/user-review/main/review.js')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setReviews(data)
    //         console.log(data)
    //     })
    // },[])

    const style={
        boxShadow:'3px 5px 4px 0',
        maxWidth:'500px',
        margin:'0 auto',
        background:'#fff',
        marginBottom:'50px',
        padding:"30px",
        borderRadius: '10px'
    }

    const area= {
        marginTop:'80px'
    }

    return (<div className='review-area' style={area} id='review'>
        <Container>
            <h2 className='text-center mb-5 text-danger'>People What Say ?</h2>
   
                 <Swiper spaceBetween={0} slidesPerView={1} navigation={true} pagination={true} history={{
                        "key": "slide"
                      }} className="mySwiper">
                        <SwiperSlide data-history="1" >
                            <div style={style}>
                                <div>
                                    <h5>Robin Rachindra</h5>
                                    <p>robin@gmail.lom</p>
                                </div>
                                <p>"description":" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam architecto atque sapiente quidem enim dignissimos voluptatibus accusamus aperiam obcaecati, reiciendis incidunt iusto? Reiciendis illum magni soluta eos delectus nulla illo!"</p>
                            </div>
                      </SwiperSlide>
                        <SwiperSlide data-history="1" >
                            <div style={style}>
                                <div>
                                    <h5>Robin Rachindra</h5>
                                    <p>robin@gmail.lom</p>
                                </div>
                                <p>"description":" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam architecto atque sapiente quidem enim dignissimos voluptatibus accusamus aperiam obcaecati, reiciendis incidunt iusto? Reiciendis illum magni soluta eos delectus nulla illo!"</p>
                            </div>
                      </SwiperSlide>
                        <SwiperSlide data-history="1" >
                            <div style={style}>
                                <div>
                                    <h5>Robin Rachindra</h5>
                                    <p>robin@gmail.lom</p>
                                </div>
                                <p>"description":" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam architecto atque sapiente quidem enim dignissimos voluptatibus accusamus aperiam obcaecati, reiciendis incidunt iusto? Reiciendis illum magni soluta eos delectus nulla illo!"</p>
                            </div>
                      </SwiperSlide>
                       
                          </Swiper>

        </Container>
        </div>
    );
};

export default Reviews;