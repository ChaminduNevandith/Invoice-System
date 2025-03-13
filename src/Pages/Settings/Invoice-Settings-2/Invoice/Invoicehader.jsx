import React from 'react'

function InvoiceHeader() {
  return (
    <div className="p-6 border-b border-gray-300">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-semibold">charmindu</p>
          <p className="text-sm text-gray-500">+0725422146</p>
          <p className="text-sm text-gray-500">cnewa@gmail.com</p>
          <p className="text-sm text-gray-500">www.asipiya.lk</p>
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
          <p className="text-sm text-gray-500 mt-2">
            <span className="font-semibold">BILL TO</span><br />
            Smith Co. 123 Main<br />
            Street City, CA 12345
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">SHIP TO</span><br />
            John Smith 20637 Palm<br />
            Drive City, CA 12345
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">SHIP DATE</span>: 01/03/2018<br />
            <span className="font-semibold">SHIP VIA</span>: FedEx<br />
            <span className="font-semibold">TRACKING</span>: #12345678
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">INVOICE</span>: 12345<br />
            <span className="font-semibold">DATE</span>: 01/03/2018<br />
            <span className="font-semibold">TERMS</span>: Net 30<br />
            <span className="font-semibold">DUE DATE</span>: 02/03/2018
          </p>
          <p className="text-sm font-semibold mt-2">CHEQUE</p>
        </div>
      </div>
    </div>
  )
}

export default InvoiceHeader
