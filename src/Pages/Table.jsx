import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Table() {
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

      <div className='text-xl font-semibold block ml-7 mt-7 text-[#264164] mb-3
        2xl:text-xl
        xl:text-lg
        lg:text-md
        md:text-sm
        sm:text-xs
        xs:text-xs'>
        Supplier Credit
      </div>

      <div className="flex justify-center items-center">
        <div className="relative mx-auto
          2xl:w-[327px] 2xl:h-[43px]
          xl:w-[250px] xl:h-[38px]
          lg:w-[200px] lg:h-[34px]
          md:w-[180px] md:h-[30px]
          sm:w-[160px] sm:h-[28px]
          xs:w-[130px] xs:h-[24px]">

          <input
            type="text"
            className="h-full border border-gray-300 rounded-[3.9px] px-3 pl-10 bg-white shadow-md
              2xl:text-base
              xl:text-sm
              lg:text-xs
              md:text-xs
              sm:text-xs
              xs:text-[2px]"
            placeholder="Search..."
          />
          <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-xs" />
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
