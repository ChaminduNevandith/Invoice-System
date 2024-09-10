import React from 'react';

const Addsalesmanform = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg h-[600px] shadow-md overflow-auto">
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* General Section */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">General</h3>
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Salesman No</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Salesman Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Telephone</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">NIC</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">ETF No</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        
      </div>

      

      <div className="mt-6">
        <button className="px-6 py-2 text-white rounded-md bg-[#CC7FFF]  hover:bg-[#AE69F5]">
          Save
        </button>
      </div>
    </div>
  );
};

export default Addsalesmanform;
