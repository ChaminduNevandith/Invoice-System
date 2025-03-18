import React from "react";

function InvoiceFooter({ footerData }) {
  // Using optional chaining and fallback values
  const notes = footerData?.notes || 'No notes available';
  const paymentDetails = footerData?.paymentDetails || 'No payment details available';
  const footerText = footerData?.footerText || 'No footer text available';
  const showFields = footerData?.showFields || {}; // Default to empty object if undefined
  const invoiceId = footerData?.invoiceId || 'No Invoice ID';

  return (
    <div className="p-6 border-t border-gray-300 mt-6">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-600 font-semibold">{notes}</p>
        </div>

        <div className="text-right w-[500px]">
          <div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-left">SUBTOTAL</p>
              <span className="ml-10">LKR 675.00</span>
            </div>

            {showFields?.discounts && (
              <div className="flex justify-between">
                <p className="text-gray-600 text-left">DISCOUNT 2%</p>
                <span className="ml-10">-LKR 13.50</span>
              </div>
            )}

            {showFields?.deposit && (
              <div className="flex justify-between">
                <p className="text-gray-600 text-left">DEPOSIT</p>
                <span className="ml-10">LKR 10.00</span>
              </div>
            )}
          </div>

          {showFields?.estimateSummary && (
            <div className="mt-6 text-right">
              <p className="font-semibold text-black">Estimate Summary</p>
              <div className="border-t mt-2 pt-2">
                <div className="flex justify-between">
                  <p className="text-gray-600 text-left">Estimate 1008</p>
                  <span className="ml-10">LKR 200.00</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600 text-left">Invoice 1007</p>
                  <span className="ml-10">LKR 108.00</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600 text-left">This Invoice {invoiceId}</p>
                  <span className="ml-10">LKR 675.00</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <p className="text-black text-left">Total Invoiced</p>
                  <span className="ml-10">LKR 165.50</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-gray-300 p-2 text-gray-700 font-semibold">
          {paymentDetails}
        </div>
        <div className="text-gray-500 text-sm mt-6">{footerText}</div>
      </div>
    </div>
  );
}

export default InvoiceFooter;
