import React from 'react';

function Chart() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      <div className="bg-white text-gray-800 rounded-md shadow-md p-8
        2xl:w-[1500px] 2xl:h-[800px]
        xl:w-[1200px] xl:h-[700px]
        lg:w-[900px] lg:h-[600px]
        md:w-[600px] md:h-[500px]
        sm:w-[400px] sm:h-[400px]">
        
        {/* Title */}
        <h2 className="text-lg font-medium text-center text-blue-900
          2xl:text-2xl
          xl:text-xl
          lg:text-lg
          md:text-md
          sm:text-sm">
          Action needed
        </h2>

        {/* Note Section */}
        <div className="flex flex-col items-center justify-around h-full mt-6">
          {/* Notes and Button */}
          <div className="text-center
            2xl:text-lg
            xl:text-md
            lg:text-sm
            md:text-xs
            sm:text-xs">
            <p className="text-gray-500 mb-4
              2xl:text-lg
              xl:text-md
              lg:text-sm
              md:text-xs
              sm:text-xs">
              Notes: Current sprint requires stakeholders to approve newly amended policies
            </p>
            <button className="px-6 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600
              2xl:px-8 2xl:py-3
              xl:px-7 xl:py-2.5
              lg:px-6 lg:py-2
              md:px-5 md:py-1.5
              sm:px-4 sm:py-1">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
