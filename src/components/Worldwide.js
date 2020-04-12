/**
 * Worldwide Component
 * 
 * This component serves all countries status of the outbreak
 * 
 * @author Mark Kenneth Esguerra <esguerrakenneth@gmail.com>
 */
import React, { Component } from 'react'
import axios from 'axios';
import { formatNumber } from '../utils/';
import Preloader from './Preloader';

class Worldwide extends Component {
  state = {
    countries: []
  };

  async componentDidMount() {
    await axios.get('https://covid19.mathdro.id/api/countries')
      .then( res => {
        res.data.countries.map(async (country) => {
          await axios.get('https://covid19.mathdro.id/api/countries/' + country.iso3)
            .then(details => {
              let country_deets = {
                name: country.name,
                confirmed: details.data.confirmed,
                recovered: details.data.recovered,
                deaths: details.data.deaths,
                lastUpdate: details.data.lastUpdate
              }
              this.setState({
                countries: [...this.state.countries, country_deets]
              })
            })
            .catch (error => {
              console.log(error);
            })
        })
      });
  }
  render() {
    const countries = this.state.countries;
    const countriesList = countries.length ? (
      countries.map((country) => {
        return (
          <tr>
            <td>{country.name}</td>
            <td className="center">{formatNumber(country.confirmed.value)}</td>
            <td className="center">{formatNumber(country.recovered.value)}</td>
            <td className="center">{formatNumber(country.deaths.value)}</td>
            <td className="center">{formatNumber(country.confirmed.value - (country.recovered.value + country.deaths.value))}</td>
          </tr>
        )
      })
    ) : (
      <td colspan="5">
        <Preloader />
      </td>
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