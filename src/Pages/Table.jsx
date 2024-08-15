import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Table() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className='w-[1500px] h-[800px] bg-white  text-gray-800 rounded-md shadow-md'>
         <div className='text-xl font-semibold block ml-7 mt-7'>Supplier Credit</div>
        <div className="relative mx-auto 2xl:w-[327px] 2xl:h-[43px] xl:w-[900px] xl:h-[38px] lg:w-[800px] lg:h-[34px]">
            <input
                type="text"
                className="w-full h-full border border-gray-300 rounded-[3.9px] px-3 pl-10 bg-white shadow-md"
                placeholder="Search..."
            />
            <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="p-6">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="w-full bg-[#F2F1F1] border-b border-gray-300">
            <th className="py-2 px-4 text-left">Order ID</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Supplier</th>
            <th className="py-2 px-4 text-left">Credit Number</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-[#F3E5F5]'>
            <td className="py-2 px-4 border-b border-gray-300">001</td>
            <td className="py-2 px-4 border-b border-gray-300">2024-08-15</td>
            <td className="py-2 px-4 border-b border-gray-300">Supplier A</td>
            <td className="py-2 px-4 border-b border-gray-300">123456</td>
          </tr>

          <tr className='bg-[#F3E5F5]'>
            <td className="py-2 px-4 border-b border-gray-300">002</td>
            <td className="py-2 px-4 border-b border-gray-300">2024-09-15</td>
            <td className="py-2 px-4 border-b border-gray-300">Supplier B</td>
            <td className="py-2 px-4 border-b border-gray-300">12243456</td>
          </tr>
         
        </tbody>
      </table>
    </div>

        </div>
    </div>
  )
}

export default Table