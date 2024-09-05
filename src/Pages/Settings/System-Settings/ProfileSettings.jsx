import React, { useState } from 'react';
import { Pagination, Tooltip, Checkbox, Select, MenuItem } from '@mui/material';


function ProfileSettings() {
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

      <div className="flex justify-center items-center mb-2 mt-5">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Change System Profile Settings</h1>
      </div>
      <hr className="bg-black mb-4" />

      {/* Form Section */}
      <div className="space-y-4">
        {/* Invoice No Starts With */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Change Email</label>
          <input 
            type="email" 
            placeholder="Chami"  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

        {/* Invoice No Starts From */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Change Password</label>
          <input 
            type="password" 
            placeholder="************"  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

        {/* Quotation No Starts With */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Change Username</label>
          <input 
            type="text" 
            placeholder="D4RKER"  
            className="w-full md:w-2/3 p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          />
        </div>

         {/* Invoice Header Label and File Input */}
         <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 mb-5">
        {/* First Label */}
        <label className="w-full md:w-1/3 text-[#264164] mt-5">Invoice Header</label>
        
        {/* Second Label and File Input */}
        <div className="flex flex-col w-full md:w-2/3">
            <label className="block text-[#ff6661] mb-1 text-xs">* Please upload a PNG header (2480px x 150px)</label>
            <input
            type="file"
            accept="image/*"
            className="border border-gray-300 rounded-md p-2"
            />
        </div>
        </div>

        
      
      </div>

    </div>
  );
}

export default ProfileSettings;
