import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingButton = ({ setIsSidebarOpen }) => {
  return (
    <button
      className="relative w-14 h-14 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 bg-purple-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:bg-purple-600"
      onClick={() => setIsSidebarOpen(true)}
    >
      <SettingsIcon className="text-white text-xs sm:text-sm md:text-base lg:text-lg animate-spin-slow" />
    </button>
  );
};

export default SettingButton;
