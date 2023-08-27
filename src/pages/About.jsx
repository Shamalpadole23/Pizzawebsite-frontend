import React from "react";
import HeroImage from './multiplepizza.jpeg';
import '../styles/About.css';

function About(){
    return(
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage:`url(${HeroImage})`}}>

            </div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum, fuga eligendi qui perferendis repudiandae animi magnam quidem odio neque maiores voluptas nostrum vel fugit odit, temporibus, veniam ipsa! Fuga!</p>
            </div>
        </div>
    );
} 

export default About;