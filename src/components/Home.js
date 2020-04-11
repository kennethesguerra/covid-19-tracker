import React, { Component } from 'react';
import axios from 'axios';
import CaseStatus from './CaseStatus';

class Home extends Component {
  state = {
    world: {}, 
    userCountry: {},
    userCountryCode: '',
    userCountryName: ''
  }

  async componentDidMount() {

    await axios.get('http://ip-api.com/json')
      .then(res => {
        this.setState({
          userCountryCode: res.data.countryCode, 
          userCountryName: res.data.country
        })
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

  formatNumber = (num) => {

    if (typeof num !== "undefined") {
      return num.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
    }
    
    return 0;
  }
  
  render() {
    const { world } = this.state;
    const { userCountry } = this.state;

    const worldSummary = Object.entries(world).length ? (
      <div className="row">
        <h4 className="center grey-text text-darken-2">Global</h4>
        <CaseStatus details={world} formatNumber={this.formatNumber} />
      </div>
    ) : (
      <div className="center">Loading...</div>
    )

    const userCountrySummary = Object.entries(userCountry).length ? (
      <div className="row">
        <h5 className="center grey-text text-darken-2">{ this.state.userCountryName }</h5>
        <CaseStatus details={userCountry} formatNumber={this.formatNumber} />
      </div>
    ) : (
      <div className="center">Loading...</div>
    )
    
    return (
      <div className="summary">
        {worldSummary}
        {userCountrySummary}
      </div>
    )
  }
}

export default Home