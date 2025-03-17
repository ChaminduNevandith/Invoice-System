import { useState } from "react";
import { Delete } from "@mui/icons-material"; // Import trash icon

function InvoiceArticle() {
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

  return (
    <div className="p-4 border border-gray-300 rounded-md bg-white">
      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-300 text-gray-700 text-left">
            <th className="p-2">Item</th>
            <th className="p-2">Rate</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Discount Type</th>
            <th className="p-2">Discount</th>
            <th className="p-2">Total (LKR)</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((item) => (
            <tr key={item.id} className="border-t bg-[#F8F8F8] border-gray-300">
              <td className="p-2">{item.item}</td>
              <td className="p-2">{item.rate}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">
                <input
                  type="text"
                  value={item.discountType}
                  className="border border-gray-400 px-2 py-1 w-10 text-center rounded"
                  readOnly
                />
              </td>
              <td className="p-2">
                <select className="border border-gray-400 px-2 py-1 rounded">
                  <option>%</option>
                  <option>Fixed</option>
                </select>
              </td>
              <td className="p-2">{item.total}</td>
              <td className="p-2 text-center">
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

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="border border-gray-400 px-4 py-2 rounded text-gray-600 hover:bg-gray-200">
          + Add New Product Category
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded text-gray-600 hover:bg-gray-200">
          + Add New Item
        </button>
      </div>
    </div>
  );
}

export default InvoiceArticle;
