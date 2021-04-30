import React from 'react';
import BaseImage from "../images/2.png"
const Container = () => {
    return ( 
        <div className="container fluid">
                <div className="item">
                <img src={BaseImage} class="img-fluid" alt="Responsive image" style={{height:350,width:1100}}/> 
                </div>
        </div>  
     );
}
 
export default Container;
