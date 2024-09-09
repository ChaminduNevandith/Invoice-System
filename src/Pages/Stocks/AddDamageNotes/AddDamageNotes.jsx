import React, { useState } from 'react';
import { Search, Edit, Check, Visibility, ArrowBack , Delete , Print} from '@mui/icons-material'; 
import { Pagination, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';


function AddDamageNotes() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <ListGRN />
    </div>
  );
}

function ListGRN() {
  const [customers, setCustomers] = useState([
    { id: 1, Item: 'car', Quantity: '5', Total: '10000000', Reason: '5'},


  ]);

  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };



  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Add Damage Note</h1>
        
        <NavLink to="/damagenotes">
        <button className="w-[48px] h-[28px] 2xl:w-[80px] 2xl:h-[40px] xl:w-[80px] xl:h-[40px] lg:w-[70px] lg:h-[30px] sm:w-[48px] sm:h-[28px] md:w-[48px] md:h-[28px] rounded-[3.9px] bg-[#CC7FFF] text-white hover:bg-[#AE69F5]">
            <ArrowBack fontSize="small" />
        </button>
        </NavLink>

        </div>
      <hr className="bg-black mb-4"></hr>

        <div className="relative w-[250px] sm:w-[300px] pb-10">
            <label className="block text-[#264164] mb-1 text-xs">Date</label>
            <input
            type="date"
            placeholder="Search..."
            className="text-[#264164] text-sm p-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
            />
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
                <th className="py-2 px-10 text-[#264164]">Item</th>
                <th className="py-2 px-10 text-[#264164]">Reason</th>
                <th className="py-2 px-10 text-[#264164]">Quantity</th>
                <th className="py-2 px-10 text-[#264164]">Action</th>
                <th className="py-2 px-10 text-[#264164]">Total</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left  bg-[#FEF9FF]">
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Item">{customer.Item}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Reason">
                  <p className="whitespace-normal break-words">{customer.Reason}</p>
                </td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Quantity">{customer.Quantity}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Total">{customer.Total}</td>
                <td className="py-2 px-10 border-b" data-label="Actions">
                  <div className="flex space-x-2 actions">
                  <Tooltip title="Edit DamageNote" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A]">
                        <Edit fontSize="small" />
                      </button>
                    </Tooltip>

                    <Tooltip title="view DamageNote" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#7ECB8F] text-white hover:bg-[#2BA946]">
                        <Visibility fontSize="small" />
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

      <div className="flex space-x-4 mt-4 mb-4">
          <button className="border border-gray-300 text-gray-500 p-2 rounded-md hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50  text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">+ Add New Item</button>
        </div>

        <div>
          <label className="block text-[#264164] mb-1 text-xs">Reason</label>
          <input
            type="text"
            placeholder="Enter Reason..."
            className="w-full p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50 mb-6"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-4 animate-slideInUp">
          <button className="px-6 py-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 transition-all duration-200">+ Add Damage Note</button>
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

export default AddDamageNotes;
