import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typical from 'react-typical'
import img from "../../../image/profile.png"
import './Banner.css'

const Banner = () => {
 
  
    
    return (
        <div className='banner-area'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} style={{display:"flex", justifyContent:"center",alignItems:'center', }}>
           
                        <div  className='bannar-about-text box' >
                            <h3 className='banner-subtitle'>Hi! I'm </h3>
                            <h1 className='banner-name-title'>Md Shahrin Bin Selim</h1>
                            <h4 style={{fontSize:'40px' ,color:'#D47AE8'}}>
                                <Typical
                                    steps={['Web Desiner!', 2000, 'Web Developer!',2000,  ]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </h4>

                            <p style={{color:'#fff',fontSize:'16px'}} >I am a self-motivated and hard-working person. enjoy creating modern web applications. I Always ready to learn and adopt new technologies.
                            </p>
                            
                         
                            <div className='home-btns'>
                                <button className='home-btn-hire'>Hire Me</button>
                                <button className='home-btn-resume'>Resume</button>
                            </div>

                            
                        </div>

                    
                    </Col>
                    <Col lg={6} md={6} sm={12} style={{display:"flex", justifyContent:"center" ,alignItems:'center',}}>
                        <div className='home-myImage'>
                       
    
                        <div className='home-img-box'>
                            <div className='homeImg-item'>
                                <img src={img} alt="" />
                            </div>

                        </div>


                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;