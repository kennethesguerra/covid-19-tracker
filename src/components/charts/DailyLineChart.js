
import React from 'react';
import { Line } from 'react-chartjs-2';

const DailyLineChart = ({dailyCases}) => {

  const labels = [];
  const confirmed = [];
  const deaths = [];
  const recovered = [];
  const active = [];

  dailyCases.map((dailyCase) => {
    labels.push(dailyCase.txtDate);
    confirmed.push(dailyCase.totalConfirmed);
    deaths.push(dailyCase.totalDeaths);
    recovered.push(dailyCase.totalRecovered);

    const newCases = parseInt(dailyCase.totalConfirmed) - (parseInt(dailyCase.totalRecovered) + parseInt(dailyCase.totalDeaths));
    active.push(newCases);
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
        label: 'Active', 
        borderColor: "grey",
        backgroundColor: "rgba(0, 0, 0, 0.0)", 
        data: active  
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
        For a pandemic like COVID-19, institutions have prioritized measures that will "flatten the curve". This means 
        managing the daily number of cases to a level that can be accommodated by a country's health care system. In this 
        graph, such scenario will have happened if the <span className="grey white-text">gray</span> line shows 
        a flatter and more downward trend over time rather than a continuous upward slope. And we hope the green line would 
        go up
      </p>
    </div>
  )
}

export default DailyLineChart
