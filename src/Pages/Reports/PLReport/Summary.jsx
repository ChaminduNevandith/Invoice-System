import React, { useState } from 'react';
import TimeDisplay from '../../../Component/TimeDisplay/TimeDisplay';

function ProductTable() {
  return (
    <div>
      <ListCustomers />
    </div>
  );
}

function ListCustomers() {
  const [customers, setCustomers] = useState([
    { id: 1, Amount: '20,000,000.00', InvoiceItem: 'Car', DamageAmount: '20,000.00', ExpensesAmount: '10,000.00', NetProfit: '3,900,000.00' },
  ]);

  return (
    <div className="container mx-auto">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Profit & Loss Summary</h1>
        <TimeDisplay />
      </div>
      <hr className="bg-gray-400 mb-4" />

      {/* Vertical Table */}
      <div className="border border-gray-300 rounded overflow-hidden">
        {customers.map((customer, index) => (
          <div key={customer.id} className={`flex ${index % 2 === 0 ? 'bg-[#FEF9FF]' : 'bg-white'}`}>
            <div className="w-1/2 p-4 border-r border-gray-300 text-[#264164] font-semibold">
              <div className="border-b border-gray-300 py-2 ">Total Invoice Amount</div>
              <div className="border-b border-gray-300 py-2">Total Invoice Item Cost</div>
              <div className="border-b border-gray-300 py-2">Total Damage Amount</div>
              <div className="border-b border-gray-300 py-2">Total Expenses Amount</div>
              <div className="py-2">Net Profit</div>
            </div>
            <div className="w-1/2 p-4 text-[#264164]">
              <div className="border-b border-gray-300 py-2">{customer.Amount}</div>
              <div className="border-b border-gray-300 py-2">{customer.InvoiceItem}</div>
              <div className="border-b border-gray-300 py-2">{customer.DamageAmount}</div>
              <div className="border-b border-gray-300 py-2">{customer.ExpensesAmount}</div>
              <div className="py-2">{customer.NetProfit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductTable;
