import React from "react";

function InvoiceHeader({ headerData = { showFields: {} } }) {
  if (!headerData) return <p>Error: No header data provided.</p>;

  return (
    <div className="p-8 border-b border-gray-300 bg-gray-50 rounded-lg shadow-md">
      {/* Business Info */}
      <div className="flex justify-between items-center">
        <div>
          {headerData?.showFields?.businessName && (
            <p className="text-lg font-bold">{headerData?.businessName}</p>
          )}
          <div className="text-gray-600 text-sm space-y-1">
            {headerData?.showFields?.phone && <p>{headerData?.phone}</p>}
            {headerData?.showFields?.email && <p>{headerData?.email}</p>}
            {headerData?.showFields?.address && <p>{headerData?.address}</p>}
            {headerData?.showFields?.companyReg && (
              <p>Reg: {headerData?.companyReg}</p>
            )}
            {headerData?.showFields?.website && <p>{headerData?.website}</p>}
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-extrabold text-gray-800">Asipiya</h2>
          <p className="text-sm text-gray-600">SOFT SOLUTIONS</p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">INVOICE</h1>
        </div>
        <div>
          {headerData?.showFields?.billingAddress && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold">BILL TO:</span>
              <br />
              {headerData?.billTo}
            </p>
          )}
        </div>
        <div>
          {headerData?.showFields?.shipping && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold">SHIP TO:</span>
              <br />
              {headerData?.shipTo}
            </p>
          )}
        </div>
        <div className="text-right">
          {headerData?.showFields?.dueDate && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold">DUE DATE:</span> {headerData?.dueDate}
            </p>
          )}
          {headerData?.showFields?.paymentMethod && (
            <p className="text-sm font-semibold text-gray-800 mt-2">
              <span className="font-semibold">Payment:</span> {headerData?.paymentMethod}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvoiceHeader;