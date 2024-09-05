import React, { useState } from 'react';

function Customize() {
  const [selectedColor, setSelectedColor] = useState('#008000'); // Default color

  const handleThemeColorChange = (color) => {
    setSelectedColor(color);
  };


  const colors = [
    '#FF00FF', '#FF6347', '#FFA500', '#9370DB', '#008000', // First row
    '#FFFFE0', '#D3D3D3', '#90EE90', '#778899', '#ADD8E6'  // Second row
  ];


  return (
    <div>
      {/* Section Header */}
      <div className="flex justify-center items-start md:items-center mb-2 mt-7">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Customize Your Invoice</h1>
      </div>
      <hr className="bg-black mb-4" />

      {/* Color Picker Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-5">
        
        {/* Label on the left */}
        <div className="w-full md:w-1/3 text-left">
          <p className="text-[#264164] mb-5">Pick A Colour Theme</p>
        </div>

        {/* Display selected color and color code */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full md:w-2/3">
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-full border-2 border-black"
              style={{ backgroundColor: selectedColor }}
            />
            <div className="mt-2 w-[80px] p-1 bg-[#FFFFE0] rounded-md shadow">
              <span className="text-sm">{selectedColor}</span>
            </div>
          </div>

          {/* Color palette on the right */}
          <div className="grid grid-cols-5 gap-2 mt-4 md:mt-0">
            {colors.map((color) => (
              <div
                key={color}
                className="relative"
                onClick={() => handleThemeColorChange(color)}
              >
                <div
                  className={`w-8 h-8 rounded-full cursor-pointer ${selectedColor === color ? 'ring-4 ring-[#264164]' : 'ring-2 ring-gray-300'}`}
                  style={{ backgroundColor: color }}
                />
                {/* Highlight selected color with an extra border */}
                {selectedColor === color && (
                  <div className="absolute inset-0 w-full h-full rounded-full border-2 border-white" />
                )}
              </div>
            ))}
          </div>
        </div>
        
      </div>

       {/* Invoice Logo Label and File Input */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 mb-5">
        {/* First Label */}
        <label className="w-full md:w-1/3 text-[#264164] mt-5">Invoice Logo</label>
        
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

        {/* Invoice Footer Label and File Input */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 mb-5">
        {/* First Label */}
        <label className="w-full md:w-1/3 text-[#264164] mt-5">Invoice Footer</label>
        
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
  );
}

export default Customize;
