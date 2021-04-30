import React, { Component } from "react";
import Container from "./container";
import Content from "./content";
import Value from "./value";
import MyServices from "./myServices";
import Spacing from "./spacing";
import Testimonial from "./testimonial";
import Clients from "./clients";
import Footer from "./footer";
import Carousle from "./carousle"
class Home extends Component {
  render() {
    return (
      <div>
        <Spacing />
        <Content />
        <Spacing />
        <Value />
        <Spacing />
        <MyServices />
        <Spacing/>
        <Testimonial/>
        <Spacing/>
        <Clients />
        <Spacing/>
        <Footer/>
      </div>  
            
    );
  }
}

export default Home;
