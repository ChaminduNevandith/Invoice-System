import { useState } from "react";
import { Card, CardContent, Checkbox } from "@mui/material";
import InvoiceNav from "./InvoiceNav";

export default function ContentSettings2({ articleData, updateArticleData }) {
  const [selected, setSelected] = useState({
    showInvoice: true,
    Date: true,
    "Product/Services": true,
    Description: true,
    Quantity: true,
    Rate: true,
    Amount: true,
    SKU: true,
  });

  const toggleSelection = (key) => {
    setSelected((prev) => {
      const newState = { ...prev, [key]: !prev[key] };
      updateArticleData("selectedColumns", newState); // Update parent state
      return newState;
    });
  };

  return (
    <div className="w-[400px] shadow-lg rounded-lg border p-2">
      <InvoiceNav />

      <Card className="mt-4">
        <CardContent className="p-4">
          <h2 className="font-bold text-lg flex items-center gap-2">Table</h2>
          <p className="text-gray-600">Account summary</p>
          <p className="text-sm text-gray-500 mb-2">
            Account summary shows your transaction history for a customer's
            account. It includes: Balance Forward, Payments and Credits, New
            Charges, Total Amount Due.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <Checkbox checked={selected.showInvoice} onChange={() => toggleSelection("showInvoice")} />
            <label>Show on invoice</label>
          </div>

          {selected.showInvoice && (
            <>
              <h3 className="font-semibold text-md mt-4">Activity table</h3>
              <p className="text-gray-500 text-sm">COLUMNS</p>

              {[
                "Date",
                "Product/Services",
                "Description",
                "Quantity",
                "Rate",
                "Amount",
                "SKU",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 my-2">
                  <Checkbox checked={selected[item]} onChange={() => toggleSelection(item)} />
                  <label>{item}</label>
                </div>
              ))}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}