import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import logo from './coronavirus.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="home-page container">
            <div className="center">
              <Link to='/'>
                <img src={logo} className="logo"/>
                <h3 className="grey-text text-darken-2">COVID-19 Pandemic Tracker</h3>
              </Link>
              <p className="center grey-text">Made by<a href='http://github.com/kennethesguerra'> @kennethesguerra</a> using 
              <a href="http://github.com/kennethesguerra"> @mathdroid</a>'s Covid-19 API</p>
            </div>
            <Switch>
              <Route exact path='/covid-19-tracker/' component={Home}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
  
}

export default App;
