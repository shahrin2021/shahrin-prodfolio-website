import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import html from '../../../image/html.png'
import react from '../../../image/react.png'
import css from '../../../image/css.png'
import node from '../../../image/node.png'
import mongo from '../../../image/mongo.png'
import boot from '../../../image/boot.jpg'
import ui from '../../../image/m-ui.png'
import js from '../../../image/js.png'
import tail from '../../../image/tailwind.png'
import './Skills.css'

const Skills = () => {
    return (
       <div>
            <Container>
                <h2 className='skill-title'>My Skills</h2>
                <Row>
                    <Col lg={4} md={4} sm={6} xs={12} >
                            <div className='skillBox'>
                                <img className='skill-img' src={html} alt="" />
                                <h5>HTML</h5>
                            </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12} >
                            <div className='skillBox'>
                                <img className='skill-img'src={css} alt="" />
                                <h5>Css</h5>
                            </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                            <div className='skillBox' >
                                <img className='skill-img' src={boot} alt="" />
                                <h5>Bootstrap</h5>
                            </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                            <div className='skillBox'>
                                <img className='skill-img' src={tail} alt="" />
                                <h5>Tailwind Css</h5>
                            </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                            <div className='skillBox'>
                                <img className='skill-img' src={js} alt="" />
                                <h5>JavaScript</h5>
                            </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                            <div className='skillBox'>
                                <img className='skill-img' src={react} alt="" />
                                <h5>React Js</h5>
                            </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                            <div className='skillBox'>
                                <img className='skill-img' src={ui} alt="" />
                                <h5>Material Ui</h5>
                            </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                            <div className='skillBox'>
                                <img className='skill-img'src={node} alt="" />
                                <h5>Node js</h5>
                            </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                            <div className='skillBox'>
                                <img className='skill-img' src={mongo} alt="" />
                                <h5>Mongo Db</h5>
                            </div>
                    </Col>
                  
                   
                </Row>
            </Container>
            </div>
    );
};

export default Skills;