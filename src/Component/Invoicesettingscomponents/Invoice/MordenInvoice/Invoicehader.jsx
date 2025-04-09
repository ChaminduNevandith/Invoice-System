import React from "react";

function InvoiceHeader({ headerData = { showFields: {} } }) {
  if (!headerData) return <p className="text-xs">Error: No header data provided.</p>;

  return (
    <div className="p-4 border-b border-gray-300 bg-gray-50 rounded-lg text-xs">
      {/* Business Info */}
      <div className="flex justify-between items-center">
        <div>
          {headerData?.showFields?.businessName && (
            <p className="text-sm font-semibold">{headerData?.businessName}</p>
          )}
          <div className="text-gray-600 space-y-0.5">
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
          <h2 className="text-sm font-bold text-gray-800">Asipiya</h2>
          <p className="text-[10px] text-gray-600">SOFT SOLUTIONS</p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        <div>
          <h1 className="text-base font-bold text-gray-800">INVOICE</h1>
        </div>
        <div>
          {headerData?.showFields?.billingAddress && (
            <p className="text-gray-600">
              <span className="font-semibold">BILL TO:</span>
              <br />
              {headerData?.billTo}
            </p>
          )}
        </div>
        <div>
          {headerData?.showFields?.shipping && (
            <p className="text-gray-600">
              <span className="font-semibold">SHIP TO:</span>
              <br />
              {headerData?.shipTo}
            </p>
          )}
        </div>
        <div className="text-right space-y-0.5">
          {headerData?.showFields?.dueDate && (
            <p className="text-gray-600">
              <span className="font-semibold">DUE DATE:</span> {headerData?.dueDate}
            </p>
          )}
          {headerData?.showFields?.paymentMethod && (
            <p className="text-gray-800">
              <span className="font-semibold">Payment:</span> {headerData?.paymentMethod}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvoiceHeader;
