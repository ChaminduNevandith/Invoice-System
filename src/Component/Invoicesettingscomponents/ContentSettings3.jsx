import React from "react";
import { Card, CardContent, Checkbox, TextField } from "@mui/material";

export default function ContentSettings3({ footerData, updateFooterData, toggleFooterFieldVisibility }) {
  return (
    <div className="w-[400px] shadow-lg rounded-lg border p-2">
      <Card className="mt-4">
        <CardContent className="p-4">
          <h2 className="font-bold text-lg flex items-center gap-2">Footer</h2>
          
          <p className="text-gray-600">Display</p>
          <div className="flex flex-col gap-2 mb-4">
            {["discounts", "deposit", "estimateSummary"].map((key) => (
              <div key={key} className="flex items-center gap-2">
                <Checkbox
                  checked={footerData.showFields[key]}
                  onChange={() => toggleFooterFieldVisibility(key)}
                />
                <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              </div>
            ))}
          </div>

          <h3 className="font-semibold text-md">Message to customer</h3>
          <TextField
            fullWidth
            variant="outlined"
            value={footerData.notes}
            onChange={(e) => updateFooterData("notes", e.target.value)}
          />

          <h3 className="font-semibold text-md">Your payment details</h3>
          <TextField
            fullWidth
            variant="outlined"
            value={footerData.paymentDetails}
            onChange={(e) => updateFooterData("paymentDetails", e.target.value)}
          />

          <h3 className="font-semibold text-md">Add footer text</h3>
          <TextField
            fullWidth
            variant="outlined"
            value={footerData.footerText}
            onChange={(e) => updateFooterData("footerText", e.target.value)}
          />
        </CardContent>
      </Card>
    </div>
  );
}
