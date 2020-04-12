/**
 * Summary Component
 * 
 * This component displays a Pie Chart to demonstrate the 
 * status of the outbreak globally or regionally
 * 
 * @author Mark Kenneth Esguerra <esguerrakenneth@gmail.com>
 */
import React from 'react';
import { Pie } from 'react-chartjs-2';

const SummaryChart = ({recovered, deaths, active}) => {

  const data = {
      datasets: [{
          data: [active, recovered, deaths],
          backgroundColor: [
            'rgb(251,192,45)',
            'rgba(6, 151, 79, 0.8)', 
            'rgba(220, 19, 19, 0.9)'
          ]
      }],
      labels: [
          'Active',
          'Recovered',
          'Deaths'
      ], 
  };

  return (
    <div>
        <Pie data={data} options={{
            responsive: true 
         }} />
    </div>
  )
}

export default SummaryChart;
