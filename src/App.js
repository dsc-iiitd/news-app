import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = ()=> {
  const pageSize = 5;
  const apiKey = '7d53942ac79c432294211380158c7e21'
 
    return (
      <div>
         <NavBar/> 
          <News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>
        {/* <Router>
       
          <Switch>
          <Route exact path="/"></Route> 
          <Route exact path="/business"><News  apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router> */}
      </div>
    )
 
}

export default App;
