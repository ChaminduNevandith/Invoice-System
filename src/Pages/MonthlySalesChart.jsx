import React from 'react';
import { IconButton } from '@mui/material';
import { ZoomIn, ZoomOut, Home } from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Product A',
      data: [400, 450, 500, 400, 600, 550, 700],
      borderColor: '#fbbf24', 
      backgroundColor: 'rgba(251, 191, 36, 0.2)',
      borderWidth: 2,
      fill: true,
      tension: 0.4, 
    },
    {
      label: 'Product B',
      data: [300, 400, 450, 500, 550, 600, 650],
      borderColor: '#34d399', 
      backgroundColor: 'rgba(52, 211, 153, 0.2)',
      borderWidth: 2,
      fill: true,
      tension: 0.4, 
    },
  ],
};

function LineChart1() {
  return (
    <div className="relative justify-center flex flex-col">
      <div className="absolute top-4 right-4 flex gap-2 mb-4 items-center">
        <IconButton size="small" className="bg-white shadow-sm">
          <ZoomOut />
        </IconButton>
        <IconButton size="small" className="bg-white shadow-sm">
          <ZoomIn />
        </IconButton>
        <IconButton size="small" className="bg-white shadow-sm">
          <Home />
        </IconButton>
      </div>
      <h2 className="text-xl font-semibold mb-2 ml-4">Monthly Sales</h2>
      <div className="flex-grow ml-4 mr-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default LineChart1;
