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
  elements: {
    line: {
      tension: 0.4, 
    },
  },
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Daily Income',
      data: [400, 450, 500, 400, 600, 550, 700],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,  
    },
  ],
};

function LineChart() {
  return (
    
    <div className="relative flex flex-col w-full h-full ">
      <div className="absolute top-4 right-4 flex gap-2">
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
      <h2 className="text-xl font-semibold mb-2 ml-4">Daily Income</h2>
      <div className="flex-grow ml-4 mr-4 mb-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
