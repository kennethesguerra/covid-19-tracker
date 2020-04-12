
import React, { Component } from 'react';
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
  console.log(confirmed);
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
    </div>
  )
}

export default DailyLineChart
