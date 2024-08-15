import React from 'react';
import LineChart from './LineChart';
import MonthlySalesChart from './MonthlySalesChart';
import Table from './Table';

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
    <div className="border-t-2 bg-gray-100 border-black absolute top-[115px] right-0 w-full h-full overflow-auto p-8">
      
      <div className="flex flex-wrap justify-center gap-8 mt-10 ">
        {[...Array(4)].map((_, index) => (
          <div key={index} className='relative w-[350px] h-[130px] bg-white rounded-md p-4 overflow-hidden shadow-md'>
            <div className='absolute top-[-30px] right-[-30px]'>
              {/* Top circle */}
              <div className={`w-24 h-24 rounded-full ${circleColors[index]} absolute top-0 right-4 opacity-50`}></div>
              {/* Bottom circle */}
              <div className={`w-[60px] h-[60px] rounded-full ${circleColors[index]} absolute top-[60px] right-2 opacity-30`}></div>
            </div>
            <div className='text-lg font-semibold mt-4'>{names[index]}</div>
            <div className='text-2xl font-bold mt-1'>{counts[index]}</div>
          </div>
        ))}
      </div>

      {/* New Bars */}
      <div className="flex flex-wrap  justify-center  gap-3 mt-8 ">
        <div className='w-[730px] h-[400px] bg-white text-gray-800 rounded-md ml-6 shadow-md'>
          <LineChart /> 
        </div>
        <div className='w-[730px] h-[400px] bg-white text-gray-800 rounded-md ml-6 shadow-md'>
          <MonthlySalesChart/>
        </div>
      </div>

      {/* Larger Bar */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 ">
        <Table/>
      </div>

      {/* Bars */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <div className='w-[730px] h-[400px] bg-white text-gray-800 rounded-md ml-6 shadow-md'>
          <span className='text-xl font-semibold block ml-5 mt-5'>Recent Activity</span>
        </div>
        <div className='w-[730px] h-[400px] bg-white text-gray-800 rounded-md ml-6 shadow-md'>
          <span className='text-xl font-semibold block ml-5 mt-5'>Near by Cheques</span>
          <div className='text-lg font-medium flex items-center justify-center mt-[100px] ' >No data available</div>
        </div>
      </div>

        
    </div>
  );
}

export default DashBoard;
