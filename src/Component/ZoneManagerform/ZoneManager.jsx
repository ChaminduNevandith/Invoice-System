import React from 'react';
import { Edit, Delete, Close } from '@mui/icons-material'; // Correct Close Icon import

const ZoneManager = () => {
  return (

      <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg h-[500px] shadow-md overflow-auto">

        {/* Modal Body */}
        <div className="p-4">
          {/* Description Input */}
          <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            placeholder="Enter description"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Add Button */}
          <button className=" text-white font-medium w-full py-2 rounded-md bg-[#CC7FFF]  hover:bg-[#AE69F5] ">
            Add
          </button>
        </div>

        {/* Table */}
        <div className="p-4">
          <table className="min-w-full border text-left">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">Default</td>
                <td className="px-4 py-2">
                  <button className="mr-2 text-blue-600 hover:underline"><Edit fontSize="small" /></button>
                  <button className="text-red-600 hover:underline"><Delete fontSize="small" /></button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-600">Entries per page: 1</span>
            <div className="flex space-x-2">
              <button className="px-2 py-1 border bg-gray-100 text-gray-600 rounded-md">‹</button>
              <span className="text-gray-600">1 of 1</span>
              <button className="px-2 py-1 border bg-gray-100 text-gray-600 rounded-md">›</button>
            </div>
          </div>
        </div>
      </div>

  );
};

export default ZoneManager;
