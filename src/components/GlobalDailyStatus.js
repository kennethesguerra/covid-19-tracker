import React, { Component } from 'react';
import DailyLineChart from './charts/DailyLineChart';
import axios from 'axios';
import Preloader from './Preloader';

class GlobalDailyStatus extends Component {

  state = {
    dailyCases: []
  }
  async componentDidMount() {
    let currDate = new Date();
    currDate.setDate(currDate.getDate() - 48);
    let arrDate = []

    for (let i = 0; i < 24; i++) {
      currDate.setDate(currDate.getDate() + 2);

      let txtDate = (currDate.getMonth() + 1 ) + '-' + currDate.getDate() + '-' + currDate.getFullYear();
      console.log(currDate, txtDate);
      arrDate.push(txtDate);

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
          this.setState({
            dailyCases: [...this.state.dailyCases, {txtDate, totalConfirmed, totalDeaths, totalRecovered}]
          });
        })
    }
    console.log(arrDate);
  }

  render() {
    const {dailyCases} = this.state;
    console.log(dailyCases);
    const dailyCasesData = dailyCases.length ? (
      <DailyLineChart dailyCases={dailyCases} />
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
