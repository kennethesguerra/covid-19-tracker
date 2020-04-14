
import React from 'react';
import { Line } from 'react-chartjs-2';

const DailyLineChart = ({dailyCases}) => {

  const labels = [];
  const confirmed = [];
  const deaths = [];
  const recovered = [];

  dailyCases.map((dailyCase) => {
    labels.push(dailyCase.txtDate);
    confirmed.push(dailyCase.totalConfirmed);
    deaths.push(dailyCase.totalDeaths);
    recovered.push(dailyCase.totalRecovered);
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Confirmed', 
        borderColor: "yellow",
        backgroundColor: "rgba(0, 0, 0, 0.0)", 
        data: confirmed
      },
      {
        label: 'Recovered', 
        borderColor: "green",
        backgroundColor: "rgba(0, 0, 0, 0.0)", 
        data: recovered
      },
      {
        label: 'Deaths', 
        borderColor: "red",
        backgroundColor: "rgba(0, 0, 0, 0.0)", 
        data: deaths
      }
    ],
  }

  return (
    <div>
      <Line data={data} />
      <h6><b>Are we flattening the curve?</b></h6>
      <p>
        Our guide to <i>"flatting the curve"</i> is to let <span className="green darken-3 white-text">green</span> or the <span className="red darken-3 white-text">red</span> (deeply wishing this stays in its current axis forever) 
        going to the right would get closer and closer until it reaches the <span className="yellow darken-3 white-text">yellow</span> line.
      </p>
    </div>
  )
}

export default DailyLineChart
