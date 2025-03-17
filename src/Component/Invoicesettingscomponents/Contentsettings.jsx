import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Description, Image, Palette, Print } from "@mui/icons-material";
import InvoiceNav from "./InvoiceNav";

const menuItems = [
  { title: "Change Up the Template", icon: <Description /> },
  { title: "Make Logo Edits", icon: <Image /> },
  { title: "Try Another Colours", icon: <Palette /> },
  { title: "Edit Print Settings", icon: <Print /> }
];

export default function Contentsettings() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="w-[400px] shadow-lg rounded-lg border p-2">
      <InvoiceNav/>
      <div className="p-4">
        <h2 className="text-lg font-bold">Header</h2>
        <div className="space-y-2">
          {[
            "Businesses Name",
            "Phone",
            "Email",
            "Businesses Address",
            "Company Registration Number",
            "Website",
          ].map((label, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <div className="flex-1">
                <label className="text-sm font-medium">{label}</label>
                <input type="text" className="w-full mt-1 p-2 border rounded" placeholder={label} />
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-4 text-lg font-bold">Form</h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4" />
            <span className="text-sm font-medium">Form Names</span>
          </div>
          {[
            "Invoice",
            "Estimate",
            "Sales receipt",
            "Credit Note",
          ].map((label, index) => (
            <input key={index} type="text" className="w-full p-2 border rounded" placeholder={label} />
          ))}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4" />
            <span className="text-sm font-medium">Form Numbers</span>
          </div>
          <a href="#" className="text-blue-600 text-sm">use Customer Transcript Number</a>
        </div>
        <h2 className="mt-4 text-lg font-bold">Display</h2>
        <div className="space-y-2">
          {["Billing address", "Shipping", "Terms", "Due date or expiration date", "Payment Method"].map((label, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
