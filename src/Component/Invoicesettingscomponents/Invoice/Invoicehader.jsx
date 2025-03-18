import React from "react";

function InvoiceHeader({ headerData = { showFields: {} } }) {
  if (!headerData) return <p>Error: No header data provided.</p>;

  return (
    <div className="p-6 border-b border-gray-300">
      <div className="flex justify-between items-start">
        <div>
          {headerData?.showFields?.businessName && (
            <p className="text-sm font-semibold">{headerData?.businessName}</p>
          )}
          {headerData?.showFields?.phone && (
            <p className="text-sm text-gray-500">{headerData?.phone}</p>
          )}
          {headerData?.showFields?.email && (
            <p className="text-sm text-gray-500">{headerData?.email}</p>
          )}
          {headerData?.showFields?.address && (
            <p className="text-sm text-gray-500">{headerData?.address}</p>
          )}
          {headerData?.showFields?.companyReg && (
            <p className="text-sm text-gray-500">
              Reg: {headerData?.companyReg}
            </p>
          )}
          {headerData?.showFields?.website && (
            <p className="text-sm text-gray-500">{headerData?.website}</p>
          )}
        </div>
        <div className="text-right">
          <h2 className="text-xl font-semibold">Asipiya</h2>
          <p className="text-sm text-gray-500">SOFT SOLUTIONS</p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="flex justify-between items-start mt-6">
        <div>
          <h1 className="text-2xl font-bold">INVOICE</h1>
          {headerData?.showFields?.billingAddress && (
            <p className="text-sm text-gray-500 mt-2 w-[150px]">
              <span className="font-semibold">BILL TO</span>
              <br />
              {headerData?.billTo}
            </p>
          )}
        </div>
        <div>
          {headerData?.showFields?.shipping && (
            <p className="text-sm text-gray-500 p-2 w-[150px]">
              <span className="font-semibold">SHIP TO</span>
              <br />
              {headerData?.shipTo}
            </p>
          )}
        </div>
        <div>
          {headerData?.showFields?.terms && (
            <p className="text-sm text-gray-500 p-2 w-[150px]">
              <span className="font-semibold">TERMS</span>: {headerData?.terms}
            </p>
          )}
        </div>
        <div className="text-right">
          {headerData?.showFields?.dueDate && (
            <p className="text-sm text-gray-500 p-2 w-[150px]">
              <span className="font-semibold">DUE DATE</span>:{" "}
              {headerData?.dueDate}
            </p>
          )}
          {headerData?.showFields?.paymentMethod && (
            <p className="text-sm font-semibold mt-2 p-2 w-[150px]">
              <span className="font-semibold">Payment</span>:{" "}
              {headerData?.paymentMethod}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvoiceHeader;
