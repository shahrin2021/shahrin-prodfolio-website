import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='py-5'>
            <Container>
                <Row>
                <Col lg={6} md={6} sm={12}>
                    <div>
                        <p className='text-white text-center'>All Copy right reserved by Md Shahrin Bin Selim</p>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                
                <div className='text-white text-center'>
                <i style={{fontSize:"24px"}}className="uil uil-facebook me-2"></i>
                <i style={{fontSize:"24px"}}className="uil uil-linkedin me-2"></i>
                <i style={{fontSize:"24px"}}className="uil uil-twitter"></i>
                </div>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;