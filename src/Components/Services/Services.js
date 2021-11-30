import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices]= useState([])
     useEffect(()=>{
         fetch('https://raw.githubusercontent.com/shahrin2021/myservice/main/index.js')
         .then(res=>res.json())
         .then(data=> {
             
            
            setServices(data)

            console.log(data)
          } )

     },[])
    return (
       
            <Container>
                <div  className='services-heading'>
                <h2 >My Services</h2>
                </div>
                <Row>
                    {
                    services.map(service=><Service
                        service={service}
                        key={service.name}
                    
                    
                    />)

                    }
                </Row>
            </Container>
      
    );
};

export default Services;