import React, { useState } from "react";

function MinimalInvoiceFooter({ footerData, selectedColor, totalAmount = 0 }) {
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
    <div className="p-6 border-t border-gray-200 mt-6 text-gray-700 bg-white rounded-lg text-sm">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold text-blue-700 text-sm">{notes}</p>
        </div>

        <div className="text-right space-y-2">
          <div className="flex justify-between text-gray-600 text-xs">
            <p className="font-semibold">SUBTOTAL</p>
            <span>LKR {safeTotalAmount.toFixed(2)}</span>
          </div>

          {showFields?.discounts && (
            <div className="flex justify-between items-center text-gray-600 text-xs">
              <p className="font-semibold">DISCOUNT {discount}%</p>
              {isEditingDiscount ? (
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value))}
                  onBlur={() => setIsEditingDiscount(false)}
                  onKeyDown={(e) => e.key === "Enter" && setIsEditingDiscount(false)}
                  className="w-20 border rounded px-1 py-0.5 text-right text-xs"
                  autoFocus
                />
              ) : (
                <span
                  className="cursor-pointer"
                  onClick={() => setIsEditingDiscount(true)}
                  title="Click to edit"
                >
                  -LKR {discountAmount.toFixed(2)}
                </span>
              )}
            </div>
          )}

          {showFields?.deposit && (
            <div className="flex justify-between items-center text-gray-600 text-xs">
              <p className="font-semibold">DEPOSIT</p>
              {isEditingDeposit ? (
                <input
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  onBlur={() => setIsEditingDeposit(false)}
                  onKeyDown={(e) => e.key === "Enter" && setIsEditingDeposit(false)}
                  className="w-20 border rounded px-1 py-0.5 text-right text-xs"
                  autoFocus
                />
              ) : (
                <span
                  className="cursor-pointer"
                  onClick={() => setIsEditingDeposit(true)}
                  title="Click to edit"
                >
                  LKR {depositAmount.toFixed(2)}
                </span>
              )}
            </div>
          )}

          <div className="flex justify-between font-semibold pt-2 border-t text-gray-800 text-sm">
            <p>TOTAL</p>
            <span>LKR {finalAmount.toFixed(2)}</span>
          </div>

          {showFields?.estimateSummary && (
            <div className="mt-6 bg-green-50 p-4 rounded-lg text-xs">
              <p className="font-semibold text-green-800 text-sm">Estimate Summary</p>
              <div className="border-t mt-2 pt-2 space-y-2">
                {[{
                  label: estimateLabel, amount: estimateAmount,
                  onEditLabel: setEditEstimateLabel, editingLabel: editEstimateLabel, onLabelChange: setEstimateLabel,
                  onEditAmount: setEditEstimateAmount, editingAmount: editEstimateAmount, onAmountChange: setEstimateAmount
                }, {
                  label: invoiceLabel, amount: invoiceAmount,
                  onEditLabel: setEditInvoiceLabel, editingLabel: editInvoiceLabel, onLabelChange: setInvoiceLabel,
                  onEditAmount: setEditInvoiceAmount, editingAmount: editInvoiceAmount, onAmountChange: setInvoiceAmount
                }, {
                  label: thisInvoiceLabel, amount: thisInvoiceAmount,
                  onEditLabel: setEditThisInvoiceLabel, editingLabel: editThisInvoiceLabel, onLabelChange: setThisInvoiceLabel,
                  onEditAmount: setEditThisInvoiceAmount, editingAmount: editThisInvoiceAmount, onAmountChange: setThisInvoiceAmount
                }].map(({ label, amount, onEditLabel, editingLabel, onLabelChange, onEditAmount, editingAmount, onAmountChange }, idx) => (
                  <div key={idx} className="flex justify-between items-center text-gray-600">
                    {editingLabel ? (
                      <input
                        value={label}
                        onChange={(e) => onLabelChange(e.target.value)}
                        onBlur={() => onEditLabel(false)}
                        onKeyDown={(e) => e.key === "Enter" && onEditLabel(false)}
                        className="text-left border rounded px-1 w-44 text-xs"
                        autoFocus
                      />
                    ) : (
                      <p
                        className="font-semibold cursor-pointer"
                        onClick={() => onEditLabel(true)}
                        title="Click to edit"
                      >
                        {label}
                      </p>
                    )}
                    {editingAmount ? (
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => onAmountChange(Number(e.target.value))}
                        onBlur={() => onEditAmount(false)}
                        onKeyDown={(e) => e.key === "Enter" && onEditAmount(false)}
                        className="text-right border rounded px-1 w-20 text-xs"
                        autoFocus
                      />
                    ) : (
                      <span
                        className="cursor-pointer"
                        onClick={() => onEditAmount(true)}
                        title="Click to edit"
                      >
                        LKR {amount.toFixed(2)}
                      </span>
                    )}
                  </div>
                ))}

                <div className="flex justify-between font-semibold text-gray-800 pt-2 border-t text-sm">
                  <p>Total Invoiced</p>
                  <span>
                    LKR {(estimateAmount + invoiceAmount + thisInvoiceAmount).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Details Section */}
      <div className="mt-6 p-4 rounded-lg text-sm" style={{ backgroundColor: selectedColor }}>
        <p className="font-semibold text-white">{paymentDetails}</p>
        <p className="text-xs mt-1 text-white">{footerText}</p>
      </div>
    </div>
  );
}

export default MinimalInvoiceFooter;
