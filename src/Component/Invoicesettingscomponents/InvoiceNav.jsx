import React from "react";
import { NavLink } from "react-router-dom";

function InvoiceNav() {
  return (
    <div>
      <div className="flex">
        <NavLink
          to="/EditInvoice"
          className={({ isActive }) =>
            `flex-1 py-2 font-semibold text-center ${
              isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700"
            }`
          }
        >
          Design
        </NavLink>

        <NavLink
          to="/Editinvoicecontent"
          className={({ isActive }) =>
            `flex-1 py-2 font-semibold text-center ${
              isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700"
            }`
          }
        >
          Content
        </NavLink>

        <NavLink
          to="/EditinvoiceEmail"
          className={({ isActive }) =>
            `flex-1 py-2 font-semibold text-center ${
              isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700"
            }`
          }
        >
          Email
        </NavLink>
      </div>
    </div>
  );
}

export default InvoiceNav;
