import React from "react";

function InvoiceFooter() {
  return (
    <div className="p-6 border-t border-gray-300 mt-6">
      {/* Main Section */}
      <div className="flex justify-between">
        {/* Message to Customer */}
        <div>
          <p className="text-gray-600 font-semibold">Message to customer</p>
        </div>

        {/* Amount Summary & Estimate Summary */}
        <div className="text-right w-[500px]">
          {/* Amount Summary */}
          <div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-left">SUBTOTAL </p>
              <span className="ml-10">LKR 675.00</span>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-600 text-left">DISCOUNT 2%</p>
              <span className="ml-10">-LKR 13.50</span>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-600 text-left">SHIPPING</p>
              <span className="ml-10">LKR 3.50</span>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold text-left">TOTAL</p>
              <span className="ml-10">LKR 665.00</span>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-600 text-left">DEPOSIT</p>
              <span className="ml-10">LKR 10.00</span>
            </div>

            <hr className="my-2 border-dashed border-gray-500" />

            <div className="flex justify-between">
              <p className="text-black font-bold text-lg">BALANCE DUE</p>
              <span className="ml-10">LKR 675.00</span>
            </div>
          </div>

          {/* Estimate Summary */}
          <div className="mt-6 text-right">
            <p className="font-semibold text-black">Estimate summary</p>
            <hr className="border-black mt-1" />
            <div className="flex justify-between text-gray-700 mt-2">
              <p>Estimate 1008</p>
              <p>LKR 200.00</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Invoice 1007</p>
              <p>LKR 108.00</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>This invoice 12345</p>
              <p>LKR 675.00</p>
            </div>
            <hr className="border-black mt-1" />
            <div className="flex justify-between font-semibold text-gray-800 mt-2">
              <p>Total invoiced</p>
              <p>LKR 165.50</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6">
        <div className="bg-gray-300 p-2 text-gray-700 font-semibold">
          Payment details
        </div>
        <div className="flex justify-between text-gray-500 text-sm mt-6">
          <p>Footer text</p>
          <p>Page 1 of 1</p>
        </div>
      </div>
    </div>
  );
}

export default InvoiceFooter;
