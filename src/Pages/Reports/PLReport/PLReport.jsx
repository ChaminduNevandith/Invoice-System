import React, { useState } from 'react';
import { Search, Add , Inventory , HomeRepairService , PersonAddAlt1 } from '@mui/icons-material'; 
import { Pagination } from '@mui/material';
import Summary from './Summary';
import InvoiceTable from './InvoiceTable';
import Expenses from './Expenses';
import Damages from './Damages';

function PLReport() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
        <ListCustomers />
    </div>
  );
}

function ListCustomers() {
  const [page, setPage] = useState(1);
  const [currentTable, setCurrentTable] = useState('Summary'); // State to toggle between tables

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const renderTable = () => {
    if (currentTable === 'Summary') {
      return <Summary />;
    } else if (currentTable === 'Invoices') {
      return <InvoiceTable />;
    }else if (currentTable === 'Expences') {
        return <Expenses />;
      }else if (currentTable === 'Damages') {
        return <Damages />;
      }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full pb-10">
      <div className="flex flex-col sm:flex-row sm:justify-between  mb-4">
  <h1 className="text-2xl font-semibold text-[#264164] mb-2 sm:mb-0">P & L Report</h1>

</div>

      <hr className="bg-black mb-10" />

      <div className="flex flex-col md:flex-row justify-between mb-8">
            {/* Left Section: Search Bars */}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 mb-4 md:mb-0">
            

                {/* Search by Date */}
                <div className="relative mb-4 md:mb-0">
                <label className="block text-[#264164] mb-1 text-xs">From</label>
                <input 
                    type="date" 
                    placeholder="Search..." 
                    className="text-[#264164] pl-10 p-2 border rounded-md w-[230px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
                />
              
                </div>

                {/* Search by Date */}
                <div className="relative mb-4 md:mb-0">
                <label className="block text-[#264164] mb-1 text-xs">To</label>
                <input 
                    type="date" 
                    placeholder="Search..." 
                    className="text-[#264164] pl-10 p-2 border rounded-md w-[230px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
                />
              
                </div>
        
            </div>

</div>

      <div className='flex justify-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 actions mb-10'>
        <button 
          className={`w-full h-[28px] 2xl:w-[300px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-[3.9px] ${currentTable === 'Summary' ? 'bg-[#CC7FFF]' : 'bg-[#F3E5F5]'} text-white hover:bg-[#AE69F5]`}
          onClick={() => setCurrentTable('Summary')}
        >
          <Inventory fontSize="small" />
          Summary 
        </button>

        <button 
          className={`w-full h-[28px] 2xl:w-[300px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-[3.9px] ${currentTable === 'Invoices' ? 'bg-[#CC7FFF]' : 'bg-[#F3E5F5]'} text-white hover:bg-[#AE69F5]`}
          onClick={() => setCurrentTable('Invoices')}
        >
          <HomeRepairService fontSize="small" />
          Invoices
        </button>

        <button 
          className={`w-full h-[28px] 2xl:w-[300px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-[3.9px] ${currentTable === 'Expences' ? 'bg-[#CC7FFF]' : 'bg-[#F3E5F5]'} text-white hover:bg-[#AE69F5]`}
          onClick={() => setCurrentTable('Expences')}
        >
          <HomeRepairService fontSize="small" />
          Expences
        </button>

        <button 
          className={`w-full h-[28px] 2xl:w-[300px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-[3.9px] ${currentTable === 'Damages' ? 'bg-[#CC7FFF]' : 'bg-[#F3E5F5]'} text-white hover:bg-[#AE69F5]`}
          onClick={() => setCurrentTable('Damages')}
        >
          <HomeRepairService fontSize="small" />
          Damages
        </button>
      </div>

     

      {/* Render the selected table */}
      {renderTable()}

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <Pagination
          count={3} // Replace with dynamic page count
          page={page}
          onChange={handleChangePage}
          className="pagination-custom"
        />
      </div>
    </div>
  );
}

export default PLReport;
