import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';
 import Company from "./components/company"
 import Contact from "./components/contact"
 import Platform from "./components/platform"
 import Resource from "./components/resources"
 import Service from "./components/services"
 import Technologies from "./components/technologies"
 import Home from "./components/home"
 import NotFound from "./components/notFound";
import NavBar from "./components/navBar"
import Container from "./components/container"
import Carousle from "./components/carousle"


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Carousle />
      <main role="main" class="container">
        <Switch>
          <Route path="/company" component={Company} />
          <Route path="/contact" component={Contact} />
          <Route path='/platform' component={Platform} />
          <Route path='/resources' component={Resource} />
          <Route path='/services' component={Service} />
          <Route path='/not-found' component={NotFound} />
          <Route path='/technologies' component={Technologies} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Home} />
          <Redirect to='/not-found' />
        </Switch>
      </main>
  
    </React.Fragment>
  );
}

export default App;
  