import React, { useState } from "react";

function InvoiceFooter({ footerData, selectedColor, totalAmount = 0 }) {
  const safeTotalAmount = Number(totalAmount) || 0;

  const notes = footerData?.notes || "No notes available";
  const paymentDetails = footerData?.paymentDetails || "No payment details available";
  const footerText = footerData?.footerText || "No footer text available";
  const showFields = footerData?.showFields || {};
  const invoiceId = footerData?.invoiceId || "No Invoice ID";

  // Editable states for discount and deposit
  const [discount, setDiscount] = useState(showFields?.discounts ? 2 : 0);
  const [deposit, setDeposit] = useState(showFields?.deposit ? 10 : 0);
  const [isEditingDiscount, setIsEditingDiscount] = useState(false);
  const [isEditingDeposit, setIsEditingDeposit] = useState(false);

  const discountAmount = showFields?.discounts ? (safeTotalAmount * (discount / 100)) : 0;
  const depositAmount = showFields?.deposit ? deposit : 0;
  const finalAmount = safeTotalAmount - discountAmount + depositAmount;

  // Editable states for Estimate Summary
  const [estimateLabel, setEstimateLabel] = useState("Estimate 1008");
  const [estimateAmount, setEstimateAmount] = useState(200);
  const [invoiceLabel, setInvoiceLabel] = useState("Invoice 1007");
  const [invoiceAmount, setInvoiceAmount] = useState(108);
  const [thisInvoiceLabel, setThisInvoiceLabel] = useState(`This Invoice ${invoiceId}`);
  const [thisInvoiceAmount, setThisInvoiceAmount] = useState(safeTotalAmount);

  const [editEstimateLabel, setEditEstimateLabel] = useState(false);
  const [editEstimateAmount, setEditEstimateAmount] = useState(false);
  const [editInvoiceLabel, setEditInvoiceLabel] = useState(false);
  const [editInvoiceAmount, setEditInvoiceAmount] = useState(false);
  const [editThisInvoiceLabel, setEditThisInvoiceLabel] = useState(false);
  const [editThisInvoiceAmount, setEditThisInvoiceAmount] = useState(false);

  return (
    <div className="p-8 border-t border-gray-300 mt-8 bg-gray-50 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700 font-medium text-sm">{notes}</p>
        </div>

        <div className="text-right">
          <div className="space-y-2">
            <div className="flex justify-between border-b pb-2">
              <p className="text-gray-700 font-medium text-sm">SUBTOTAL</p>
              <span className="font-semibold text-sm">LKR {safeTotalAmount.toFixed(2)}</span>
            </div>

            {showFields?.discounts && (
              <div className="flex justify-between items-center border-b pb-2">
                <p className="text-gray-700 text-sm">DISCOUNT {discount}%</p>
                {isEditingDiscount ? (
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                    onBlur={() => setIsEditingDiscount(false)}
                    onKeyDown={(e) => e.key === "Enter" && setIsEditingDiscount(false)}
                    className="w-24 border rounded px-2 py-1 text-right text-sm"
                    autoFocus
                  />
                ) : (
                  <span 
                    className="text-red-500 cursor-pointer font-semibold text-sm"
                    onClick={() => setIsEditingDiscount(true)}
                    title="Click to edit"
                  >
                    -LKR {discountAmount.toFixed(2)}
                  </span>
                )}
              </div>
            )}

            {showFields?.deposit && (
              <div className="flex justify-between items-center border-b pb-2">
                <p className="text-gray-700 text-sm">DEPOSIT</p>
                {isEditingDeposit ? (
                  <input
                    type="number"
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    onBlur={() => setIsEditingDeposit(false)}
                    onKeyDown={(e) => e.key === "Enter" && setIsEditingDeposit(false)}
                    className="w-24 border rounded px-2 py-1 text-right text-sm"
                    autoFocus
                  />
                ) : (
                  <span 
                    className="font-semibold cursor-pointer text-sm"
                    onClick={() => setIsEditingDeposit(true)}
                    title="Click to edit"
                  >
                    LKR {depositAmount.toFixed(2)}
                  </span>
                )}
              </div>
            )}

            <div className="flex justify-between font-semibold text-sm pt-2">
              <p className="text-gray-900">TOTAL</p>
              <span className="text-gray-900 text-sm">LKR {finalAmount.toFixed(2)}</span>
            </div>
          </div>

          {showFields?.estimateSummary && (
            <div className="mt-6 text-right">
              <p className="font-semibold text-gray-800 text-lg text-sm">Estimate Summary</p>
              <div className="border-t mt-3 pt-3 space-y-2">
                {/* Estimate Row */}
                <div className="flex justify-between items-center">
                  {editEstimateLabel ? (
                    <input
                      value={estimateLabel}
                      onChange={(e) => setEstimateLabel(e.target.value)}
                      onBlur={() => setEditEstimateLabel(false)}
                      onKeyDown={(e) => e.key === "Enter" && setEditEstimateLabel(false)}
                      className="text-left border rounded px-2 py-1 w-48 text-sm"
                      autoFocus
                    />
                  ) : (
                    <p
                      className="text-gray-700 cursor-pointer text-sm"
                      onClick={() => setEditEstimateLabel(true)}
                      title="Click to edit"
                    >
                      {estimateLabel}
                    </p>
                  )}
                  {editEstimateAmount ? (
                    <input
                      type="number"
                      value={estimateAmount}
                      onChange={(e) => setEstimateAmount(Number(e.target.value))}
                      onBlur={() => setEditEstimateAmount(false)}
                      onKeyDown={(e) => e.key === "Enter" && setEditEstimateAmount(false)}
                      className="text-right border rounded px-2 py-1 w-24 text-sm"
                      autoFocus
                    />
                  ) : (
                    <span
                      className="font-semibold cursor-pointer text-sm"
                      onClick={() => setEditEstimateAmount(true)}
                      title="Click to edit"
                    >
                      LKR {estimateAmount.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Invoice Row */}
                <div className="flex justify-between items-center">
                  {editInvoiceLabel ? (
                    <input
                      value={invoiceLabel}
                      onChange={(e) => setInvoiceLabel(e.target.value)}
                      onBlur={() => setEditInvoiceLabel(false)}
                      onKeyDown={(e) => e.key === "Enter" && setEditInvoiceLabel(false)}
                      className="text-left border rounded px-2 py-1 w-48 text-sm"
                      autoFocus
                    />
                  ) : (
                    <p
                      className="text-gray-700 cursor-pointer text-sm"
                      onClick={() => setEditInvoiceLabel(true)}
                      title="Click to edit"
                    >
                      {invoiceLabel}
                    </p>
                  )}
                  {editInvoiceAmount ? (
                    <input
                      type="number"
                      value={invoiceAmount}
                      onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                      onBlur={() => setEditInvoiceAmount(false)}
                      onKeyDown={(e) => e.key === "Enter" && setEditInvoiceAmount(false)}
                      className="text-right border rounded px-2 py-1 w-24 text-sm"
                      autoFocus
                    />
                  ) : (
                    <span
                      className="font-semibold cursor-pointer text-sm"
                      onClick={() => setEditInvoiceAmount(true)}
                      title="Click to edit"
                    >
                      LKR {invoiceAmount.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* This Invoice Row */}
                <div className="flex justify-between items-center">
                  {editThisInvoiceLabel ? (
                    <input
                      value={thisInvoiceLabel}
                      onChange={(e) => setThisInvoiceLabel(e.target.value)}
                      onBlur={() => setEditThisInvoiceLabel(false)}
                      onKeyDown={(e) => e.key === "Enter" && setEditThisInvoiceLabel(false)}
                      className="text-left border rounded px-2 py-1 w-48 text-sm"
                      autoFocus
                    />
                  ) : (
                    <p
                      className="text-gray-700 cursor-pointer text-sm"
                      onClick={() => setEditThisInvoiceLabel(true)}
                      title="Click to edit"
                    >
                      {thisInvoiceLabel}
                    </p>
                  )}
                  {editThisInvoiceAmount ? (
                    <input
                      type="number"
                      value={thisInvoiceAmount}
                      onChange={(e) => setThisInvoiceAmount(Number(e.target.value))}
                      onBlur={() => setEditThisInvoiceAmount(false)}
                      onKeyDown={(e) => e.key === "Enter" && setEditThisInvoiceAmount(false)}
                      className="text-right border rounded px-2 py-1 w-24 text-sm"
                      autoFocus
                    />
                  ) : (
                    <span
                      className="font-semibold cursor-pointer text-sm"
                      onClick={() => setEditThisInvoiceAmount(true)}
                      title="Click to edit"
                    >
                      LKR {thisInvoiceAmount.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Total */}
                <div className="flex justify-between font-semibold text-lg text-sm border-t pt-2">
                  <p className="text-gray-900">Total Invoiced</p>
                  <span className="text-gray-900 text-sm">
                    LKR {(estimateAmount + invoiceAmount + thisInvoiceAmount).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 rounded-md" style={{ backgroundColor: selectedColor }}>
        <div className="text-gray-800 font-semibold text-sm">{paymentDetails}</div>
        <div className="text-gray-600 text-sm mt-2">{footerText}</div>
      </div>
    </div>
  );
}

export default InvoiceFooter;
