import React from 'react';
import { Col } from 'react-bootstrap';
import './service.css'

const Service = ({service}) => {
  
    return (
        <Col lg={4} mb={6} sm={12}>
            <div  className='text-center service-box'>
                <div className='mx-auto' style={{width:'180px'}}>
                    <img style={{ width:"140px" ,objectFit:'cover'}}src={service.img} alt="" />
                </div>
                <h5 className='service-title'>{service.name}</h5>
                <p className='service-details'>{service.description}</p>
            </div>
        </Col>
    );
};

export default Service;