import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Project.css'
const Project = ({project}) => {
    return (
        <Col lg={4} md ={6} sm={12} style={{display:"flex",justifyContent:"center"}}>
            <Card className='projectCard' style={{ maxWidth: '22rem' }}>
                <div  className='projects-img' style={{height:"200px"}} >
                <Card.Img style={{height:"100%",objectFit:'cover'}} variant="top" src={project.img}/>
                <div className='Project-details'>
                    <NavLink to ={`/project/${project.id}`}>
                <Button  className='btn btn-success'>Details</Button>
                </NavLink>
                </div>
                </div>
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                    {project.description}
                    </Card.Text>
                
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;