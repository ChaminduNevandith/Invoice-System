import React from "react";

function MinimalInvoiceHeader({ headerData = { showFields: {} } }) {
  if (!headerData) return <p className="text-red-500 text-xs">Error: No header data provided.</p>;

  return (
    <div className="p-8 border-b border-gray-200 bg-white rounded-lg">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          {headerData?.showFields?.businessName && (
            <p className="text-base font-semibold text-blue-800">{headerData?.businessName}</p>
          )}
          {headerData?.showFields?.phone && (
            <p className="text-xs text-gray-600">{headerData?.phone}</p>
          )}
          {headerData?.showFields?.email && (
            <p className="text-xs text-gray-600">{headerData?.email}</p>
          )}
          {headerData?.showFields?.address && (
            <p className="text-xs text-gray-600">{headerData?.address}</p>
          )}
          {headerData?.showFields?.companyReg && (
            <p className="text-xs text-gray-600">Reg: {headerData?.companyReg}</p>
          )}
          {headerData?.showFields?.website && (
            <p className="text-xs text-gray-600">{headerData?.website}</p>
          )}
        </div>
        <div className="text-right">
          <h2 className="text-xl font-bold text-purple-700">Asipiya</h2>
          <p className="text-xs text-gray-500">SOFT SOLUTIONS</p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-4 gap-6 mt-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <h1 className="text-2xl font-extrabold text-green-800">INVOICE</h1>
          {headerData?.showFields?.billingAddress && (
            <p className="text-xs text-gray-600 mt-2">
              <span className="font-semibold text-gray-800">BILL TO</span>
              <br />
              {headerData?.billTo}
            </p>
          )}
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          {headerData?.showFields?.shipping && (
            <p className="text-xs text-gray-600">
              <span className="font-semibold text-gray-800">SHIP TO</span>
              <br />
              {headerData?.shipTo}
            </p>
          )}
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          {headerData?.showFields?.terms && (
            <p className="text-xs text-gray-600">
              <span className="font-semibold text-gray-800">TERMS</span>: {headerData?.terms}
            </p>
          )}
        </div>
        <div className="text-right bg-pink-50 p-4 rounded-lg">
          {headerData?.showFields?.dueDate && (
            <p className="text-xs text-gray-600">
              <span className="font-semibold text-gray-800">DUE DATE</span>: {headerData?.dueDate}
            </p>
          )}
          {headerData?.showFields?.paymentMethod && (
            <p className="text-xs font-semibold text-gray-800 mt-2">
              <span className="font-semibold">Payment</span>: {headerData?.paymentMethod}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MinimalInvoiceHeader;
