import { useState } from "react";
import InvoiceNav from "./InvoiceNav";

export default function Contentsettings({
  headerData,
  updateHeaderData,
  toggleFieldVisibility,
}) {
  return (
    <div className="w-[400px] shadow-lg rounded-lg border p-2">
      <InvoiceNav />
      <div className="p-4">
        {/* Header Section */}
        <h2 className="text-lg font-bold">Header</h2>
        <div className="space-y-2">
          {[
            { key: "businessName", label: "Business Name" },
            { key: "phone", label: "Phone" },
            { key: "email", label: "Email" },
            { key: "address", label: "Business Address" },
            { key: "companyReg", label: "Company Registration Number" },
            { key: "website", label: "Website" },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={headerData.showFields[key]}
                onChange={() => toggleFieldVisibility(key)}
              />
              <div className="flex-1">
                <label className="text-sm font-medium">{label}</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder={label}
                  value={headerData[key]}
                  onChange={(e) => updateHeaderData(key, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <h2 className="mt-4 text-lg font-bold">Form</h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4" />
            <span className="text-sm font-medium">Form Names</span>
          </div>
          {["Invoice", "Estimate", "Sales Receipt", "Credit Note"].map(
            (label, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 border rounded"
                placeholder={label}
              />
            )
          )}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4" />
            <span className="text-sm font-medium">Form Numbers</span>
          </div>
          <a href="#" className="text-blue-600 text-sm">
            Use Customer Transcript Number
          </a>
        </div>

        {/* Display Section */}
        <h2 className="mt-4 text-lg font-bold">Display</h2>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Invoice Details</h2>
          {[
            { key: "billTo", label: "Bill To", type: "text" },
            { key: "shipTo", label: "Ship To", type: "text" },
            { key: "terms", label: "Terms", type: "text" },
            { key: "dueDate", label: "Date", type: "date" },
            { key: "paymentMethod", label: "Payment Method", type: "text" },
          ].map(({ key, label, type }) => (
            <div key={key} className="mt-2">
              <label className="text-sm font-medium">{label}</label>
              <input
                type={type}
                className="w-full mt-1 p-2 border rounded"
                placeholder={label}
                value={headerData[key]}
                onChange={(e) => updateHeaderData(key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
