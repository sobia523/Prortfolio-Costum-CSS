import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    return (
    
        <div id="hero" className='hero-container'
        style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}>

            <Navbar />

            <div className="hero-content">
                <div className="hidden-lg"></div>
                <div className="hero-text">
                    <div className="hero-paragraph">
                        <p data-aos="zoom-in-up">I am</p>
                        <p data-aos="zoom-in-up">Sobia</p>
                        <p data-aos="zoom-in-up">Shehnaz</p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Hero;