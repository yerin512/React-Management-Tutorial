import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import Users from './components/pages/Users'
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';


function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        <Switch>
          <Route path="/movies">
            <Movies />
           
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
