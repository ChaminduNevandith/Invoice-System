import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function RightSideBar({ setIsSidebarOpen }) {
  const [themeLayout, setThemeLayout] = useState('light');
  const [rtlLayout, setRtlLayout] = useState(false);
  const [themeColors, setThemeColors] = useState('#6366F1');

  const handleThemeLayoutChange = (layout) => {
    setThemeLayout(layout);
  };

  const handleRtlLayoutChange = () => {
    setRtlLayout(!rtlLayout);
  };

  const handleThemeColorChange = (color) => {
    setThemeColors(color);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  }

  return (
    <div className="fixed top-0 right-0 h-screen w-[310px] sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px] 2xl:w-[381px] bg-white shadow-md px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-[#1A3353]">Theme Config</h2>
        <IconButton 
          onClick={handleCloseSidebar} 
          size="small"
          sx={{ color: 'black' }} // Use `sx` prop to style the icon
        >
          <CloseIcon />
        </IconButton>
      </div>
      <hr className="mb-4" />
      <div className="mb-4">
        <h3 className="text-sm text-[#1A3353]">Theme Layout</h3>
        <hr className="mb-2" />
        <div className="flex items-center bg-[#AE69F5] w-full max-w-[157px] h-[38px] rounded-[3.9px]">
          <input
            type="radio"
            name="themeLayout"
            value="light"
            checked={themeLayout === 'light'}
            onChange={() => handleThemeLayoutChange('light')}
            className="mr-1 ml-4"
          />
          <label className="text-white">Light</label>
          <div className="inline-block h-[38px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-gray-400 ml-3" />
          <input
            type="radio"
            name="themeLayout"
            value="dark"
            checked={themeLayout === 'dark'}
            onChange={() => handleThemeLayoutChange('dark')}
            className="mr-2 ml-2"
          />
          <label className="text-white">Dark</label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-sm text-[#1A3353]">RTL Layout</h3>
        <hr className="mb-2" />
        <label className="inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            value="" 
            checked={rtlLayout}
            onChange={handleRtlLayoutChange}
            className="sr-only peer" 
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#AE69F5]" />
        </label>
      </div>
      <div className="mb-4">
        <h3 className="text-sm text-[#1A3353]">Theme Colors</h3>
        <hr className="mb-2" />
        <div className="flex flex-wrap space-x-2">
          <div
            className="w-8 h-8 rounded-[3.9px] cursor-pointer"
            style={{ backgroundColor: '#D75FFF' }}
            onClick={() => handleThemeColorChange('#D75FFF')}
          />
          <div
            className="w-8 h-8 rounded-[3.9px] cursor-pointer"
            style={{ backgroundColor: '#3B82F6' }}
            onClick={() => handleThemeColorChange('#3B82F6')}
          />
          <div
            className="w-8 h-8 rounded-[3.9px] cursor-pointer"
            style={{ backgroundColor: '#F56565' }}
            onClick={() => handleThemeColorChange('#F56565')}
          />
          <div
            className="w-8 h-8 rounded-[3.9px] cursor-pointer"
            style={{ backgroundColor: '#22C55E' }}
            onClick={() => handleThemeColorChange('#22C55E')}
          />
          <div
            className="w-8 h-8 rounded-[3.9px] cursor-pointer"
            style={{ backgroundColor: '#F2C94C' }}
            onClick={() => handleThemeColorChange('#F2C94C')}
          />
          <div
            className="w-8 h-8 rounded-[3.9px] cursor-pointer"
            style={{ backgroundColor: '#1D4ED8' }}
            onClick={() => handleThemeColorChange('#1D4ED8')}
          />
        </div>
        <hr className="mt-2" />
      </div>
    </div>
  );
}

export default RightSideBar;
