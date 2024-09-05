import React, { useState } from 'react';
import { Pagination, Tooltip, Checkbox, Select, MenuItem } from '@mui/material';
import Customize from './Customize';

function InvoiceSettings() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <ListGRN />
    </div>
  );
}

function ListGRN() {

  const [printType, setPrintType] = useState(false);

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full mb-[150px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Invoice Settings</h1>
      </div>
      <hr className="bg-black mb-2" />

      <div className="flex justify-center items-center mb-2 mt-3">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Add Your Invoice Details</h1>
      </div>
      <hr className="bg-black mb-4" />

      {/* Form Section */}
      <div className="space-y-4">
        {/* Invoice No Starts With */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Invoice No Starts With</label>
          <input 
            type="text" 
            placeholder="ABCDEFG"  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

        {/* Invoice No Starts From */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Invoice No Starts From</label>
          <input 
            type="text" 
            placeholder="555412"  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

        {/* Quotation No Starts With */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Quotation No Starts With</label>
          <input 
            type="text" 
            placeholder="ABCDEFG"  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

        {/* Quotation No Starts From */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Quotation No Starts From</label>
          <input 
            type="text" 
            placeholder="1000"  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

        {/* Print Type */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Print Type</label>
          <div className="w-full md:w-2/3 flex items-center mt-2 md:mt-0">
            <span className="mr-2 text-[#264164]">Activate</span>
            <Checkbox 
              checked={printType} 
              onChange={(e) => setPrintType(e.target.checked)} 
            />
          </div>
        </div>

        {/* Invoice has Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Invoice has Header</label>
          <Select 
            className="w-full md:w-[200px] h-[50px] p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </div>
      </div>

      <Customize></Customize>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-end mt-6 ">
        <button className="px-6 py-2 mr-2 mb-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 transition-all duration-200">
          + Save
        </button>
        <button className="px-6 py-2 mr-2 mb-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 transition-all duration-200">
          + Cancel
        </button>
      </div>
    </div>
  );
}

export default InvoiceSettings;
