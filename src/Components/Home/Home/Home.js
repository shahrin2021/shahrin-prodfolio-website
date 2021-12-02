import React from 'react';
import Contact from '../../Contact/Contact';
import ProjectReview from '../../ProjectReview/ProjectReview';
import Projects from '../../Projects/Projects';
import Reviews from '../../Reviews/Reviews';
import Services from '../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
      <About></About>
      <Services/>
      <Skills></Skills>
      <Projects></Projects>
      <Reviews></Reviews>
      <Contact></Contact>
        </div>
    );
};

export default Home;