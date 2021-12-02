import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shahrin2021/user-review/main/project.js')
        .then(res=>res.json())
        .then(data=> {
            setProjects(data)
            console.log(data)
        })
    },[])
    return (
        <div id='projects'>
        <Container>
            <h2 className='text-success text-center mb-5'>My Resent Project</h2>
            <Row>
                {
                  projects.map(project=> <Project
                    project={project}
                    key= {project.id}
                  
                  
                  />)  
                }
            </Row>
        </Container>
        </div>
    );
};

export default Projects;