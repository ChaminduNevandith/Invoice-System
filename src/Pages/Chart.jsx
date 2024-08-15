import React from 'react';

function Chart() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
      <div className="bg-white text-gray-800 rounded-md shadow-md p-4
      w-full 
      2xl:w-[1500px] 2xl:h-[800px]
      xl:w-[730px] xl:h-[450px]
      lg:w-[730px] lg:h-[420px]
      md:w-[700px] md:h-[400px]
      sm:w-[600px] sm:h-[350px]
      xs:w-full xs:h-[350px]
      h-[500px]">
        
        {/* Title */}
        <h2 className="text-lg font-medium text-center text-[#264164]
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
            <p className="text-[#264164] mb-4
              2xl:text-lg
              xl:text-md
              lg:text-sm
              md:text-xs
              sm:text-xs">
              Notes: Current sprint requires stakeholders to approve newly amended policies
            </p>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600
              2xl:px-8 2xl:py-3
              xl:px-7 xl:py-2.5
              lg:px-6 lg:py-2
              md:px-5 md:py-1.5
              sm:px-3 sm:py-1">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
