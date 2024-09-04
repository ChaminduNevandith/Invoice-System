import React, { useState } from 'react';
import { Search, Edit, Check, Visibility, Add , Delete , Print} from '@mui/icons-material'; 
import { Pagination, Tooltip } from '@mui/material';
import TimeDisplay from '../../../Component/TimeDisplay/TimeDisplay';


function Expenses() {
  return (
    <div>
      <ListCustomers />
    </div>
  );
}

function ListCustomers() {
  const [customers, setCustomers] = useState([
    { id: 1, Date: '2024/02/10', Category: 'car', Total: '10000000', Note: '5'},
    { id: 1, Date: '2024/02/10',  Category: 'mobile', Total: '10000000', Note: '5'},
    { id: 1, Date: '2024/02/10',  Category: 'rubber', Total: '10000000', Note: '5'},
  ]);

  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };


  return (
    <div >
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Profit & Loss Expenses</h1>
        </div>
      <hr className="bg-black mb-2"></hr>
      <TimeDisplay />

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
            <th className="py-2 px-10 text-[#264164]">Date</th>
            <th className="py-2 px-10 text-[#264164]">Note</th>
                <th className="py-2 px-10 text-[#264164]">Category</th>
                <th className="py-2 px-10 text-[#264164]">Amount</th>
 


            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left  bg-[#FEF9FF]">
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Date">{customer.Date}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Note">
                  <p className="whitespace-normal break-words">{customer.Note}</p>
                </td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Category">{customer.Category}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Amount">{customer.Total}</td>
            

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Expenses;
