import React from "react";

function MinimalInvoiceFooter({ footerData, selectedColor }) {
  const notes = footerData?.notes || 'No notes available';
  const paymentDetails = footerData?.paymentDetails || 'No payment details available';
  const footerText = footerData?.footerText || 'No footer text available';
  const showFields = footerData?.showFields || {};
  const invoiceId = footerData?.invoiceId || 'No Invoice ID';

  return (
    <div className="p-6 border-t border-gray-200 mt-6 text-gray-700 bg-white rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold text-blue-700">{notes}</p>
        </div>

        <div className="text-right">
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <p className="font-semibold">SUBTOTAL</p>
              <span>LKR 675.00</span>
            </div>
            {showFields?.discounts && (
              <div className="flex justify-between text-gray-600">
                <p className="font-semibold">DISCOUNT 2%</p>
                <span>-LKR 13.50</span>
              </div>
            )}
            {showFields?.deposit && (
              <div className="flex justify-between text-gray-600">
                <p className="font-semibold">DEPOSIT</p>
                <span>LKR 10.00</span>
              </div>
            )}
          </div>

          {showFields?.estimateSummary && (
            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-green-800">Estimate Summary</p>
              <div className="border-t mt-2 pt-2 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <p className="font-semibold">Estimate 1008</p>
                  <span>LKR 200.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p className="font-semibold">Invoice 1007</p>
                  <span>LKR 108.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p className="font-semibold">This Invoice {invoiceId}</p>
                  <span>LKR 675.00</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-800">
                  <p>Total Invoiced</p>
                  <span>LKR 165.50</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Details Section */}
      <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: selectedColor }}>
        <p className="font-semibold text-white">{paymentDetails}</p>
        <p className="text-sm mt-2 text-white">{footerText}</p>
      </div>
    </div>
  );
}

export default MinimalInvoiceFooter;
