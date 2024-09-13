import React from 'react';

const Addprojectform = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg h-[600px] shadow-md overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* General Section */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Project Details</h3>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block mb-1 text-gray-700">Project Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* photo */}
        <div className="flex flex-col w-full md:full">
            <label className="block text-gray-700 mb-1 ">Add Project Photo</label>
            <input
            type="file"
            accept="image/*"
            className="border border-gray-300 rounded-md p-2"
            />
        </div>
        
        {/* Description */}
        <div className="md:col-span-2">
          <label className="block mb-1 text-gray-700">Add Members (@)</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Product Code */}
        <div>
          <label className="block mb-1 text-gray-700">Start Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

         {/* Product Code */}
         <div>
          <label className="block mb-1 text-gray-700">End Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Long Description */}
        <div className="md:col-span-2">
          <label className="block mb-1 text-gray-700">Description</label>
          <textarea
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

         {/* Description */}
         <div className="md:col-span-2">
          <label className="block mb-1 text-gray-700">Add Viwers (@)</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

      </div>

      <div className="mt-6">
        <button className="px-6 py-2 text-white rounded-md bg-[#CC7FFF] hover:bg-[#AE69F5] ">
          Create
        </button>
      </div>
    </div>
  );
};

export default Addprojectform;
