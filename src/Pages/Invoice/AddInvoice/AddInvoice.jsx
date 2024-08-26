import React from 'react';
import { Add, ArrowBack, Search, Delete, QrCode2} from '@mui/icons-material';
import { Tooltip } from '@mui/material';

function AddInvoice() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <div className="bg-white p-6 rounded-md shadow-md w-full pb-[150px]">
      <div className="flex justify-between items-center mb-4">
  <h1 className="text-2xl font-semibold text-[#264164] mb-1">Add Invoice</h1>
  <button className="w-[48px] h-[28px] 2xl:w-[80px] 2xl:h-[40px] xl:w-[80px] xl:h-[40px] lg:w-[70px] lg:h-[30px] sm:w-[48px] sm:h-[28px] md:w-[48px] md:h-[28px] rounded-[3.9px] bg-[#CC7FFF] text-white hover:bg-[#AE69F5]">
    <ArrowBack fontSize="small" />
  </button>
</div>
<hr className="bg-black mb-4" />

<div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 mb-8">
  <div className="relative w-[250px] sm:w-[300px]">
    <label className="block text-[#264164] mb-1 text-xs">Search Customer</label>
    <input
      type="text"
      placeholder="Search..."
      className="text-[#264164] pl-10 p-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
    />
    <Search className="absolute top-7 left-2 text-gray-500" />
  </div>

  <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] mt-4 sm:mt-0 sm:ml-4 rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A] flex items-center justify-center">
    <Add fontSize="small" />
  </button>
</div>

        <hr className="bg-black mb-4" />

        <div className="flex flex-col md:flex-row justify-between mb-8 text-[#264164]  text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">
          <div>
            <div>11 mail post andamaphuwa junction</div>
            <div>Buttala, Buttala</div>
            <div>0774956990</div>
          </div>

          <div>
            <div className="text-4xl font-semibold text-right">Invoice</div>
            <div className="text-xl text-gray-500 text-right">#INV1004</div>
          </div>
        </div>

        <div className="relative w-[250px] sm:w-[300px] pb-3">
            <label className="block text-[#264164] mb-1 text-xs">Invoice Number</label>
            <input
            type="text"
            placeholder="Add invoice number"
            className="text-[#264164] text-sm p-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
            />
        </div>

        <div className="relative w-[250px] sm:w-[300px] pb-3">
            <label className="block text-[#264164] mb-1 text-xs">Date</label>
            <input
            type="date"
            placeholder="Search..."
            className="text-[#264164] text-sm p-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
            />
        </div>

        <div className="relative w-[250px] sm:w-[300px] pb-5">
            <label className="block text-[#264164] mb-1 text-xs">Salesman</label>
            <input
            type="text"
            placeholder="Add Salesman"
            className="text-[#264164] text-sm p-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
            />
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-[#F2F1F1] text-white text-left hidden md:table-row">
                <th className="py-2 px-4 text-[#264164]">Item</th>
                <th className="py-2 px-4 text-[#264164]">Rate (LKR)</th>
                <th className="py-2 px-4 text-[#264164]">Quantity</th>
                <th className="py-2 px-4 text-[#264164]">Discount Type</th>
                <th className="py-2 px-4 text-[#264164]">Discount</th>
                <th className="py-2 px-4 text-[#264164]">Total (LKR)</th>
                <th className="py-2 px-4 text-[#264164]">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t bg-[#FEF9FF] block md:table-row mb-4 md:mb-0">
                <td className="py-2 px-4 block md:table-cell">
                  <div className="md:hidden text-[#264164] font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">Item</div>
                  <select className="border text-sm rounded-md p-2 w-full text-[#264164] hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50">
                    <option>Select...</option>
                    <option>Item 1</option>
                    <option>Item 2</option>
                  </select>
                </td>
                <td className="py-2 px-4 block md:table-cell">
                  <div className="md:hidden text-[#264164] font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">Rate (LKR)</div>
                  0
                </td>
                <td className="py-2 px-4 block md:table-cell">
                  <div className="md:hidden text-[#264164] font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">Quantity</div>
                  <input
                    type="number"
                    defaultValue="1"
                    className="border rounded-md p-2 w-full text-[#264164] hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
                    min="0"
                  />
                </td>
                <td className="py-2 px-4 block md:table-cell">
                  <div className="md:hidden text-[#264164] font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">Discount Type</div>
                  <select className="border rounded-md p-2 w-full text-[#264164] hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50 text-sm ">
                    <option>%</option>
                    <option>Amount</option>
                  </select>
                </td>
                <td className="py-2 px-4 block md:table-cell">
                  <div className="md:hidden text-[#264164] font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm ">Discount</div>
                  <input
                    type="number"
                    defaultValue="0"
                    className="text-sm border rounded-md p-2 w-full text-[#264164] hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
                    min="0"
                  />
                </td>
                <td className="py-2 px-4 block md:table-cell">
                  <div className="md:hidden text-[#264164] font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-lg">Total (LKR)</div>
                  0.00
                </td>
                <td className="py-2 px-4 block md:table-cell">
                <div className="md:hidden text-[#264164] font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-lg">Action</div>
                <div className='flex space-x-2 actions'>

                <Tooltip title="QR Code" placement="top" arrow>
                    <button className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#7ECB8F] text-white hover:bg-[#2BA946]">
                      <QrCode2 fontSize="small" />
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
            </tbody>
          </table>
        </div>

        <div className="flex space-x-4 mt-4 mb-6">
          <button className="border border-gray-300 text-gray-500 p-2 rounded-md hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50  text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">+ Add New Product Category</button>
          <button className="border border-gray-300 text-gray-500 p-2 rounded-md hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50  text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">+ Add New Item</button>
        </div>

        <div>
          <label className="block text-[#264164] mb-1 text-xs">Note</label>
          <input
            type="text"
            placeholder="Enter text..."
            className="w-full p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50 mb-6"
          />
        </div>

        <div className="flex justify-end">
        {/* Right-side Total and Discount Section */}
        <div className="w-full md:w-[500px] bg-gray-50 p-4 md:p-6 rounded-md shadow-md space-y-4">
            <div className="flex justify-between">
            <span className="text-base md:text-lg text-[#264164] text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">Subtotal</span>
            <span className="text-base md:text-lg text-[#264164] text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">(LKR) 0.00</span>
            </div>
            <div className="flex justify-between items-center">
            <span className="text-base text-[#264164] text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm p-1 ">Discount</span>
            <div className="flex space-x-2">
                <input
                type="number"
                placeholder="Discount"
                className="w-[80px] md:w-[100px] text-sm p-1 md:p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
                />
                <select className="border rounded-md p-1 md:p-2 w-[60px] md:w-[80px] text-[#264164] hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm">
                <option>%</option>
                <option>Amount</option>
                </select>
            </div>
            </div>

            <div className="flex justify-between ">
            <span className="text-base text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm text-[#264164]">Total</span>
            <span className="text-base text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm text-[#264164]">(LKR) 0.00</span>
            </div>

            <div className="flex justify-between items-center">
            <span className="text-base md:text-lg text-[#264164] text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm p-1">Payment Type</span>
            <div className="flex space-x-2 ">
                <select className="border rounded-md p-2 w-full text-[#264164] hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm ">
                <option>Full payment</option>
                <option>Installment</option>
                <option>Credit Payment</option>
                </select>
            </div>
            </div>

            <div className="flex justify-between items-center">
            <span className="text-base md:text-lg text-[#264164] text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm p-1">Amount(LKR)</span>
            <div className="flex space-x-2">
                <input
                type="text"
                placeholder="Add Amount"
                className="w-full p-1 md:p-2 text-sm border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
                />
            </div>
            </div>

            <div className="flex justify-between items-center">
            <span className="text-base md:text-lg text-[#264164] text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm p-1">Balance(LKR)</span>
            <span className="text-base md:text-lg text-[#264164] text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-sm xxl:text-sm p-1">0.00</span>
            
            </div>
            
        </div>
        </div>

         {/* Save Button */}
         <div className="flex justify-end mt-4 animate-slideInUp">
          <button className="px-6 py-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 transition-all duration-200">+ Save</button>
        </div>

      </div>
    </div>
  );
}

export default AddInvoice;
