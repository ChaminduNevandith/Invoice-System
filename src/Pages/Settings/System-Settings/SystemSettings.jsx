import React, { useState } from 'react';
import { Pagination, Tooltip, Checkbox, Select, MenuItem } from '@mui/material';
import CompanyDetails from './CompanyDetails';
import ProfileSettings from './ProfileSettings';
import ChangeSystemSettings from './ChangeSystemSettings';


function SystemSettings() {
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
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">System Settings</h1>
      </div>
      <hr className="bg-black mb-2" />

      <CompanyDetails></CompanyDetails>
      <ProfileSettings></ProfileSettings>
      <ChangeSystemSettings></ChangeSystemSettings>



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

export default SystemSettings;
