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
    <div className="w-full 
      2xl:w-[730px] 2xl:h-[450px]
      xl:w-[1500px] xl:h-[420px]
      lg:w-[1000px] lg:h-[420px]
      md:w-[700px] md:h-[400px]
      sm:w-[600px] sm:h-[350px]
      xs:w-full xs:h-[350px]
      h-[200px] bg-white text-gray-800 rounded-md shadow-md relative flex flex-col">
      
      {/* Icon Buttons with margin adjustments */}
      <div className="absolute top-4 right-4 flex gap-2 mb-2">
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
      <h2 className="text-[#264164] text-lg sm:text-xl md:text-2xl font-semibold mt-2 mb-6 ml-4">
        Daily Income
      </h2>
      
      {/* Chart Container with responsive widths */}
      <div className="flex-grow ml-4 mr-4 mb-4">
        <div className="w-full
          2xl:w-[98%] xl:w-[98%] lg:w-[95%] md:w-[90%] sm:w-[85%] xs:w-[90%] h-[350px]
          mx-auto">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default LineChart;
