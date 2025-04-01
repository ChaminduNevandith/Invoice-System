import React from "react";

function ProfessionalInvoiceFooter({ footerData, selectedColor }) {
  const notes = footerData?.notes || "No notes available";
  const paymentDetails = footerData?.paymentDetails || "No payment details available";
  const footerText = footerData?.footerText || "No footer text available";
  const showFields = footerData?.showFields || {};
  const invoiceId = footerData?.invoiceId || "No Invoice ID";

  return (
    <div className="p-8  mt-6 bg-gray-50 ">
      {/* Notes & Payment Summary */}
      <div className="grid grid-cols-2 gap-6">
        {/* Notes Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Notes</h3>
          <p className="text-gray-700 mt-2">{notes}</p>
        </div>

        {/* Payment Summary */}
        <div className="bg-white p-4 ">
          <h3 className="text-lg font-semibold text-gray-900 text-right">Summary</h3>
          <div className="border-t mt-2 pt-2 space-y-2">
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <span>LKR 675.00</span>
            </div>

            {showFields?.discounts && (
              <div className="flex justify-between text-gray-700">
                <p>Discount (2%)</p>
                <span>-LKR 13.50</span>
              </div>
            )}

            {showFields?.deposit && (
              <div className="flex justify-between text-gray-700">
                <p>Deposit</p>
                <span>LKR 10.00</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Estimate Summary Section */}
      {showFields?.estimateSummary && (
        <div className="mt-6 bg-white p-4 ">
          <h3 className="text-lg font-semibold text-gray-900">Estimate Summary</h3>
          <div className="border-t mt-2 pt-2 space-y-2">
            <div className="flex justify-between text-gray-700">
              <p>Estimate 1008</p>
              <span>LKR 200.00</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Invoice 1007</p>
              <span>LKR 108.00</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>This Invoice {invoiceId}</p>
              <span>LKR 675.00</span>
            </div>
            <div className="flex justify-between font-semibold text-black">
              <p>Total Invoiced</p>
              <span>LKR 165.50</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer Payment Details */}
      <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: selectedColor }}>
        <h3 className="text-lg font-semibold text-gray-900">Payment Details</h3>
        <p className="text-gray-700 mt-2">{paymentDetails}</p>
        <p className="text-gray-500 text-sm mt-4">{footerText}</p>
      </div>
    </div>
  );
}

export default ProfessionalInvoiceFooter;
