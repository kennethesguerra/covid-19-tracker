import React, { Component } from 'react';
import axios from 'axios';
import Preloader from './Preloader';
import { getLocation } from '../utils/';
import DailyLineChart from './charts/DailyLineChart';
import HistoryTable from './HistoryTable';

class CountryDailyStatus extends Component {

  state = {
    dailyCases: [],
    countryName: '',
  }
  async componentDidMount() {
    let currDate = new Date();
    currDate.setDate(currDate.getDate() - 25);

    const location = await getLocation();
    let arrCases = [];
    
    this.setState({
      countryName: location.countryName
    });

    for (let id = 0; id < 24; id++) {
      currDate.setDate(currDate.getDate() + 1);

      let txtDate = (currDate.getMonth() + 1 ) + '-' + currDate.getDate() + '-' + currDate.getFullYear();

      await axios.get('https://covid19.mathdro.id/api/daily/' + txtDate)
        .then(res => {
          let totalConfirmed = 0;
          let totalRecovered = 0;
          let totalDeaths = 0;
          
          res.data.forEach((data) => {
            if (data.countryRegion === location.countryName) {
              totalConfirmed = parseInt(data.confirmed);
              totalRecovered = parseInt(data.recovered);
              totalDeaths = parseInt(data.deaths);
            }
          })
          arrCases.push({id, txtDate, totalConfirmed, totalDeaths, totalRecovered});
        })
        .catch(error => {
          console.log(error.response)
      });
    }

    this.setState({
      dailyCases: arrCases
    });
  }

  render() {
    const {dailyCases} = this.state;
    const dailyCasesData = dailyCases.length ? (
      <div>
        <DailyLineChart dailyCases={dailyCases} />
        <HistoryTable dailyCases={dailyCases} />
      </div>
    ) : (
      <Preloader />
    )
    return (
      <div>
        <h5>{this.state.countryName} Daily Reports</h5>
        <span className="grey-text small-text"><b>Note:</b> The data in this section is delayed. However, the latest statistics would be displayed in the home page.</span>
        <hr />
        {dailyCasesData}
      </div>
    )
  }
}

export default CountryDailyStatus
