import React from 'react';
import LineChart from './LineChart';
import MonthlySalesChart from './MonthlySalesChart';
import Table from './Table';
import Chart from './Chart';
import Container from 'postcss/lib/container';

const circleColors = [
  'bg-purple-500',
  'bg-green-500',
  'bg-yellow-400',
  'bg-blue-500'
];

const names = [
  'Today Invoice Count',
  'Customer Count',
  'Supplier Count',
  'Today Invoice Count'
];

const counts = [
  15,
  30,
  7,
  22
];

function DashBoard() {
  return (
    <div className=" bg-gray-100  absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10">
      
      {/* Circle Cards */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
        {[...Array(4)].map((_, index) => (
          <div key={index} className='relative w-[280px] h-[120px] sm:w-[320px] sm:h-[140px] md:w-[350px] md:h-[160px] bg-white rounded-md p-4 overflow-hidden shadow-md'>
            <div className='absolute top-[-30px] right-[-30px]'>
              {/* Top circle */}
              <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24 2xl:w-24 2xl:h-24 rounded-full ${circleColors[index]} absolute top-0 right-4 opacity-50`}></div>
              {/* Bottom circle */}
              <div className={`w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] rounded-full ${circleColors[index]} absolute top-[60px] right-2 opacity-30`}></div>
            </div>
            <div className='text-[#264164] text-lg sm:text-base md:text-lg font-semibold mt-4'>{names[index]}</div>
            <div className='text-[#264164] text-xl sm:text-2xl md:text-3xl font-bold mt-1'>{counts[index]}</div>
          </div>
        ))}
      </div>

      {/* Line Charts */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
          <LineChart /> 
          <MonthlySalesChart />
        
      </div>

      {/* Table */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 ">
          <Table />
        </div>
      

       {/* Bars */}
       <div className="flex flex-wrap justify-center gap-3 mt-8">
        <div className='w-full sm:w-[600px] md:w-[700px] lg:w-[730px] xl:w-[1000px] 2xl:w-[730px] h-[300px] sm:h-[350px] md:h-[400px] bg-white text-gray-800 rounded-md shadow-md'>
          <span className='text-lg sm:text-xl md:text-2xl font-semibold block ml-4 sm:ml-5 md:ml-6 mt-4 sm:mt-5 md:mt-6 text-[#264164]'>Recent Activity</span>
        </div>
        <div className='w-full sm:w-[600px] md:w-[700px] lg:w-[730px] xl:w-[1000px] 2xl:w-[730px] h-[300px] sm:h-[350px] md:h-[400px] bg-white text-gray-800 rounded-md shadow-md'>
          <span className='text-lg sm:text-xl md:text-2xl font-semibold block ml-4 sm:ml-5 md:ml-6 mt-4 sm:mt-5 md:mt-6 text-[#264164]'>Near by Cheques</span>
          <div className='text-lg sm:text-xl md:text-2xl font-medium flex items-center justify-center mt-[80px] sm:mt-[100px] md:mt-[120px]'>No data available</div>
        </div>
      </div>
      
      {/* Additional Chart */}
      <div className='flex flex-wrap justify-center gap-3 mt-8 '>
        
          <Chart />
   
      </div>
    </div>
  );
}

export default DashBoard;
