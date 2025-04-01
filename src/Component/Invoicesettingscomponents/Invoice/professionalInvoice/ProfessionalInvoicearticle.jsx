import { useState, useEffect } from "react";
import { Delete } from "@mui/icons-material";

function ProfessionalInvoicearticle({ articleData , selectedColor  }) {
  const [invoiceItems, setInvoiceItems] = useState([
    {
      id: 1,
      item: "Cap",
      rate: 280,
      quantity: 2,
      discountType: "%",
      discount: 1,
      total: "6,500.00",
    },
  ]);

  const handleDelete = (id) => {
    setInvoiceItems(invoiceItems.filter((item) => item.id !== id));
  };

  // Ensure selectedColumns has a default value
  const selectedColumns = articleData?.selectedColumns ?? {
    showInvoice: true,
    Date: true,
    "Product/Services": true,
    Description: true,
    Quantity: true,
    Rate: true,
    Amount: true,
    SKU: true,
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md bg-white mt-6">
      {selectedColumns.showInvoice && (
        <>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-300 text-gray-700 text-left" style={{ backgroundColor: selectedColor }}>
                {selectedColumns.Date && <th className="p-2">Date</th>}
                {selectedColumns["Product/Services"] && <th className="p-2">Product/Services</th>}
                {selectedColumns.Description && <th className="p-2">Description</th>}
                {selectedColumns.Quantity && <th className="p-2">Quantity</th>}
                {selectedColumns.Rate && <th className="p-2">Rate</th>}
                {selectedColumns.Amount && <th className="p-2">Amount</th>}
                {selectedColumns.SKU && <th className="p-2">SKU</th>}
                <th className="p-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoiceItems.map((item) => (
                <tr key={item.id} className="border-t bg-[#F8F8F8] border-gray-300">
                  {selectedColumns.Date && <td className="p-2">01/01/2024</td>}
                  {selectedColumns["Product/Services"] && <td className="p-2">{item.item}</td>}
                  {selectedColumns.Description && <td className="p-2">High-quality cap</td>}
                  {selectedColumns.Quantity && <td className="p-2">{item.quantity}</td>}
                  {selectedColumns.Rate && <td className="p-2">{item.rate}</td>}
                  {selectedColumns.Amount && <td className="p-2">{item.total}</td>}
                  {selectedColumns.SKU && <td className="p-2">12345-XYZ</td>}
                  <td className="p-2 text-center">
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(item.id)}>
                      <Delete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="border border-gray-400 px-4 py-2 rounded text-gray-600 hover:bg-gray-200">
              + Add New Product Category
            </button>
            <button className="border border-gray-400 px-4 py-2 rounded text-gray-600 hover:bg-gray-200">
              + Add New Item
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfessionalInvoicearticle;
