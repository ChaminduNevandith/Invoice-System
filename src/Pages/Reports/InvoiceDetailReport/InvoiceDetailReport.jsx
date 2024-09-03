import React, { useState } from 'react';
import { Search, Edit, Check, Visibility, ArrowBack , Delete , Print} from '@mui/icons-material'; 
import { Pagination, Tooltip } from '@mui/material';
import TimeDisplay from '../../../Component/TimeDisplay/TimeDisplay';


function InvoiceDetailReport() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <ListGRN />
    </div>
  );
}

function ListGRN() {
  const [customers, setCustomers] = useState([
    { id: 1, Invoice: '#23514', Customer: 'chamindu', Date : '10/11/2023',Total : '1000', 	PaidAmount: '1000' ,Balance:"0"},
    { id: 1, Invoice: '#23514', Customer: 'sanath', Date: '19/01/2023',Total : '1000', PaidAmount: '500',Balance:"500"},
    { id: 1, Invoice: '#23514', Customer: 'sadeera', Date: '24/11/2024',Total : '2010', PaidAmount: '1000',Balance:"1010"},
    { id: 1, Invoice: '#23514', Customer: 'senith', Date: '29/02/2024',Total : '1000', PaidAmount: '200',Balance:"800"},
  

  ]);

  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };



  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full mb-[150px]">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Invoice Detail Report</h1>

        
       
        </div>
      <hr className="bg-black mb-2"></hr>
      <TimeDisplay />

      <div className="flex flex-col md:flex-row justify-between mb-4">
            {/* Left Section: Search Bars */}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 mb-4 md:mb-0">
                
                {/* Sort Dropdown */}
                <div className="relative">
                <label className="block text-[#264164] mb-1 text-xs">Search by Customer</label>
                <select className="text-[#264164] p-2 border rounded-md w-full md:w-[250px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50">
                    <option>All</option>
                    <option>Chamindu</option>
                    <option>Omindu</option>
                    <option>Nemindu</option>
                    <option>Samindu</option>
                    <option>Lamindu</option>
                </select>
                </div>

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
                <th className="py-2 px-10 text-[#264164]">Invoice</th>
                <th className="py-2 px-10 text-[#264164]">Customer</th>
                <th className="py-2 px-10 text-[#264164]">Date</th>
                <th className="py-2 px-10 text-[#264164]">Total</th>
                <th className="py-2 px-10 text-[#264164]">Paid Amount</th>
                <th className="py-2 px-10 text-[#264164]">Balance</th>
   
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left  bg-[#FEF9FF]">
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Category">{customer.Invoice}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Customer ">{customer.Customer }</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Date">{customer.Date}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Total">{customer.Total}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Paid Amount">{customer.PaidAmount}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Balance">{customer.Balance}</td>

                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    

        {/* Save Button */}
        <div className="flex justify-end mt-4 animate-slideInUp">
          <button className="px-6 py-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 transition-all duration-200">+ Print Invoice Report</button>
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

export default InvoiceDetailReport;
