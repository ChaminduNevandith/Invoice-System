import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingButton = ({ setIsSidebarOpen }) => {
  return (
    <button
      className="relative w-14 h-14 bg-purple-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:bg-purple-600"
      onClick={() => setIsSidebarOpen(true)}
    >
      <SettingsIcon className="text-white animate-spin-slow" />
    </button>
  );
};

export default SettingButton;
