import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Worldwide from './components/Worldwide';
import GlobalDailyStatus from './components/GlobalDailyStatus';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">
          <div className="row blue darken-4 header">
            <div className="col s12 m9">
            <Link to='/'><h5>COVID-19 Pandemic Status</h5></Link>
            </div>
            <div className="col s12 m3">
              <a href="https://github.com/kennethesguerra/covid-19-stat"><i className="fab fa-github fa-3x right"></i></a>
            </div>
          </div>
          <div className="home-page container">
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/worldwide' component={Worldwide}></Route>
              <Route exact path='/daily' component={GlobalDailyStatus}></Route>
            </Switch>
          </div>
          <p className="center grey-text">Visualization by<a href='http://github.com/kennethesguerra'> @kennethesguerra</a><br />
          Data access from John Hopkins University CSSE via <a href="http://github.com/mathdroid"> @mathdroid</a>'s Covid-19 API</p>
        </div>
      </HashRouter>
    )
  }
  
}

export default App;
