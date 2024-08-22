import React, { useState } from 'react';
import { Search } from '@mui/icons-material'; // Example of MUI icons
import { Pagination } from '@mui/material';
import "./Table.css";

function CustomerCreditLogs() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn  pb-[150px]">
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
    <div className="bg-white p-6 rounded-md shadow-md w-full ">
      <h1 className=" text-2xl font-semibold text-[#264164] mb-1">Customer Credit Logs</h1>
      <hr className="bg-black mb-4"></hr>

      <div className="flex flex-col md:flex-row justify-between mt-[20px] mb-[50px]">
        {/* Search Bar */}
        <div className="relative mb-4 md:mb-0">
        <select className="p-2 border rounded-md w-full md:w-[250px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50">
            <option>Akila 724391</option>
            <option>Nimal 236123</option>
            <option>Banu 2242134</option>
          </select>
        </div>

       {/* Sort Dropdown */}
       <div className="relative ">
          <div className='text-lg font-semibold'> Total Credit Balance: LKR 291,000.00</div>
          <div className='text-sm font-light'>Akilla</div>
          <div className='text-sm font-light'>724391</div>
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
            <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Credit Type</th>
              <th className="py-2 px-4 border-b">Credit Amount</th>
              <th className="py-2 px-4 border-b">Debit Amount</th>
              <th className="py-2 px-4 border-b">Payment Method</th>
              <th className="py-2 px-4 border-b">Cheque type</th>
              <th className="py-2 px-4 border-b">Cheque Date</th>
              <th className="py-2 px-4 border-b">Cheque Name</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left bg-[#FEF9FF]">
                <td className="py-2 px-4 border-b" data-label="Date">{customer.date}</td>
                <td className="py-2 px-4 border-b" data-label="Credit Type">{customer.CreditType}</td>
                <td className="py-2 px-4 border-b" data-label="Credit Amount">{customer.CreditAmount}</td>
                <td className="py-2 px-4 border-b" data-label="Debit Amount">{customer.DebitAmount}</td>
                <td className="py-2 px-4 border-b" data-label="Payment Method">{customer.PaymentMethod}</td>
                <td className="py-2 px-4 border-b" data-label="Cheque type">{customer.Chequetype}</td>
                <td className="py-2 px-4 border-b" data-label="Cheque Date">{customer.ChequeDate}</td>
                <td className="py-2 px-4 border-b" data-label="Cheque Name">{customer.ChequeName}</td>
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
