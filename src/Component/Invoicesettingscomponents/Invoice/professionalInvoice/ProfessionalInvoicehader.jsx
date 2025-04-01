import React from "react";

function ProfessionalInvoiceHeader({ headerData = { showFields: {} } }) {
  if (!headerData) {
    return <p className="text-red-500 font-semibold">Error: No header data provided.</p>;
  }

  return (
    <div className="p-8 border  bg-white rounded-lg">
      {/* Top Section: Business Info & Invoice Details */}
      <div className="flex justify-between items-start border-b pb-6 mb-6">
        {/* Left: Business Info */}
        <div className="w-1/2">
          {headerData?.showFields?.businessName && (
            <h2 className="text-3xl font-extrabold text-gray-900">
              {headerData.businessName}
            </h2>
          )}
          {headerData?.showFields?.phone && (
            <p className="text-sm text-gray-600">{headerData.phone}</p>
          )}
          {headerData?.showFields?.email && (
            <p className="text-sm text-gray-600">{headerData.email}</p>
          )}
          {headerData?.showFields?.address && (
            <p className="text-sm text-gray-600">{headerData.address}</p>
          )}
          {headerData?.showFields?.companyReg && (
            <p className="text-sm text-gray-600">Reg: {headerData.companyReg}</p>
          )}
          {headerData?.showFields?.website && (
            <p className="text-sm text-gray-600">{headerData.website}</p>
          )}
        </div>

        {/* Right: Invoice Details */}
        <div className="text-right">
          <h1 className="text-5xl font-bold text-gray-900">INVOICE</h1>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Asipiya</h2>
          <p className="text-sm text-gray-600">SOFT SOLUTIONS</p>
          {headerData?.showFields?.dueDate && (
            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold text-gray-900">Due Date:</span> {headerData.dueDate}
            </p>
          )}
          {headerData?.showFields?.paymentMethod && (
            <p className="text-sm font-semibold mt-2 text-gray-700">
              <span className="font-semibold text-gray-900">Payment:</span> {headerData.paymentMethod}
            </p>
          )}
        </div>
      </div>

      {/* Middle Section: Billing, Shipping & Terms */}
      <div className="grid grid-cols-3 gap-6">
        {/* Bill To */}
        <div className="bg-gray-100 p-4 rounded-lg">
          {headerData?.showFields?.billingAddress && (
            <>
              <h3 className="text-lg font-semibold text-gray-900">Bill To</h3>
              <p className="text-sm text-gray-700 mt-1">{headerData.billTo}</p>
            </>
          )}
        </div>

        {/* Ship To */}
        <div className="bg-gray-100 p-4 rounded-lg">
          {headerData?.showFields?.shipping && (
            <>
              <h3 className="text-lg font-semibold text-gray-900">Ship To</h3>
              <p className="text-sm text-gray-700 mt-1">{headerData.shipTo}</p>
            </>
          )}
        </div>

        {/* Terms */}
        <div className="bg-gray-100 p-4 rounded-lg">
          {headerData?.showFields?.terms && (
            <>
              <h3 className="text-lg font-semibold text-gray-900">Terms</h3>
              <p className="text-sm text-gray-700 mt-1">{headerData.terms}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfessionalInvoiceHeader;
