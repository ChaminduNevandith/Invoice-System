import React, { useState } from 'react';
import { Search, Edit, Check, Visibility, ArrowBack , Delete , Print} from '@mui/icons-material'; 
import { Pagination, Tooltip } from '@mui/material';
import TimeDisplay from '../../../Component/TimeDisplay/TimeDisplay';


function SupplierReport() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <ListGRN />
    </div>
  );
}

function ListGRN() {
  const [customers, setCustomers] = useState([
    { id: 1, CompanyName: 'SLT',   name: 'Akila ', contact: '0712345678', email: 'akila.perera@example.com', Address1: '106/c,piliyandala,kasbawe ',  Address2: '106/c,piliyandala,kasbawe ',  Address3: '- ',invoiceCount: 1, total: '6,500.00', status: 'Active' },
    { id: 2, CompanyName: 'Dialog',name: 'Akila ', contact: '0712345678', email: 'akila.perera@example.com',  Address1: '106/c,piliyandala,kasbawe ', Address2: '106/c,piliyandala,kasbawe ', Address3: '- ',invoiceCount: 1, total: '6,500.00', status: 'Active' },
    { id: 3, CompanyName: 'Yoohu', name: 'Akila ', contact: '0712345678', email: 'akila.perera@example.com',  Address1: '106/c,piliyandala,kasbawe ', Address2: '106/c,piliyandala,kasbawe ', Address3: '- ',invoiceCount: 1, total: '6,500.00', status: 'Inactive' },
    


  ]);

  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };



  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full mb-[150px]">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Supplier Report</h1>

        
       
        </div>
      <hr className="bg-black mb-2"></hr>
      <TimeDisplay />

      <div className="flex flex-col md:flex-row justify-between mb-4">
            {/* Left Section: Search Bars */}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 mb-4 md:mb-0">
                
                {/* Sort Dropdown */}
                <div className="relative">
                <label className="block text-[#264164] mb-1 text-xs">Search by Company</label>
                <select className="text-[#264164] p-2 border rounded-md w-full md:w-[250px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50">
                    <option>All</option>
                    <option>SLT</option>
                    <option>Dialog</option>
                    <option>Yoohu</option>
                </select>
                </div>

                {/* Search by Type */}
                <div className="relative mb-4 md:mb-0">
                <label className="block text-[#264164] mb-1 text-xs">Search by Agent</label>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="text-[#264164] pl-10 p-2 border rounded-md w-[230px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
                />
                <Search className="absolute top-7 left-2 text-gray-500" />
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
            <th className="py-2 px-4 border-b text-[#264164]">Company Name</th>
            <th className="py-2 px-4 border-b text-[#264164]">Agent</th>
              <th className="py-2 px-4 border-b text-[#264164]">Contact No (1)</th>
              <th className="py-2 px-4 border-b text-[#264164]">Contact No (2)</th>
              <th className="py-2 px-4 border-b text-[#264164]">Email</th>
              <th className="py-2 px-4 border-b text-[#264164]">Address (1)</th>
              <th className="py-2 px-4 border-b text-[#264164]">Address (2)</th>
              <th className="py-2 px-4 border-b text-[#264164]">Address (3)</th>
              <th className="py-2 px-4 border-b text-[#264164]">Invoice Count</th>
              <th className="py-2 px-4 border-b text-[#264164]">Total (LKR)</th>

            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left  bg-[#FEF9FF]">
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Company Name">{customer.CompanyName}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Agent">{customer.name}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Contact No (1)">{customer.contact}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Contact No (2)">{customer.contact}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Email">{customer.email}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Address (1)">{customer.Address1}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Address (2)">{customer.Address2}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Address (3)">{customer.Address3}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Invoice Count">{customer.invoiceCount}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Total (LKR)">{customer.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    

        {/* Save Button */}
        <div className="flex justify-end mt-4 animate-slideInUp">
          <button className="px-6 py-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 transition-all duration-200">+ Print Supplier Report</button>
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

export default SupplierReport;
