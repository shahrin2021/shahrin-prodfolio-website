import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        
            <div class="contact section" id="contact" style={{ marginTop:'80px'}} id='contact'>
            <Container>
            <h2  style={{fontSize:'36px'}} class="section__title text-center text-white">Contact Me</h2>
            <span style={{fontSize:'23px'}} class=" text-center d-block text-white mb-5">Get in touch</span>
           
               <div>
                <form action="" class="contact__form ">
                    <div class="contact__inputs">
                        <div class="contact__content  mb-3">
                            <label class="contact__lable" for="">Name</label>
                            <input type="text" class="contact__input"/>
                        </div>
                        <div class="contact__content  mb-3">
                            <label class="contact__lable" for="">Email</label>
                            <input type="email" class="contact__input"/>
                        </div>
                    </div>
                    <div class="contact__content  mb-3">
                        <label class="contact__lable" for="">Project</label>
                        <input type="text" class="contact__input"/>
                    </div>
                    <div class="contact__content">
                        <label class="contact__lable" for="">Massage</label>
                        <textarea name="" id="" cols="30" rows="10" class="contact__input"></textarea>
                    </div>

                    <div className='mt-3 text-center'>
                        < button type='submit' class="btn  btn-primary">
                            Send Massage
                        </button>
                    </div>
                </form>
                </div>
            </Container>
            </div>
        
    );
};

export default Contact;