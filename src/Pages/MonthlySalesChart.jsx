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
    <div className="w-full 
      2xl:w-[730px] 2xl:h-[450px]
      xl:w-[1000px] xl:h-[450px]
      lg:w-[730px] lg:h-[420px]
      md:w-[700px] md:h-[400px]
      sm:w-[600px] sm:h-[350px]
      xs:w-full xs:h-[350px]
      h-[200px] bg-white text-gray-800 rounded-md shadow-md relative flex flex-col">
      
      {/* Icon Buttons with margin adjustments */}
      <div className="absolute top-4 right-4 flex gap-2 mb-4">
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
      
      {/* Title with responsive text sizes */}
      <h2 className="text-lg text-[#264164] sm:text-xl md:text-2xl font-semibold mt-2 mb-6 ml-4">
        Monthly Sales
      </h2>
      
      {/* Chart Container with responsive widths */}
      <div className="flex-grow ml-4 mr-4 mb-4">
        <div className="w-full
          2xl:w-[90%] xl:w-[85%] lg:w-[80%] md:w-[75%] sm:w-[70%] xs:w-[100%] h-[350px]
          mx-auto">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default LineChart1;
