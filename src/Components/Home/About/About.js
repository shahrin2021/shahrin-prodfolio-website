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
        <div className="about-section">
            <Container>
                <Row>
                    <Col sm={12} lg={6} md={6} style={{display:"flex", justifyContent:"center",alignItems:'center',}}>
                        <div className="aboutImage">
                            <img src={aboutImg} alt="" />
                        </div>
                    </Col>

                    <Col sm={12} lg={6} md={6} > 
                    <div className='about-text-area'>
                    
                        <h2 className='About-title'>About Us</h2>
                        <p class="about__discription">Full-stack web developer, with extensive knowldge and year of
                        experience, working in web
                        technologist, delivering quality work</p>
                       
                           
                                
                                    <div  >
                                    <div className='d-flex align-iteams-center mb-2 '>
                                        <div><i className="uil uil-angle-right about-icon "></i></div>
                                        <div><p className='m-0 about-title'>Github:</p></div>
                                        <div><p className='about-me'>https://github.com/shahrin2021</p></div>
                                    
                                    
                                    

                                    </div>
                                    <div className='d-flex align-iteams-center mb-2'>
                                    <div><i className="uil uil-angle-right about-icon" ></i></div>
                                    <div><p className='m-0 about-title'>Phone:</p></div>
                                    <div> <p className='about-me'>+8801760482215</p></div>
                                   
                                    
                                   

                                    </div>
                                    <div className='d-flex align-iteams-center mb-2 '>
                                    <div> <i className="uil uil-angle-right about-icon"></i></div>
                                    <div><p className='m-0 about-title'>City:</p></div>
                                    <div> <p className='about-me '>Rangpur Bangladesh</p></div>
                                   
                                </div>

                                <div className='d-flex align-iteams-center  mb-2'>
                                    <div><i className="uil uil-angle-right about-icon"></i></div>
                                   <div><p className='m-0 about-title'>Age:</p></div> 
                                    <div><p className='about-me'>20</p></div> 

                                    </div>
                                    <div className='d-flex align-iteams-center mb-2 '>
                                    <div>   <i className="uil uil-angle-right about-icon" ></i></div>
                                    <div><p className='m-0 about-title'>Email:</p></div>
                                    <div> <p className='about-me'>shahrinakash@gmail.com</p></div>
                                    </div>
                                    <div className='d-flex align-iteams-center mb-2 ' >
                                    
                                    <div><i className="uil uil-angle-right about-icon"></i></div>
                                   
                                    <div><p className='m-0 about-title '>Part-Time & Intern:</p></div>
                                    <div><p className='about-me '>Available</p></div>
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