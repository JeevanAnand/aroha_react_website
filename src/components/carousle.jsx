import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../images/1.png"
import Image2 from "../images/2.png"
import Image3 from "../images/3.png"

export default function CarouselComponent() {
    return (
        <div>
            <Carousel infiniteLoop  autoPlay showThumbs={false}>
          
                <img src={Image1} class="img-fluid" alt="Responsive image" style={{height:350,width:1100}}/> 
                <img src={Image2} class="img-fluid" alt="Responsive image" style={{height:350,width:1100}}/>
                <img src={Image3} class="img-fluid" alt="Responsive image" style={{height:350,width:1100}} />
                   
            </Carousel>
        </div>
    );
}