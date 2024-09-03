import React, { useState } from 'react';
import { Search, Edit, Check, Visibility, ArrowBack , Delete , Print} from '@mui/icons-material'; 
import { Pagination, Tooltip } from '@mui/material';
import TimeDisplay from '../../../Component/TimeDisplay/TimeDisplay';


function Stockcard() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <ListGRN />
    </div>
  );
}

function ListGRN() {
  const [customers, setCustomers] = useState([
    { id: 1, Category: 'Visiting',ItemCode: '#12345' ,ProductName:'car', Brand: 'Honda', RealCost: '3,900,000.00',Cost:'4,900,000.00' , Rate:'5' , QtyType: 'KG' ,Qty:'1', ExpireDate: '04/02/2023', Description: 'It doesn t work well with gluten-free bread—seems to prefer sourdough' },
    { id: 2, Category: 'Visiting',ItemCode: '#12345' ,ProductName: 'Van', Brand: 'Toyota', RealCost: '1,900,000.00' ,Cost:'2,500,000.00', Rate:'3' ,QtyType: 'KG' ,Qty:'42', ExpireDate: '04/02/2023', Description: 'These glasses make me look too mysterious—my friends cant tell if Im hiding something or just tired'},
    { id: 3, Category: 'Mobile Phone',ItemCode: '#12345' ,ProductName: 'Apple', Brand: 'Apple', RealCost: '200,000.00' , Cost:'250,000.00', Rate:'5' ,QtyType: 'G' ,Qty:'22', ExpireDate: '04/02/2023', Description: 'I thought this was a magic carpet, but it doesnt even float.'},
  

  ]);

  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };



  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full mb-[150px]">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Stock Card</h1>

        
       
        </div>
      <hr className="bg-black mb-2"></hr>
      <TimeDisplay />

      <div className="flex flex-col md:flex-row justify-between mb-4">
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

                <div className="relative">
                <label className="block text-[#264164] mb-1 text-xs">Search by Item</label>
                <select className="text-[#264164] p-2 border rounded-md w-full md:w-[250px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50">
                    <option>All</option>
                    <option>car</option>
                    <option>Rubber</option>
                    <option>mobile Phone</option>
                    <option>pen</option>
                    <option>shirt</option>
                </select>
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
            <th className="py-2 px-4 border-b text-[#264164]">Category</th>
              <th className="py-2 px-4 border-b text-[#264164]">Item Code</th>
              <th className="py-2 px-4 border-b text-[#264164]">Product Name</th>
              <th className="py-2 px-4 border-b text-[#264164]">Description</th>
              <th className="py-2 px-4 border-b text-[#264164]">Brand</th>
              <th className="py-2 px-4 border-b text-[#264164]">Real Cost</th>
              <th className="py-2 px-4 border-b text-[#264164]">Cost</th>
              <th className="py-2 px-4 border-b text-[#264164]">Rate</th>
              <th className="py-2 px-4 border-b text-[#264164]">Qty Type</th>
              <th className="py-2 px-4 border-b text-[#264164]">Qty</th>
              <th className="py-2 px-4 border-b text-[#264164]">Expire Date</th>
             
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left  bg-[#FEF9FF]">
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Category">{customer.Category}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="ItemCode">{customer.ItemCode}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="ProductName">{customer.ProductName}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Description">
                  <p className="whitespace-normal break-words">{customer.Description}</p>
                </td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Brand">{customer.Brand}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Real Cost">{customer.RealCost}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Cost">{customer.Cost}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Rate">{customer.Rate}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="QtyType">{customer.QtyType}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Qty">{customer.Qty}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Expire Date">{customer.ExpireDate}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    

        {/* Save Button */}
        <div className="flex justify-end mt-4 animate-slideInUp">
          <button className="px-6 py-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 transition-all duration-200">+ Print Stock card Report</button>
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

export default Stockcard;
