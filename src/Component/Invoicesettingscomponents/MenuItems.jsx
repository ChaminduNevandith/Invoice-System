import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import InvoiceNav from "./InvoiceNav";

const menuItems = [
  { title: "Change Up the Template", icon: "📜" },
  { title: "Make Logo Edits", icon: "🖼️" },
  { title: "Try Another Colours", icon: "🎨" },
  { title: "Edit Print Settings", icon: "🖨️" }
];

export default function DesignNav() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="w-[400px] shadow-lg rounded-lg border p-2">
      <InvoiceNav/>
      <div className="p-4">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-2">
            <button
              className="flex items-center w-full p-3 border rounded-lg shadow-sm bg-white hover:bg-gray-100"
              onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
            >
              <span className="mr-2 text-xl">{item.icon}</span>
              <span className="flex-1 text-left">{item.title}</span>
              <ExpandMore className={`w-4 h-4 transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === index && (
              <div className="mt-2 p-2 bg-gray-100 rounded-md text-sm">Options for {item.title}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
