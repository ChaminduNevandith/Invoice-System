import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingButton = ({ setIsSidebarOpen }) => {
  return (
    <button
      className="relative fixed bottom-4 right-0 w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 bg-purple-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:bg-purple-600"
      onClick={() => setIsSidebarOpen(true)}
    >
      <SettingsIcon className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl animate-spin-slow" />
    </button>
  );
};

export default SettingButton;
