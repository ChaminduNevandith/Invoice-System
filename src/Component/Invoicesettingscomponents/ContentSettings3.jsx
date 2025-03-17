import { useState } from "react";
import { Card, CardContent, Button, Checkbox, TextField } from "@mui/material";
import InvoiceNav from "./InvoiceNav";

export default function ContentSettings3() {
  const [selected, setSelected] = useState({});

  const toggleSelection = (key) => {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-[400px] shadow-lg rounded-lg border  jus">
      <InvoiceNav/>
      <Card className="mt-4">
        <CardContent className="p-4">
          <h2 className="font-bold text-lg flex items-center gap-2">Footer</h2>
          <p className="text-gray-600">Display</p>
          <div className="flex flex-col gap-2 mb-4">
            {["Discounts", "Deposit", "Estimate Summary"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Checkbox onChange={() => toggleSelection(item)} />
                <label>{item}</label>
              </div>
            ))}
          </div>

          <h3 className="font-semibold text-md">Message to customer</h3>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue="cnewa@gmail.com"
            className="mb-2"
          />

          <h3 className="font-semibold text-md">Your payment details</h3>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue="cnewa@gmail.com"
            className="mb-2"
          />

          <h3 className="font-semibold text-md">Add footer text</h3>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue="cnewa@gmail.com"
          />
        </CardContent>
      </Card>
    </div>
  );
}
