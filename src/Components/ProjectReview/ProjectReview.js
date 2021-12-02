import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ProjectReview.css'
const ProjectReview = () => {
     const {id} = useParams();
     const [projects,setProjects] = useState([]);

     useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shahrin2021/user-review/main/project.js')
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            setProjects(data)
           
        })
     },[id])

     console.log(projects)

     const singleProject=projects.find(project=> project?.id == id) 
    return (
        <div className='projectDetails-area'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='text-center'>
                            <img style={{maxWidth:"75%", height:'300px'}} src={singleProject?.img} alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                           <div>
                               <div>
                               <h5 className="text-white">{singleProject?.name}</h5>
                            <p className='text-white'>
                                {singleProject?.description}
                            </p>
                               </div>
                                   <div className='d-flex align-items-center text-white'>
                                       <h6 className='m-0'>Technology: </h6>
                                       <p className='m-0'>Html , Css, and Javascript </p>
                                   </div>
                           </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectReview;