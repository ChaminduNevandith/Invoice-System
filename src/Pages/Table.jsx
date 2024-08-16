import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';

function Table() {
  const [orderId, setOrderId] = useState('');
  const [date, setDate] = useState('');
  const [supplier, setSupplier] = useState('');

  const handleOrderIdChange = (event) => {
    setOrderId(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSupplierChange = (event) => {
    setSupplier(event.target.value);
  };

  return (
    <div className='bg-white text-gray-800 rounded-md shadow-md
      w-full 
      2xl:w-[1500px] 2xl:h-[800px]
      xl:w-[1140px] xl:h-[450px]
      lg:w-[910px] lg:h-[420px]
      md:w-[640px] md:h-[400px]
      sm:w-[530px] sm:h-[350px]
      xs:w-full xs:h-[350px]
      h-[500px]'>

      <div className="flex justify-between items-center px-7 mt-7">
        {/* Supplier Credit Title */}
        <div className='text-md font-semibold text-[#264164] mb-3
          2xl:text-xl
          xl:text-lg
          lg:text-md
          md:text-sm
          sm:text-xs
          xs:text-xs'>
          Supplier Credit
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mb-5 px-7">
        {/* Dropdowns aligned next to each other with labels */}
        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4 w-full"> {/* Flex container for dropdowns */}
          {/* Order ID Dropdown with Label */}
          <div className="flex flex-col w-full lg:w-auto mb-4 lg:mb-0 lg:mr-4">
            <label className="text-[#264164] text-sm mb-2
              2xl:text-base
              xl:text-sm
              lg:text-sm
              md:text-sm
              sm:text-xs
              xs:text-xs">Order ID</label>
            <Select
              value={orderId}
              onChange={handleOrderIdChange}
              displayEmpty
              className='bg-white border border-gray-300 rounded-md shadow-md w-full h-[30px]
                2xl:w-[327px] 2xl:h-[43px]
                xl:w-[327px] xl:h-[43px]
                lg:w-[250px] lg:h-[38px]
                md:w-[200px] md:h-[35px]
                sm:w-[200px] sm:h-[35px]
                '>
              <MenuItem value="">
                <em>Select Order ID</em>
              </MenuItem>
              <MenuItem value="001">001</MenuItem>
              <MenuItem value="002">002</MenuItem>
              <MenuItem value="003">003</MenuItem>
            </Select>
          </div>

          {/* Date Input Box with Label */}
          <div className="flex flex-col w-full lg:w-auto mb-4 lg:mb-0 lg:mr-4">
            <label className="text-[#264164] text-sm mb-2
              2xl:text-base
              xl:text-sm
              lg:text-sm
              md:text-sm
              sm:text-xs
              xs:text-xs">Date</label>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className='bg-white border border-gray-300 rounded-md shadow-md w-full h-[30px]
                2xl:w-[327px] 2xl:h-[43px]
                xl:w-[327px] xl:h-[43px]
                lg:w-[250px] lg:h-[38px]
                md:w-[200px] md:h-[35px]
                sm:w-[200px] sm:h-[35px]
                px-3 text-[#264164]' />
          </div>

          {/* Supplier Dropdown with Label */}
          <div className="flex flex-col w-full lg:w-auto">
            <label className="text-[#264164] text-sm mb-2
              2xl:text-base
              xl:text-sm
              lg:text-sm
              md:text-sm
              sm:text-xs
              xs:text-xs">Supplier</label>
            <Select
              value={supplier}
              onChange={handleSupplierChange}
              displayEmpty
              className='bg-white border border-gray-300 rounded-md shadow-md w-full h-[30px]
                2xl:w-[327px] 2xl:h-[43px]
                xl:w-[327px] xl:h-[43px]
                lg:w-[250px] lg:h-[38px]
                md:w-[200px] md:h-[35px]
                sm:w-[200px] sm:h-[35px]'>
              <MenuItem value="">
                <em>Select Supplier</em>
              </MenuItem>
              <MenuItem value="Supplier A">Supplier A</MenuItem>
              <MenuItem value="Supplier B">Supplier B</MenuItem>
            </Select>
          </div>
        </div>
      </div>

      <div className="p-2 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300
          2xl:w-full
          xl:w-full
          lg:w-full
          md:w-full
          sm:w-full
          xs:w-full">
          <thead>
            <tr className="w-full bg-[#F2F1F1] border-b border-gray-300 text-xs text-[#264164]
              2xl:text-base
              xl:text-sm
              lg:text-xs
              md:text-xs
              sm:text-xs
              xs:text-[10px]">
              <th className="py-1 px-2 text-left">Order ID</th>
              <th className="py-1 px-2 text-left">Date</th>
              <th className="py-1 px-2 text-left">Supplier</th>
              <th className="py-1 px-2 text-left">Credit Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-[#F3E5F5] text-xs
              2xl:text-base
              xl:text-sm
              lg:text-xs
              md:text-xs
              sm:text-xs
              xs:text-[10px]'>
              <td className="py-1 px-2 border-b border-gray-300">001</td>
              <td className="py-1 px-2 border-b border-gray-300">2024-08-15</td>
              <td className="py-1 px-2 border-b border-gray-300">Supplier A</td>
              <td className="py-1 px-2 border-b border-gray-300">123456</td>
            </tr>

            <tr className='bg-[#F3E5F5] text-xs
              2xl:text-base
              xl:text-sm
              lg:text-xs
              md:text-xs
              sm:text-xs
              xs:text-[10px]'>
              <td className="py-1 px-2 border-b border-gray-300">002</td>
              <td className="py-1 px-2 border-b border-gray-300">2024-09-15</td>
              <td className="py-1 px-2 border-b border-gray-300">Supplier B</td>
              <td className="py-1 px-2 border-b border-gray-300">12243456</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
