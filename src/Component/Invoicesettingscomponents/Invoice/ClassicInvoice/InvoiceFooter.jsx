import React, { useState } from "react";

function InvoiceFooter({ footerData, selectedColor, totalAmount = 0 }) {
  const safeTotalAmount = Number(totalAmount) || 0;

  const notes = footerData?.notes || 'No notes available';
  const paymentDetails = footerData?.paymentDetails || 'No payment details available';
  const footerText = footerData?.footerText || 'No footer text available';
  const showFields = footerData?.showFields || {};
  const invoiceId = footerData?.invoiceId || 'No Invoice ID';

  const [discount, setDiscount] = useState(showFields?.discounts ? 2 : 0);
  const [deposit, setDeposit] = useState(showFields?.deposit ? 10 : 0);
  const [isEditingDiscount, setIsEditingDiscount] = useState(false);
  const [isEditingDeposit, setIsEditingDeposit] = useState(false);

  const discountAmount = showFields?.discounts ? (safeTotalAmount * (discount / 100)) : 0;
  const depositAmount = showFields?.deposit ? deposit : 0;
  const finalAmount = safeTotalAmount - discountAmount + depositAmount;

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
    <div className="p-6 border-t border-gray-300 mt-6 text-sm">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-600 font-medium">{notes}</p>
        </div>

        <div className="text-right w-[500px]">
          <div>
            <div className="flex justify-between">
              <p className="text-gray-600 text-left">SUBTOTAL</p>
              <span className="ml-10">LKR {safeTotalAmount.toFixed(2)}</span>
            </div>

            {showFields?.discounts && (
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-left">DISCOUNT {discount}%</p>
                {isEditingDiscount ? (
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                    onBlur={() => setIsEditingDiscount(false)}
                    onKeyDown={(e) => e.key === "Enter" && setIsEditingDiscount(false)}
                    className="ml-10 w-24 border rounded px-1 py-0.5 text-right text-xs"
                    autoFocus
                  />
                ) : (
                  <span
                    className="ml-10 cursor-pointer"
                    onClick={() => setIsEditingDiscount(true)}
                    title="Click to edit"
                  >
                    -LKR {discountAmount.toFixed(2)}
                  </span>
                )}
              </div>
            )}

            {showFields?.deposit && (
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-600 text-left">DEPOSIT</p>
                {isEditingDeposit ? (
                  <input
                    type="number"
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    onBlur={() => setIsEditingDeposit(false)}
                    onKeyDown={(e) => e.key === "Enter" && setIsEditingDeposit(false)}
                    className="ml-10 w-24 border rounded px-1 py-0.5 text-right text-xs"
                    autoFocus
                  />
                ) : (
                  <span
                    className="ml-10 cursor-pointer"
                    onClick={() => setIsEditingDeposit(true)}
                    title="Click to edit"
                  >
                    LKR {depositAmount.toFixed(2)}
                  </span>
                )}
              </div>
            )}

            <div className="flex justify-between font-semibold mt-2 pt-2 border-t text-base">
              <p className="text-black text-left">TOTAL</p>
              <span className="ml-10">LKR {finalAmount.toFixed(2)}</span>
            </div>
          </div>

          {showFields?.estimateSummary && (
            <div className="mt-6 text-right">
              <p className="font-semibold text-black text-sm">Estimate Summary</p>
              <div className="border-t mt-2 pt-2">
                {/* Estimate Row */}
                <div className="flex justify-between items-center">
                  {editEstimateLabel ? (
                    <input
                      value={estimateLabel}
                      onChange={(e) => setEstimateLabel(e.target.value)}
                      onBlur={() => setEditEstimateLabel(false)}
                      onKeyDown={(e) => e.key === "Enter" && setEditEstimateLabel(false)}
                      className="text-left border rounded px-1 w-48 text-xs"
                      autoFocus
                    />
                  ) : (
                    <p
                      className="text-gray-600 text-left cursor-pointer"
                      onClick={() => setEditEstimateLabel(true)}
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
                      className="ml-10 text-right border rounded px-1 w-24 text-xs"
                      autoFocus
                    />
                  ) : (
                    <span
                      className="ml-10 cursor-pointer"
                      onClick={() => setEditEstimateAmount(true)}
                    >
                      LKR {estimateAmount.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Invoice Row */}
                <div className="flex justify-between items-center mt-2">
                  {editInvoiceLabel ? (
                    <input
                      value={invoiceLabel}
                      onChange={(e) => setInvoiceLabel(e.target.value)}
                      onBlur={() => setEditInvoiceLabel(false)}
                      onKeyDown={(e) => e.key === "Enter" && setEditInvoiceLabel(false)}
                      className="text-left border rounded px-1 w-48 text-xs"
                      autoFocus
                    />
                  ) : (
                    <p
                      className="text-gray-600 text-left cursor-pointer"
                      onClick={() => setEditInvoiceLabel(true)}
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
                      className="ml-10 text-right border rounded px-1 w-24 text-xs"
                      autoFocus
                    />
                  ) : (
                    <span
                      className="ml-10 cursor-pointer"
                      onClick={() => setEditInvoiceAmount(true)}
                    >
                      LKR {invoiceAmount.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* This Invoice Row */}
                <div className="flex justify-between items-center mt-2">
                  {editThisInvoiceLabel ? (
                    <input
                      value={thisInvoiceLabel}
                      onChange={(e) => setThisInvoiceLabel(e.target.value)}
                      onBlur={() => setEditThisInvoiceLabel(false)}
                      onKeyDown={(e) => e.key === "Enter" && setEditThisInvoiceLabel(false)}
                      className="text-left border rounded px-1 w-48 text-xs"
                      autoFocus
                    />
                  ) : (
                    <p
                      className="text-gray-600 text-left cursor-pointer"
                      onClick={() => setEditThisInvoiceLabel(true)}
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
                      className="ml-10 text-right border rounded px-1 w-24 text-xs"
                      autoFocus
                    />
                  ) : (
                    <span
                      className="ml-10 cursor-pointer"
                      onClick={() => setEditThisInvoiceAmount(true)}
                    >
                      LKR {thisInvoiceAmount.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Total Summary */}
                <div className="flex justify-between font-semibold mt-2 text-sm">
                  <p className="text-black text-left">Total Invoiced</p>
                  <span className="ml-10">
                    LKR {(estimateAmount + invoiceAmount + thisInvoiceAmount).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 text-sm" style={{ backgroundColor: selectedColor }}>
        <div className="p-2 text-gray-700 font-semibold">{paymentDetails}</div>
        <div className="text-gray-500 text-xs mt-6">{footerText}</div>
      </div>
    </div>
  );
}

export default InvoiceFooter;
