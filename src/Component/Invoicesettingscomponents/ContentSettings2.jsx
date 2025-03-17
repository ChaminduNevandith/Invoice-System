import { useState } from "react";
import { Card, CardContent, Button, Checkbox } from "@mui/material";
import InvoiceNav from "./InvoiceNav";

export default function ContentSettings2() {
  const [selected, setSelected] = useState({});

  const toggleSelection = (key) => {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-[400px] shadow-lg rounded-lg border">
     <InvoiceNav/>

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
            <Checkbox onChange={() => toggleSelection("showInvoice")} />
            <label>Show on invoice</label>
          </div>

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
              <Checkbox onChange={() => toggleSelection(item)} />
              <label>{item}</label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
