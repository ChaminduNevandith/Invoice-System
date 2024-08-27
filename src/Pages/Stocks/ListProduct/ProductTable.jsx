import React, { useState } from 'react';
import { Search, Edit, Check, Visibility, Add , Delete , Print} from '@mui/icons-material'; 
import { Pagination, Tooltip } from '@mui/material';


function ProductTable() {
  return (
    <div>
      <ListCustomers />
    </div>
  );
}

function ListCustomers() {
  const [customers, setCustomers] = useState([
    { id: 1, Category: 'Visiting',ItemCode: '#12345' ,ProductName:'car', Brand: 'Honda', RealCost: '3,900,000.00',Cost:'4,900,000.00' , Rate:'5' , QtyType: 'KG' ,Qty:'Akila Perera', ExpireDate: '04/02/2023', Description: 'It doesn t work well with gluten-free bread—seems to prefer sourdough',  status: 'Active' },
    { id: 2, Category: 'Visiting',ItemCode: '#12345' ,ProductName: 'Van', Brand: 'Toyota', RealCost: '1,900,000.00' ,Cost:'2,500,000.00', Rate:'3' ,QtyType: 'KG' ,Qty:'Akila Perera', ExpireDate: '04/02/2023', Description: 'These glasses make me look too mysterious—my friends cant tell if Im hiding something or just tired', status: 'Active' },
    { id: 3, Category: 'Mobile Phone',ItemCode: '#12345' ,ProductName: 'Apple', Brand: 'Apple', RealCost: '200,000.00' , Cost:'250,000.00', Rate:'5' ,QtyType: 'G' ,Qty:'Akila Perera', ExpireDate: '04/02/2023', Description: 'I thought this was a magic carpet, but it doesnt even float.', status: 'Inactive' },
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
    <div >
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
              <th className="py-2 px-4 border-b text-[#264164]">Status</th>
              <th className="py-2 px-4 border-b text-[#264164]">Actions</th>
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
                
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Status">
                  <button
                    onClick={() => toggleStatus(customer.id)}
                    className={`px-3 py-1 rounded-[3.9px] text-white w-28 ${
                      customer.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {customer.status}
                  </button>
                </td>
                <td className="py-2 px-4 border-b" data-label="Actions">
                  <div className="flex space-x-2 actions">
                  <Tooltip title="Edit Quotation" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A]">
                        <Edit fontSize="small" />
                      </button>
                    </Tooltip>

                    <Tooltip title="view Quotation" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#7ECB8F] text-white hover:bg-[#2BA946]">
                        <Visibility fontSize="small" />
                      </button>
                    </Tooltip>
                    
                    <Tooltip title="Print Quotation" placement="top" arrow>
                      <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#7FBDFF] text-white hover:bg-[#4BA0FB]">
                        <Print fontSize="small" />
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

    </div>
  );
}

export default ProductTable;
