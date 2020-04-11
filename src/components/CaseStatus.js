import React from 'react';

const CaseStatus = ({details, formatNumber}) => {
  return (
    <div>
      <p className="center grey-text">As of <b>{details.lastUpdate}</b></p>
      <div className="col s12 m4">
        <div className="card-panel yellow darken-3">
          <p><b>CONFIRMED CASES</b></p>
          <h4 className="white-text">{formatNumber(details.confirmed.value)}</h4>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card-panel green darken-3">
          <p><b>RECOVERED</b></p>
          <h4 className="white-text">{formatNumber(details.recovered.value)}</h4>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card-panel red darken-3">
          <p><b>DEATHS</b></p>
          <h4 className="white-text">{formatNumber(details.deaths.value)}</h4>
        </div>
      </div>
    </div>
  )
}

export default CaseStatus