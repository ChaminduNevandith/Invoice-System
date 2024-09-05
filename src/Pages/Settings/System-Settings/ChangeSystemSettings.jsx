import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';

function ChangeSystemSettings() {
  return (
    <div>
      <ListGRN />
    </div>
  );
}

function ListGRN() {
  const [themeLayout, setThemeLayout] = useState('light');
  const [language, setLanguage] = useState('English');
  const [timezone, setTimezone] = useState('GMT');

  const handleThemeLayoutChange = (layout) => {
    setThemeLayout(layout);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center items-center mb-2 mt-3">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Change System Settings</h1>
      </div>
      <hr className="bg-black mb-4" />

      {/* Form Section */}
      <div className="space-y-4">

        {/* Change System Language */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">Change System Language</label>
          <Select
            value={language}
            onChange={handleLanguageChange}
            className="w-full h-[50px] md:w-2/3 mt-2 md:mt-0 rounded-md bg-purple-100 p-2"
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
            <MenuItem value="French">French</MenuItem>
            <MenuItem value="German">German</MenuItem>
          </Select>
        </div>

        {/* Change System Timezone */}
        <div className="flex flex-col md:flex-row items-start md:items-center ">
          <label className="w-full  md:w-1/3 text-[#264164]">Change System Timezone</label>
          <Select
            value={timezone}
            onChange={handleTimezoneChange}
            className="w-full h-[50px] md:w-2/3 mt-2 md:mt-0 rounded-md bg-purple-100 p-2"
          >
            <MenuItem value="GMT">GMT</MenuItem>
            <MenuItem value="EST">EST</MenuItem>
            <MenuItem value="CST">CST</MenuItem>
            <MenuItem value="PST">PST</MenuItem>
          </Select>
        </div>

        {/* POS */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="w-full md:w-1/3 text-[#264164]">POS</label>
          <Select 
            className="w-full md:w-[200px] h-[50px] p-2 mt-2 md:mt-0 rounded-md border border-gray-300 bg-purple-100"
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default ChangeSystemSettings;
