import React, { useState } from 'react';
import { Search } from '@mui/icons-material'; // Example of MUI icons
import { Pagination } from '@mui/material';


function Table() {
  return (
    <div className="bg-gray-100 right-0 w-[1550px] h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn  pb-[50px]">
      <ListCustomers />
    </div>
  );
}

function ListCustomers() {

  const [customers, setCustomers] = useState([
    { id: 1, OrderId: '#1234',date: '03/04/2023',  Supplier: 'Supplier A', Credit: '2000' },
    { id: 2, OrderId: '#2345',date: '03/04/2023', Supplier: 'Supplier B', Credit: '6500'},
    { id: 3, OrderId: '#3456', date: '03/04/2023', Supplier: 'Supplier C', Credit: '3000'},
    // Add more customers here...
  ]);

  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };



  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full ">
      <h1 className=" text-2xl font-semibold text-[#264164] mb-1">Customer Credit Logs</h1>
      <hr className="bg-black mb-4"></hr>

      <div className="flex flex-col md:flex-row justify-between mt-[20px] mb-[50px]">
        {/* Search Bar */}
        <div className="relative mb-4 md:mb-0">
        <select className="p-2 border rounded-md w-full md:w-[250px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50">
            <option>Supplier</option>
            <option>Supplier A</option>
            <option>Supplier B</option>
            <option>Supplier C</option>
          </select>
        </div>

        {/* Date Bar */}
        <div className="relative mb-4 md:mb-0">
          <input 
            type="date" 
            className="pl-10 p-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
          />
          
        </div>

        {/* Order Id Bar */}
        
        <div className="relative mb-4 md:mb-0">
        <select className="p-2 border rounded-md w-full md:w-[250px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50">
            <option>Order Id</option>
            <option>#1234</option>
            <option>#2345</option>
            <option>#3456</option>
          </select>
        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse text-xs
              2xl:text-base
              xl:text-sm
              lg:text-xs
              md:text-xs
              sm:text-xs
              xs:text-[10px]">
          <thead>
            <tr className="text-left text-gray-700 bg-[#F2F1F1]">
            <th className="py-2 px-4 border-b">Order Id</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Supplier</th>
              <th className="py-2 px-4 border-b">Credit</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left bg-[#FEF9FF]">
                <td className="py-2 px-4 border-b" data-label="Order Id">{customer.OrderId}</td>
                <td className="py-2 px-4 border-b" data-label="Date">{customer.date}</td>
                <td className="py-2 px-4 border-b" data-label="Supplier">{customer.Supplier}</td>
                <td className="py-2 px-4 border-b" data-label="Credit">{customer.Credit}</td>

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

export default Table;
