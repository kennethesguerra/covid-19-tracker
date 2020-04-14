/**
 * Worldwide Component
 * 
 * This component serves all countries status of the outbreak
 * 
 * @author Mark Kenneth Esguerra <esguerrakenneth@gmail.com>
 */
import React, { Component } from 'react'
import axios from 'axios';
import { formatNumber, getStatusInCountry } from '../utils/';
import Preloader from './Preloader';

class Worldwide extends Component {
  state = {
    countries: []
  };

  async componentDidMount() {
    let countries = [];
    await axios.get('https://covid19.mathdro.id/api/countries')
      .then( res => {
        res.data.countries.map(country => {
          countries.push(country);
        })
      });
   
    for (let i = 0; i < countries.length; i++) {
      if (typeof countries[i].iso3 !== "undefined") {
        const data = await getStatusInCountry(countries[i], i);

        if (typeof data !== "undefined") {  
          this.setState({
            countries: [...this.state.countries, data]
          })
        }
      } 
    }
  }
  render() {
    const {countries} = this.state;
    const countriesList = countries.length ? (
      countries.map((countryCase) => {
        return (
          <tr>
            <td>{countryCase.name}</td>
            <td className="center">{formatNumber(countryCase.confirmed)}</td>
            <td className="center">{formatNumber(countryCase.recovered)}</td>
            <td className="center">{formatNumber(countryCase.deaths)}</td>
            <td className="center">{formatNumber(countryCase.confirmed - (countryCase.recovered + countryCase.deaths))}</td>
          </tr>
        )
      })
    ) : (
      <Preloader />
    )
    
    return (
      <div>
        <h5>Cases per Country/Territory </h5>
        <hr/>
        <table className="highlight striped responsive-table">
          <thead>
            <tr>
              <th className="center">Country</th>
              <th className="center">Confirmed</th>
              <th className="center">Recovered</th>
              <th className="center">Deaths</th>
              <th className="center">Active Cases</th>
            </tr>
          </thead>
          <tbody>
            {countriesList}
          </tbody>
        </table>
      </div>
    )
  }
}


export default Worldwide