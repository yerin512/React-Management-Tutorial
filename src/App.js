import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Navbar from './components/Navbar'



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            {routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact
                >
                  <route.component />
                </Route>
              )
            })}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
