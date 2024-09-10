import React, { useState } from 'react';
import { Search, Edit, PersonAddAlt1, Visibility, Add , Delete , Print} from '@mui/icons-material'; 
import { Pagination, Tooltip } from '@mui/material';


function EarningsandExpenses() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <ListExpenses />
    </div>
  );
}

function ListExpenses() {
  const [customers, setCustomers] = useState([
    { id: 1, Category: 'Water',  date: '04/02/2023', Type: 'Earnings',  Note: 'It doesn t work well with gluten-free bread—seems to prefer sourdough', In: '6,500.00' , Out: '6,500.00' },
    { id: 2, Category: 'Rent',  date: '10/10/2023', Type: 'Earnings',  Note: 'These glasses make me look too mysterious—my friends cant tell if Im hiding something or just tired', In: '6,500.00' , Out: '6,500.00' },
    { id: 3, Category: 'Rent',  date: '04/01/2024', Type: 'Earnings',  Note: 'I thought this was a magic carpet, but it doesnt even float.',  In: '6,500.00' , Out: '6,500.00' },
  ]);

  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };


  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full ">
      <div className="flex flex-col sm:flex-row sm:justify-between  mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1 ">Earnings & Expenses</h1>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 actions w-full sm:w-auto">
   
        <button className="w-full  h-[28px] 2xl:w-[350px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-[3.9px] bg-[#CC7FFF] text-white hover:bg-[#AE69F5]">
        <PersonAddAlt1 fontSize="small" />
        Earnings & Expenses Category Manager 
        </button>

        
        <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A]">
        <Add fontSize="small" />
        </button>
     </div>
      </div>
      <hr className="bg-black mb-4"></hr>

      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            {/* Left Section: Search Bars */}
            <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row xxl:flex-row space-x-0 md:space-x-0  lg:space-x-2 xl:space-x-2 2xl:space-x-2 xxl:space-x-2 mb-4 md:mb-0">
                {/* Search by Type */}
                <div className="relative mb-4 md:mb-0 pb-2">
                <label className="block text-[#264164] mb-1 text-xs">Search by Type</label>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="text-[#264164] pl-10 p-2 border rounded-md w-[250px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
                />
                <Search className="absolute top-7 left-2 text-gray-500" />
                </div>

                {/* Search by Category */}
                <div className="relative mb-4 md:mb-0 pb-2">
                <label className="block text-[#264164] mb-1 text-xs">Search by Category</label>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="text-[#264164] pl-10 p-2 border rounded-md w-[250px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
                />
                <Search className="absolute top-7 left-2 text-gray-500" />
                </div>

                {/* Search by Date */}
                <div className="relative mb-4 md:mb-0 pb-2">
                <label className="block text-[#264164] mb-1 text-xs">Search by Date</label>
                <input 
                    type="date" 
                    className="text-[#264164] pl-10 p-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
                />
                </div>
            </div>

  {/* Right Section: Quotation */}
  <div className="text-right">
    <div className="text-lg ">Total Earning : LKR. 50,000.00</div>
    <div className="text-lg ">Total Expenses: LKR. 40,000.00</div>
  </div>
</div>


      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse text-xs
              xxl:text-sm
              2xl:text-base
              xl:text-sm
              lg:text-xs
              md:text-xs
              sm:text-xs
              xs:text-[10px]">
          <thead>
            <tr className="text-left text-gray-700 bg-[#F2F1F1] ">
            <th className="py-2 px-4 border-b text-[#264164]">Date</th>
              <th className="py-2 px-4 border-b text-[#264164]">Category</th>
              <th className="py-2 px-4 border-b text-[#264164]">Type</th>
              <th className="py-2 px-4 border-b text-[#264164]">Note</th>
              <th className="py-2 px-4 border-b text-[#264164]">In (LKR)</th>
              <th className="py-2 px-4 border-b text-[#264164]">Out (LKR)</th>
              <th className="py-2 px-4 border-b text-[#264164]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left  bg-[#FEF9FF]">
                <td className="py-2 px-4 border-b text-[#264164]" data-label="date">{customer.date}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Category">{customer.Category}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Type">{customer.Type}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Note">
                  <p className="whitespace-normal break-words">{customer.Note}</p>
                </td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="In (LKR)">{customer.In}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Out (LKR)">{customer.Out}</td>
                

                <td className="py-2 px-4 border-b" data-label="Actions">
                  <div className="flex space-x-2 actions">
                  <Tooltip title="Edit Quotation" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A]">
                        <Edit fontSize="small" />
                      </button>
                    </Tooltip>

                    <Tooltip title="view Quotation" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#7ECB8F] text-white hover:bg-[#2BA946]">
                        <Visibility fontSize="small" />
                      </button>
                    </Tooltip>
                    
                    <Tooltip title="Print Quotation" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#7FBDFF] text-white hover:bg-[#4BA0FB]">
                        <Print fontSize="small" />
                      </button>
                    </Tooltip>

                    <Tooltip title="Delete" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#CC7FFF] text-white hover:bg-[#AE69F5]">
                        <Delete fontSize="small" />
                      </button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default EarningsandExpenses;
