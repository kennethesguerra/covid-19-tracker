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
        <ul class="collection white-text darken-2">
          <li class="collection-item yellow darken-2">
            <h6><b>CONFIRMED CASES: </b>{formatNumber(confirmed)}</h6>
          </li>
          <li class="collection-item green darken-3">
            <h6><b>RECOVERED: </b>{formatNumber(recovered)} ({recovered_percentage.toFixed(2)}%)</h6>
          </li>
          <li class="collection-item red darken-3">
            <h6><b>DEATHS: </b>{formatNumber(deaths)} ({death_percentage.toFixed(2)}%)</h6>
          </li>
          <li class="collection-item grey darken-1">
            <h6><b>ACTIVE CASES: </b>{formatNumber(active)} ({active_percentage.toFixed(2)}%)</h6>
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