import React from "react";

const DisplayInvoiceEmail = () => {
  return (
    <div className="w-[900px] h-[500px] mx-auto border  overflow-hidden">
      <div className="bg-gray-100 px-4 py-2 border-b">
        <p className="text-sm text-gray-600">
          <strong>Subject:</strong> <span className="text-blue-600">Reminder: Your payment to chamindu is due</span>
        </p>
        <p className="text-sm text-gray-600">
          <strong>From:</strong> Asipbook@notification.intuit.com
        </p>
      </div>
      <div className="bg-purple-100 px-4 py-3 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Chamindu</h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4 border-b pb-3">
          <div>
            <p className="text-xs text-gray-500">INVOICE</p>
            <p className="font-medium">12345</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">DUE DATE</p>
            <p className="font-medium">02/06/2018</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">BALANCE DUE</p>
            <p className="font-medium">LRs665.00</p>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md w-full text-center font-semibold hover:bg-purple-700">
            PAY INVOICE
          </button>
        </div>
        <div className="mt-4 text-sm text-gray-700">
          <p>Dear [customer full name],</p>
          <p className="mt-2">
            We're sending a reminder to let you know that invoice 12345 has not been paid. If you already paid this invoice or have any questions, let us know!
          </p>
          <p className="mt-4">Have a great day!<br/>Chamindu</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayInvoiceEmail;
