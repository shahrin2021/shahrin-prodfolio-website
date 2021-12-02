import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import aboutImg from '../../../image/profile.jpg';
import './About.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
 
  } from "react-router-dom";

const About = () => {
    return (
        <div className="about-section" id="about">
            <Container>
                <Row>
                    <Col sm={12} lg={6} md={6} style={{display:"flex", justifyContent:"center",alignItems:'center',}}>
                        <div className="aboutImage">
                            <img src={aboutImg} alt="" />
                        </div>
                    </Col>

                    <Col sm={12} lg={6} md={6} > 
                    <div className='about-text-area'>
                    
                        <h2 className='About-heading'>About Us</h2>
                        <p className="about__discription text-white">Full-stack web developer, with extensive knowldge and year of
                        experience, working in web
                        technologist, delivering quality work</p>
                       
                           
                                
                                    <div  >
                                    <div className='d-flex align-iteams-center mb-2 '>
                                        <div><i className="uil uil-angle-right about-icon "></i></div>
                                        <div><p className='m-0 about-title' style={{color:'#A8E7E9'}}>Github:</p></div>
                                        <div><p className='about-me text-white'>https://github.com/shahrin2021</p></div>
                                    
                                    
                                    

                                    </div>
                                    <div className='d-flex align-iteams-center mb-2'>
                                    <div><i className="uil uil-angle-right about-icon" ></i></div>
                                    <div><p className='m-0 about-title ' style={{color:'#A8E7E9'}}>Phone:</p></div>
                                    <div> <p className='about-me text-white'>+8801760482215</p></div>
                                   
                                    
                                   

                                    </div>
                                    <div className='d-flex align-iteams-center mb-2 '>
                                    <div> <i className="uil uil-angle-right about-icon"></i></div>
                                    <div><p className='m-0 about-title' style={{color:'#A8E7E9'}}>City:</p></div>
                                    <div> <p className='about-me text-white '>Rangpur Bangladesh</p></div>
                                   
                                </div>

                                <div className='d-flex align-iteams-center  mb-2'>
                                    <div><i className="uil uil-angle-right about-icon"></i></div>
                                   <div><p className='m-0 about-title' style={{color:'#A8E7E9'}}>Age:</p></div> 
                                    <div><p className='about-me text-white'>20</p></div> 

                                    </div>
                                    <div className='d-flex align-iteams-center mb-2 '>
                                    <div>   <i className="uil uil-angle-right about-icon" ></i></div>
                                    <div><p className='m-0 about-title' style={{color:'#A8E7E9'}}>Email:</p></div>
                                    <div> <p className='about-me text-white'>shahrinakash@gmail.com</p></div>
                                    </div>
                                    <div className='d-flex align-iteams-center mb-2 ' >
                                    
                                    <div><i className="uil uil-angle-right about-icon"></i></div>
                                   
                                    <div><p className='m-0 about-title ' style={{color:'#A8E7E9'}}>Part-Time & Intern:</p></div>
                                    <div><p className='about-me text-white'>Available</p></div>
                                </div>
                                    </div>
                                 
                                   
                                   
                        
                    </div>
                       

                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;