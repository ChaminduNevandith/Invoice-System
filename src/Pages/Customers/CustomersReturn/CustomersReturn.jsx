import React, { useState } from 'react';
import { Search, CreditCard, Check, Visibility, Add } from '@mui/icons-material'; 
import { Pagination, Tooltip } from '@mui/material';
import "./Table.css";

function CustomersReturn() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <ListCustomers />
    </div>
  );
}

function ListCustomers() {
  const [customers, setCustomers] = useState([
    { id: 1, customername: 'Akila Perera', date: '04/02/2023', reason: 'It doesn t work well with gluten-free bread—seems to prefer sourdough', itemcount: 1, total: '6,500.00', status: 'Completed' },
    { id: 2, customername: 'Akila Perera', date: '10/10/2023', reason: 'These glasses make me look too mysterious—my friends cant tell if Im hiding something or just tired', itemcount: 1, total: '6,500.00', status: 'Completed' },
    { id: 3, customername: 'Akila Perera', date: '04/01/2024', reason: 'I thought this was a magic carpet, but it doesnt even float.', itemcount: 1, total: '6,500.00', status: 'Pending' },
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
              status: customer.status === 'Completed' ? 'Pending' : 'Completed',
            }
          : customer
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1 ">Customer Returns</h1>
        <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A]">
            <Add fontSize="small" />
        </button>
      </div>
      <hr className="bg-black mb-4"></hr>

      <div className="flex flex-col md:flex-row justify-between mb-4">
        {/* Search Bar */}
        <div className="relative mb-4 md:mb-0">
          <input 
            type="text" 
            placeholder="Search..." 
            className="text-[#264164] pl-10 p-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
          />
          <Search className="absolute top-2 left-2 text-gray-500" />
        </div>

        {/* Date Bar */}
        <div className="relative mb-4 md:mb-0">
          <input 
            type="date" 
            className="text-[#264164] pl-10 p-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
          />
          
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select className="text-[#264164] p-2 border rounded-md w-full md:w-[250px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50">
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
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
              <th className="py-2 px-4 border-b text-[#264164]">Customer Name</th>
              <th className="py-2 px-4 border-b text-[#264164]">Date</th>
              <th className="py-2 px-4 border-b text-[#264164]">Reason</th>
              <th className="py-2 px-4 border-b text-[#264164]">Item count</th>
              <th className="py-2 px-4 border-b text-[#264164]">Total (LKR)</th>
              <th className="py-2 px-4 border-b text-[#264164]">Status</th>
              <th className="py-2 px-4 border-b text-[#264164]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left  bg-[#FEF9FF]">
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Name">{customer.customername}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Contact No">{customer.date}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Reason">
                  <p className="whitespace-normal break-words">{customer.reason}</p>
                </td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Item count">{customer.itemcount}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Total (LKR)">{customer.total}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Status">
                  <button
                    onClick={() => toggleStatus(customer.id)}
                    className={`px-3 py-1 rounded-[3.9px] text-white w-28 ${
                      customer.status === 'Completed' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {customer.status}
                  </button>
                </td>
                <td className="py-2 px-4 border-b" data-label="Actions">
                  <div className="flex space-x-2 actions">
                  <Tooltip title="View customer Return" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#7FBDFF] text-white hover:bg-[#4BA0FB]">
                        <Visibility fontSize="small" />
                      </button>
                    </Tooltip>

                    <Tooltip title="Return Processed" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#7ECB8F] text-white hover:bg-[#2BA946]">
                        <Check fontSize="small" />
                      </button>
                    </Tooltip>
                    
                    <Tooltip title="Add Invoice" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#CC7FFF] text-white hover:bg-[#AE69F5]">
                        <CreditCard fontSize="small" />
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

export default CustomersReturn;
