/**
 * Home Component
 * 
 * This component serves as the home page of the site. The homepage 
 * displays the Global status and the status of the country where
 * viewer is located using IP Address Lookup
 * 
 * @author Mark Kenneth Esguerra <esguerrakenneth@gmail.com>
 */

import React, { Component } from 'react';
import axios from 'axios';
import CaseStatus from './CaseStatus';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';
import { getLocation } from '../utils/';

class Home extends Component {
  state = {
    world: {}, 
    userCountry: {},
    userCountryCode: '',
    userCountryName: ''
  }

  async componentDidMount() {

    const location = await getLocation();
    
    this.setState({
      userCountryCode: location.countryCode, 
      userCountryName: location.countryName
    });
    
    axios.get('https://covid19.mathdro.id/api')
      .then(res => {
        this.setState({
          world: res.data
        })
      });

    axios.get('https://covid19.mathdro.id/api/countries/' + this.state.userCountryCode)
      .then(res => {
        this.setState({
          userCountry: res.data
        })
      });
  }
  
  render() {
    const { world } = this.state;
    const { userCountry } = this.state;
    const { userCountryName } = this.state;
    
    const worldSummary = Object.entries(world).length ? (
      <div>
        <div className="row">
          <h4 className="center grey-text text-darken-2">Global</h4>
          <CaseStatus details={world} />
        </div>
        <div className="row center">
          <div className="col s12 m12">
            <Link to='/daily' >
              <button className="btn waves-effect waves-light" type="button" name="action">
                See Global Daily Report Chart
              </button>
            </Link>
          </div>
        </div>
        <div className="row center">
          <Link to='/worldwide' >
            <button className="btn waves-effect waves-light" type="button" name="action">
              See cases by countries
            </button>
          </Link>
        </div>
      </div>
    ) : (
      <Preloader />
    )

    const userCountrySummary = Object.entries(userCountry).length ? (
      <div className="row">
        <h5 className="center grey-text text-darken-2">{ userCountryName }</h5>
        <p className="grey-text text-darken-2 center">(Viewer's country)</p>
        <CaseStatus details={userCountry} />
        <div className="row center">
          <div className="col s12 m12">
            <Link to='/daily/country' >
              <button className="btn waves-effect waves-light" type="button" name="action">
                See {userCountryName} Daily Report Chart
              </button>
            </Link>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    )
      
    return (

      <div className="summary">
        {worldSummary}
        <hr />
        {userCountrySummary}
      </div>
    )
  }
}

export default Home