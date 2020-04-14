import React from 'react'
import Preloader from './Preloader';
import { formatNumber } from '../utils/';

const HistoryTable = ({dailyCases}) => {
  let arrData = [];

  for (let i = dailyCases.length; i >= 0; i--) {
    if (typeof dailyCases[i] !== "undefined") {
      let r = i - 1;

      if (r >= 0) {
        let data = {
          txtDate: dailyCases[i].txtDate,
          newCases: dailyCases[i].totalConfirmed - dailyCases[r].totalConfirmed, 
          totalConfirmed: dailyCases[i].totalConfirmed,
          newRecoveries: dailyCases[i].totalRecovered - dailyCases[r].totalRecovered, 
          totalRecovered: dailyCases[i].totalRecovered,
          newDeaths: dailyCases[i].totalDeaths - dailyCases[r].totalDeaths, 
          totalDeaths: dailyCases[i].totalDeaths,
        }
        arrData.push(data);
      }
    }
  }

  const historyList = arrData.length ? (
    arrData.map((data, key) => {
      return(
        <tr key={key}>
          <td className="center">{data.txtDate}</td>
          <td className="center">{formatNumber(data.totalConfirmed)}</td>
          <td className="center"><b>+{formatNumber(data.newCases)}</b></td>
          <td className="center">{formatNumber(data.totalRecovered)}</td>
          <td className="center"><b>+{formatNumber(data.newRecoveries)}</b></td>
          <td className="center">{formatNumber(data.totalDeaths)}</td>
          <td className="center"><b>+{formatNumber(data.newDeaths)}</b></td>
        </tr>
      )
    })
  ) : (
    <Preloader />
  )

  return (
    <div> 
      <h5>Historical Data</h5>
      <table className="highlight striped responsive-table">
          <thead>
            <tr>
              <th className="center">Date</th>
              <th className="center">Total Cases</th>
              <th className="center">New Cases</th>
              <th className="center">Total Recoveries</th>
              <th className="center">New Recoveries</th>
              <th className="center">Total Deaths </th>
              <th className="center">New Deaths</th>
            </tr>
          </thead>
          <tbody>
            {historyList}
          </tbody>
        </table>
    </div>
  )
}

export default HistoryTable