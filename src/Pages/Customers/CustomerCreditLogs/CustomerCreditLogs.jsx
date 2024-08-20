import React, { useState } from 'react';
import { Search, Edit, Delete, FileCopy, Visibility } from '@mui/icons-material'; // Example of MUI icons
import { Pagination } from '@mui/material';

function CustomerCreditLogs() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn">
      <ListCustomers />
    </div>
  );
}

function ListCustomers() {

  const [customers, setCustomers] = useState([
    { id: 1, date: '03/04/2023', CreditType: 'Invoice', CreditAmount: '1000', DebitAmount: '2000', PaymentMethod: 'Cash' , Chequetype: '-', ChequeDate: '-', ChequeName: '-' },
    { id: 2, date: '03/04/2023', CreditType: 'Payment', CreditAmount: '6500', DebitAmount: '0', PaymentMethod: 'Online' , Chequetype: '-', ChequeDate: '-', ChequeName: '-'},
    { id: 3, date: '03/04/2023', CreditType: 'Payment', CreditAmount: '3000', DebitAmount: '1000', PaymentMethod: '-', Chequetype: '-', ChequeDate: '-', ChequeName: '-' },
    // Add more customers here...
  ]);

  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };



  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full">
      <h1 className="text-2xl font-semibold text-blue-900 mb-1">Customer Credit Logs</h1>
      <hr className="bg-black mb-4"></hr>

      <div className="flex flex-col md:flex-row justify-between mb-4">
        {/* Search Bar */}
        <div className="relative mb-4 md:mb-0">
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 p-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
          />
          <Search className="absolute top-2 left-2 text-gray-500" />
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select className="p-2 border rounded-md w-full md:w-[250px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50">
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-md">
          <thead>
            <tr className="bg-[#F2F1F1]">
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Credit Type</th>
              <th className="p-3 text-left">Credit Amoount</th>
              <th className="p-3 text-left">Debit Amount</th>
              <th className="p-3 text-left">Payment Method</th>
              <th className="p-3 text-left">Cheque type</th>
              <th className="p-3 text-left">Cheque Date</th>
              <th className="p-3 text-left">Cheque Name</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t bg-[#FDFAFE]">
                <td className="p-3">{customer.date}</td>
                <td className="p-3">{customer.CreditType}</td>
                <td className="p-3">{customer.CreditAmount}</td>
                <td className="p-3">{customer.DebitAmount}</td>
                <td className="p-3">{customer.PaymentMethod}</td>
                <td className="p-3">{customer.Chequetype}</td>
                <td className="p-3">{customer.ChequeDate}</td>
                <td className="p-3">{customer.ChequeName}</td>
                <td >
                  
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

export default CustomerCreditLogs;
