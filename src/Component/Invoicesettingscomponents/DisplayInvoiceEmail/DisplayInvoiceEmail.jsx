import React from "react";

const DisplayInvoiceEmail = ({ 
  salesFormType, 
  emailSubject, 
  message, 
  useGreeting, 
  greetingType, 
  customerName, 
  showFullDetails, 
  showSummary, 
  showPdf 
}) => {
  return (
    <div className="w-[900px] h-[500px] mx-auto border overflow-hidden">
      {/* Email Header */}
      <div className="bg-gray-100 px-4 py-2 border-b">
        <p className="text-sm text-gray-600">
          <strong>Subject:</strong> <span className="text-blue-600">{emailSubject}</span>
        </p>
        <p className="text-sm text-gray-600">
          <strong>From:</strong> Asipbook@notification.intuit.com
        </p>
      </div>

      {/* Business Name Header */}
      <div className="bg-purple-100 px-4 py-3 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Chamindu</h2>
      </div>

      {/* Invoice Details */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4 border-b pb-3">
          <div>
            <p className="text-xs text-gray-500">{salesFormType.toUpperCase()}</p>
            <p className="font-medium">12345</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">DUE DATE</p>
            <p className="font-medium">02/06/2024</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">BALANCE DUE</p>
            <p className="font-medium">LRs 665.00</p>
          </div>
        </div>

        {/* Pay Invoice Button */}
        <div className="mt-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md w-full text-center font-semibold hover:bg-purple-700">
            PAY INVOICE
          </button>
        </div>

        {/* Customer Message */}
        <div className="mt-4 text-sm text-gray-700">
          <p>
            {useGreeting ? `${greetingType}, ${customerName},` : ""}
          </p>
          <p className="mt-2">{message}</p>
          <p className="mt-4">Have a great day!<br/>Chamindu</p>
        </div>

        {/* Display Email Preferences */}
        <div className="mt-4 text-sm">
          <h3 className="font-medium">Invoice Email Preferences:</h3>
          <ul className="list-disc list-inside">
            {showFullDetails && <li>Full Details included</li>}
            {showSummary && <li>Summarized Details included</li>}
            {showPdf && <li>PDF Attachment included</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayInvoiceEmail;
