import React, { useState } from 'react';
import { Pagination, Tooltip, Checkbox, Select, MenuItem } from '@mui/material';


function CompanyDetails() {
  return (
    <div>
      <ListGRN />
    </div>
  );
}

function ListGRN() {

  const [printType, setPrintType] = useState(false);

  return (
    <div>

      <div className="flex justify-center items-center mb-2 mt-3">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Change System Company Details</h1>
      </div>
      <hr className="bg-black mb-4" />

      {/* Form Section */}
      <div className="space-y-4">
        {/* Invoice No Starts With */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Company Name</label>
          <input 
            type="text" 
            placeholder="Asipiya international "  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

        {/* Invoice No Starts From */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Contact Number</label>
          <input 
            type="text" 
            placeholder="0774956990"  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

        {/* Quotation No Starts With */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Address Line 1</label>
          <input 
            type="text" 
            placeholder="11 mail post andamaphuwa junction "  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

        {/* Quotation No Starts From */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Address Line 2</label>
          <input 
            type="text" 
            placeholder="Buttala"  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

         {/* Quotation No Starts From */}
         <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Address Line 3</label>
          <input 
            type="text" 
            placeholder="Buttala"  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

      
      </div>

    </div>
  );
}

export default CompanyDetails;
