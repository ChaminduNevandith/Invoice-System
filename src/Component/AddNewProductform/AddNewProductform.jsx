import React from 'react';

const AddNewProductform = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg h-[600px] shadow-md overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* General Section */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Product Details</h3>
        </div>

        {/* Product Type */}
        <div>
          <label className="block mb-1 text-gray-700">Product Type</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option>Select...</option>
          </select>
        </div>

        {/* Product Category */}
        <div>
          <label className="block mb-1 text-gray-700">Product Category</label>
          <input
            type="text"
            value="Item Default"
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>

        {/* Product Sub Category */}
        <div>
          <label className="block mb-1 text-gray-700">Product Sub Category</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option>Default</option>
          </select>
        </div>

        {/* Product Name */}
        <div>
          <label className="block mb-1 text-gray-700">Product Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Product Code */}
        <div>
          <label className="block mb-1 text-gray-700">Product Code</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block mb-1 text-gray-700">Description</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Long Description */}
        <div className="md:col-span-2">
          <label className="block mb-1 text-gray-700">Long Description</label>
          <textarea
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Quantity Type */}
        <div>
          <label className="block mb-1 text-gray-700">Quantity Type</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option>Select...</option>
          </select>
        </div>

        {/* Item Has Serial No */}
        <div>
          <label className="block mb-1 text-gray-700">Item Has Serial No</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Cost */}
        <div>
          <label className="block mb-1 text-gray-700">Cost</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Rate */}
        <div>
          <label className="block mb-1 text-gray-700">Rate</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Expired Date */}
        <div>
          <label className="block mb-1 text-gray-700">Expired Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Quantity Type (Extra) */}
        <div>
          <label className="block mb-1 text-gray-700">Quantity Type</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option>Select...</option>
          </select>
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

export default AddNewProductform;
