import React from "react";

function InvoiceFooter({ footerData, selectedColor }) {
  const notes = footerData?.notes || "No notes available";
  const paymentDetails = footerData?.paymentDetails || "No payment details available";
  const footerText = footerData?.footerText || "No footer text available";
  const showFields = footerData?.showFields || {};
  const invoiceId = footerData?.invoiceId || "No Invoice ID";

  return (
    <div className="p-8 border-t border-gray-300 mt-8 bg-gray-50 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700 font-medium">{notes}</p>
        </div>

        <div className="text-right">
          <div className="space-y-2">
            <div className="flex justify-between border-b pb-2">
              <p className="text-gray-700 font-medium">SUBTOTAL</p>
              <span className="font-semibold">LKR 675.00</span>
            </div>

            {showFields?.discounts && (
              <div className="flex justify-between border-b pb-2">
                <p className="text-gray-700">DISCOUNT 2%</p>
                <span className="text-red-500">-LKR 13.50</span>
              </div>
            )}

            {showFields?.deposit && (
              <div className="flex justify-between border-b pb-2">
                <p className="text-gray-700">DEPOSIT</p>
                <span className="font-semibold">LKR 10.00</span>
              </div>
            )}
          </div>

          {showFields?.estimateSummary && (
            <div className="mt-6 text-right">
              <p className="font-semibold text-gray-800 text-lg">Estimate Summary</p>
              <div className="border-t mt-3 pt-3 space-y-2">
                <div className="flex justify-between">
                  <p className="text-gray-700">Estimate 1008</p>
                  <span className="font-semibold">LKR 200.00</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Invoice 1007</p>
                  <span className="font-semibold">LKR 108.00</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">This Invoice {invoiceId}</p>
                  <span className="font-semibold">LKR 675.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <p className="text-gray-900">Total Invoiced</p>
                  <span className="text-gray-900">LKR 165.50</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 rounded-md" style={{ backgroundColor: selectedColor }}>
        <div className="text-gray-800 font-semibold">{paymentDetails}</div>
        <div className="text-gray-600 text-sm mt-2">{footerText}</div>
      </div>
    </div>
  );
}

export default InvoiceFooter;
