import React from 'react';
import { formatDate, formatNumber } from '../utils/'; 
import SummaryChart from './charts/SummaryChart';

const CaseStatus = ({details}) => {
  let lastUpdate = details.lastUpdate;
  let confirmed = details.confirmed.value;
  let recovered = details.recovered.value;
  let deaths = details.deaths.value;

  let active = confirmed - (recovered + deaths)

  let active_percentage = active / confirmed * 100;
  let recovered_percentage = (recovered / confirmed) * 100;
  let death_percentage = (deaths / confirmed) * 100;

  return (
    <div>
      <p className="center grey-text">Last updated at <b>{formatDate(lastUpdate)}</b></p>
      <div className="col s12 m5">
        <ul className="collection white-text darken-2">
          <li className="collection-item yellow darken-2">
            <div className="row">
              <div className="col s6 m6">
                <h6 className="left"><b>CONFIRMED CASES: </b></h6>
              </div>
              <div className="col s6 m6">
                <h6 className="right">{formatNumber(confirmed)} </h6>
              </div>
            </div>
          </li>
          <li className="collection-item green darken-3">
            <div className="row">
              <div className="col s6 m6">
                <h6 className="left"><b>RECOVERED: </b></h6>
              </div>
              <div className="col s6 m6">
                <h6 className="right">{formatNumber(recovered)} ({recovered_percentage.toFixed(2)}%) </h6>
              </div>
            </div>
          </li>
          <li className="collection-item red darken-3">
            <div className="row">
              <div className="col s6 m6">
                <h6 className="left"><b>DEATHS: </b></h6>
              </div>
              <div className="col s6 m6">
                <h6 className="right">{formatNumber(deaths)} ({death_percentage.toFixed(2)}%) </h6>
              </div>
            </div>
          </li>
          <li className="collection-item grey darken-1">
          <div className="row">
              <div className="col s6 m6">
                <h6 className="left"><b>ACTIVE CASES: </b></h6>
              </div>
              <div className="col s6 m6">
                <h6 className="right">{formatNumber(active)} ({active_percentage.toFixed(2)}%) </h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="col s12 m7">
        <SummaryChart active={active} recovered={recovered} deaths={deaths}  />
      </div>
    </div>
  )
}

export default CaseStatus