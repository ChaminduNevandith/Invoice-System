import React from "react";

function InvoiceHeader({ headerData = { showFields: {} } }) {
  if (!headerData) return <p className="text-xs">Error: No header data provided.</p>;

  return (
    <div className="p-6 border-b border-gray-300 text-xs">
      <div className="flex justify-between items-start">
        <div>
          {headerData?.showFields?.businessName && (
            <p className="font-semibold">{headerData?.businessName}</p>
          )}
          {headerData?.showFields?.phone && (
            <p className="text-gray-500">{headerData?.phone}</p>
          )}
          {headerData?.showFields?.email && (
            <p className="text-gray-500">{headerData?.email}</p>
          )}
          {headerData?.showFields?.address && (
            <p className="text-gray-500">{headerData?.address}</p>
          )}
          {headerData?.showFields?.companyReg && (
            <p className="text-gray-500">Reg: {headerData?.companyReg}</p>
          )}
          {headerData?.showFields?.website && (
            <p className="text-gray-500">{headerData?.website}</p>
          )}
        </div>
        <div className="text-right">
          <h2 className="text-base font-semibold">Asipiya</h2>
          <p className="text-gray-500">SOFT SOLUTIONS</p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="flex justify-between items-start mt-6">
        <div>
          <h1 className="text-lg font-bold">INVOICE</h1>
          {headerData?.showFields?.billingAddress && (
            <p className="text-gray-500 mt-2 w-[150px]">
              <span className="font-semibold">BILL TO</span>
              <br />
              {headerData?.billTo}
            </p>
          )}
        </div>
        <div>
          {headerData?.showFields?.shipping && (
            <p className="text-gray-500 p-2 w-[150px]">
              <span className="font-semibold">SHIP TO</span>
              <br />
              {headerData?.shipTo}
            </p>
          )}
        </div>
        <div>
          {headerData?.showFields?.terms && (
            <p className="text-gray-500 p-2 w-[150px]">
              <span className="font-semibold">TERMS</span>: {headerData?.terms}
            </p>
          )}
        </div>
        <div className="text-right">
          {headerData?.showFields?.dueDate && (
            <p className="text-gray-500 p-2 w-[150px]">
              <span className="font-semibold">DUE DATE</span>: {headerData?.dueDate}
            </p>
          )}
          {headerData?.showFields?.paymentMethod && (
            <p className="font-semibold mt-2 p-2 w-[150px]">
              <span className="font-semibold">Payment</span>: {headerData?.paymentMethod}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvoiceHeader;
