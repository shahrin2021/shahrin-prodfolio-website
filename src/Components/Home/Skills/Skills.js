import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import dev from '../../../image/developer.jpg'
import './Skills.css'

const Skills = () => {
    return (
       <div className='skill-area' id="skills" style={{marginBottom:"80px"}}>
            <Container>
                <h2 className='skill-title'>My Skills</h2>
                <Row>
                  
                  <Col lg={5} md={6} sm={12} className="d-flex justify-content-between align-items-center">
                    <div className='skill-img'>
                        <img style={{maxWidth:'100%'}} src={dev} alt="" />
                    </div>
                  </Col>
                  <Col lg={7} md={6} sm={12}>
                    <div className='progressBar mb-2'>
                        <div className="d-flex justify-content-between mb-1">
                        <h6 className='text-white'>Html</h6>
                        <h6 className='text-white'>90%</h6>
                        </div>
                        <ProgressBar animated now={90} />
                    </div>
                    <div className='progressBar mb-2'>
                        <div className="d-flex justify-content-between mb-1">
                        <h6 className='text-white'>Css</h6>
                        <h6 className='text-white'>80%</h6>
                        </div>
                        <ProgressBar animated now={80} />
                    </div>
                    <div className='progressBar mb-2'>
                        <div className="d-flex justify-content-between mb-1">
                        <h6 className='text-white'>Javascript</h6>
                        <h6 className='text-white'>65%</h6>
                        </div>
                        <ProgressBar animated now={65} />
                    </div>
                    <div className='progressBar mb-2'>
                        <div className="d-flex justify-content-between mb-1">
                        <h6 className='text-white'>React js</h6>
                        <h6 className='text-white'>55%</h6>
                        </div>
                        <ProgressBar animated now={55} />
                    </div>
                    <div className='progressBar mb-2'>
                        <div className="d-flex justify-content-between mb-1">
                        <h6 className='text-white'>Node js</h6>
                        <h6 className='text-white'>45%</h6>
                        </div>
                        <ProgressBar animated now={45} />
                    </div>
                    <div className='progressBar mb-2'>
                        <div className="d-flex justify-content-between mb-1">
                        <h6 className='text-white'>Express js</h6>
                        <h6 className='text-white'>50%</h6>
                        </div>
                        <ProgressBar animated now={50} />
                    </div>
                    <div className='progressBar mb-2'>
                        <div className="d-flex justify-content-between mb-1">
                        <h6 className='text-white'>Mongo Db</h6>
                        <h6 className='text-white'>45%</h6>
                        </div>
                        <ProgressBar animated now={45} />
                    </div>
                  </Col>
                   
                </Row>
            </Container>
            </div>
    );
};

export default Skills;