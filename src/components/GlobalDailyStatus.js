import React, { Component } from 'react';
import axios from 'axios';
import Preloader from './Preloader';
import DailyLineChart from './charts/DailyLineChart';
import HistoryTable from './HistoryTable';

class GlobalDailyStatus extends Component {

  state = {
    dailyCases: []
  }
  async componentDidMount() {
    let currDate = new Date();
    currDate.setDate(currDate.getDate() - 25);
    let arrCases = [];

    for (let i = 0; i < 24; i++) {
      currDate.setDate(currDate.getDate() + 1);

      let txtDate = (currDate.getMonth() + 1 ) + '-' + currDate.getDate() + '-' + currDate.getFullYear();

      await axios.get('https://covid19.mathdro.id/api/daily/' + txtDate)
        .then(res => {
          let totalConfirmed = 0;
          let totalRecovered = 0;
          let totalDeaths = 0;
          res.data.forEach((data) => {
            totalConfirmed += parseInt(data.confirmed);
            totalRecovered += parseInt(data.recovered);
            totalDeaths += parseInt(data.deaths);
          })
          arrCases.push({txtDate, totalConfirmed, totalRecovered, totalDeaths});
        })
        .catch(error => {
          console.log(error.response)
        });
    }

    this.setState({
      dailyCases: arrCases
    })
  }

  render() {
    const {dailyCases} = this.state;
    console.log(dailyCases);
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
        <h5>Global Daily Reports</h5>
        <hr />
        {dailyCasesData}
      </div>
    )
  }
}

export default GlobalDailyStatus
