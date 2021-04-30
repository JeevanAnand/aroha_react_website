import React, { Component } from 'react';
import Image from "../images/img-clients.jpg"

const Testimonial = () => {
    return (  
        <div className="container fluid">
                <div className="item">
                <img src={Image} class="img-fluid" alt="Responsive image" style={{height:350,width:1100}}/> 
                </div>
        </div> 
    );
}
 
export default Testimonial;