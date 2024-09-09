import React from 'react';

const AddSuppliersform = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg h-[600px] shadow-md overflow-auto">
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* General Section */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">General</h3>
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Name</label>
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
          <label className="block mb-1 text-gray-700">GST No</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">VAT No</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Company Section */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Company Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Company Contact</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Branch Section */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Branch</h3>
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Branch Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Branch Address</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Branch Contact No</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-6">
        <button className="px-6 py-2 text-white rounded-md bg-[#CC7FFF]  hover:bg-[#AE69F5]">
          Add Branch
        </button>

        
      </div>

      {/* General Section */}
      <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Address</h3>
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Address line 1</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Address line 2</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Address line 3</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">City</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">State</label>
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

export default AddSuppliersform;
