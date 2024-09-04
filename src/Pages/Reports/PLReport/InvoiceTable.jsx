import React, { useState } from 'react';
import { Search, Edit, Check, Visibility, Add , Delete , Print} from '@mui/icons-material'; 
import { Pagination, Tooltip } from '@mui/material';
import TimeDisplay from '../../../Component/TimeDisplay/TimeDisplay';


function InvoiceTable() {
  return (
    <div>
      <ListCustomers />
    </div>
  );
}

function ListCustomers() {
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
    <div >
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Profit & Loss Invoices</h1>
        </div>
      <hr className="bg-black mb-2"></hr>
      <TimeDisplay />

      <div className="text-right mb-5">
    <div className="text-lg ">Total Invoice Amount : LKR. 50,000.00</div>
    <div className="text-lg ">Invoice Profit : LKR. 40,000.00</div>
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
                <th className="py-2 px-10 text-[#264164]">Item Count</th>
                <th className="py-2 px-10 text-[#264164]">Discount</th>
                <th className="py-2 px-10 text-[#264164]">Total</th>
                <th className="py-2 px-10 text-[#264164]">Profit</th>
   

            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left  bg-[#FEF9FF]">
                 <td className="py-2 px-10 border-b text-[#264164]" data-label="Category">{customer.Invoice}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Customer ">{customer.Customer }</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Date">{customer.Date}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Item Count">{customer.Total}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Discount">{customer.PaidAmount}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Total">{customer.Balance}</td>
                <td className="py-2 px-10 border-b text-[#264164]" data-label="Profit">{customer.Balance}</td>
                

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default InvoiceTable;
