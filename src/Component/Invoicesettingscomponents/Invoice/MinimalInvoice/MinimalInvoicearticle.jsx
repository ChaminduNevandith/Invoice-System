import { useState } from "react";
import { Delete } from "@mui/icons-material";

function MinimalInvoiceArticle({ articleData, selectedColor }) {
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
    <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm mt-6">
      {selectedColumns.showInvoice && (
        <>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr
                className="text-left text-gray-700 border-b border-gray-300"
                style={{ backgroundColor: selectedColor }}
              >
                {selectedColumns.Date && <th className="p-3">Date</th>}
                {selectedColumns["Product/Services"] && <th className="p-3">Product/Services</th>}
                {selectedColumns.Description && <th className="p-3">Description</th>}
                {selectedColumns.Quantity && <th className="p-3">Qty</th>}
                {selectedColumns.Rate && <th className="p-3">Rate</th>}
                {selectedColumns.Amount && <th className="p-3">Amount</th>}
                {selectedColumns.SKU && <th className="p-3">SKU</th>}
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoiceItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                  {selectedColumns.Date && <td className="p-3">01/01/2024</td>}
                  {selectedColumns["Product/Services"] && <td className="p-3">{item.item}</td>}
                  {selectedColumns.Description && <td className="p-3">High-quality cap</td>}
                  {selectedColumns.Quantity && <td className="p-3">{item.quantity}</td>}
                  {selectedColumns.Rate && <td className="p-3">{item.rate}</td>}
                  {selectedColumns.Amount && <td className="p-3">{item.total}</td>}
                  {selectedColumns.SKU && <td className="p-3">12345-XYZ</td>}
                  <td className="p-3 text-center">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default MinimalInvoiceArticle;
