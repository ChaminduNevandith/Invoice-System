import React, { useState } from 'react';
import TimeDisplay from '../../../Component/TimeDisplay/TimeDisplay';


function Damages() {
  return (
    <div>
      <ListCustomers />
    </div>
  );
}

function ListCustomers() {
  const [customers, setCustomers] = useState([
    { id: 1, Item: '#12345', Rate: '10', date: '04/02/2023', Quantity: '10',  Reason: 'It doesn t work well with gluten-free bread—seems to prefer sourdough', total: '6,500.00', status: 'Processed' },
    { id: 2, Item: '#23456', Rate: '10', date: '10/10/2023', Quantity: '10',  Reason: 'These glasses make me look too mysterious—my friends cant tell if Im hiding something or just tired', total: '6,500.00', status: 'Processed' },
    { id: 3, Item: '#34567', Rate: '10', date: '04/01/2024', Quantity: '10',  Reason: 'I thought this was a magic carpet, but it doesnt even float.', total: '6,500.00', status: 'Pending' },
  ]);


  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };


  return (
    <div >
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Profit & Loss Damages</h1>
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
            <th className="py-2 px-4 border-b text-[#264164]">Item</th>
              <th className="py-2 px-4 border-b text-[#264164]">Date</th>
              <th className="py-2 px-4 border-b text-[#264164]">Reason</th>
              <th className="py-2 px-4 border-b text-[#264164]">Quantity</th>
              <th className="py-2 px-4 border-b text-[#264164]">Rate</th>
              <th className="py-2 px-4 border-b text-[#264164]">Total (LKR)</th>
              
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left  bg-[#FEF9FF]">
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Item">{customer.Item}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Date">{customer.date}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Reason">
                  <p className="whitespace-normal break-words">{customer.Reason}</p>
                </td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Quantity">{customer.Quantity}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Rate">{customer.Rate}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Total (LKR)">{customer.total}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Damages;
