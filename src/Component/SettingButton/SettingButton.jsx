import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingButton = ({ setIsSidebarOpen }) => {
  return (
    <button
      className=" bottom-4 right-0 w-12 h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14 bg-purple-500 rounded-l-lg flex items-center justify-center hover:shadow-lg hover:bg-purple-600"
      onClick={() => setIsSidebarOpen(true)}
    >
      <SettingsIcon className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl animate-spin-slow" />
    </button>
  );
};

export default SettingButton;
