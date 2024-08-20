import React, { useState } from 'react';
import { Search, Edit, Delete, FileCopy, Visibility } from '@mui/icons-material'; // Example of MUI icons
import { Pagination } from '@mui/material';

function CustomerList() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn">
      <ListCustomers />
    </div>
  );
}

function ListCustomers() {

  const [customers, setCustomers] = useState([
    { id: 1, name: 'Akila Perera', contact: '0712345678', email: 'akila.perera@example.com', invoiceCount: 1, total: '6,500.00', status: 'Active' },
    { id: 2, name: 'Akila Perera', contact: '0712345678', email: 'akila.perera@example.com', invoiceCount: 1, total: '6,500.00', status: 'Active' },
    { id: 3, name: 'Akila Perera', contact: '0712345678', email: 'akila.perera@example.com', invoiceCount: 1, total: '6,500.00', status: 'Inactive' },
    // Add more customers here...
  ]);

  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };


  const toggleStatus = (id) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              status: customer.status === 'Active' ? 'Inactive' : 'Active',
            }
          : customer
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full">
      <h1 className="text-2xl font-semibold text-blue-900 mb-1">List Customers</h1>
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
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Contact No</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Invoice Count</th>
              <th className="p-3 text-left">Total (LKR)</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t bg-[#FDFAFE]">
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.contact}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.invoiceCount}</td>
                <td className="p-3">{customer.total}</td>
                <td className="p-3">
                  <button
                    onClick={() => toggleStatus(customer.id)}
                    className={`px-3 py-1 rounded-[3.9px] text-white ${
                      customer.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {customer.status}
                  </button>
                </td>
                <td className="p-3 flex space-x-2">
                  <button className="text-gray-600 hover:text-gray-900">
                    <Edit />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <FileCopy />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <Visibility />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <Delete />
                  </button>
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

export default CustomerList;
