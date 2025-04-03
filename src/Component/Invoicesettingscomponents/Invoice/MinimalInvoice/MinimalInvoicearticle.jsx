import { useState } from "react";
import { Delete, Add } from "@mui/icons-material";

function MinimalInvoiceArticle({ articleData, selectedColor }) {
  const [invoiceItems, setInvoiceItems] = useState([
    {
      id: 1,
      date: "2024-01-01",
      item: "Cap",
      description: "High-quality cap",
      quantity: 2,
      rate: 280,
      amount: 560,
      sku: "12345-XYZ",
    },
  ]);

  const [editing, setEditing] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handleInputChange = (id, field, value) => {
    setInvoiceItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
              amount: field === "rate" || field === "quantity" ? item.quantity * item.rate : item.amount,
            }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setInvoiceItems(invoiceItems.filter((item) => item.id !== id));
  };

  const addRow = () => {
    setInvoiceItems([
      ...invoiceItems,
      {
        id: Date.now(),
        date: "",
        item: "",
        description: "",
        quantity: 1,
        rate: 0,
        amount: 0,
        sku: "",
      },
    ]);
  };

  const handleEdit = (id, field) => {
    setEditing({ id, field });
  };

  const handleBlur = () => {
    setEditing(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setEditing(null);
    }
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
    <div
      className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm mt-6 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {selectedColumns.showInvoice && (
        <>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="text-left text-gray-700 border-b border-gray-300" style={{ backgroundColor: selectedColor }}>
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
                  {selectedColumns.Date && (
                    <td className="p-3">
                      {editing?.id === item.id && editing.field === "date" ? (
                        <input
                          type="date"
                          className="w-full p-1 border rounded"
                          value={item.date}
                          onChange={(e) => handleInputChange(item.id, "date", e.target.value)}
                          onBlur={handleBlur}
                          onKeyPress={handleKeyPress}
                          autoFocus
                        />
                      ) : (
                        <span onClick={() => handleEdit(item.id, "date")}>{item.date || "Click to enter"}</span>
                      )}
                    </td>
                  )}

                  {["item", "description", "quantity", "rate", "sku"].map((field) => (
                    <td className="p-3" key={field}>
                      {editing?.id === item.id && editing.field === field ? (
                        <input
                          type={field === "quantity" || field === "rate" ? "number" : "text"}
                          className="w-full p-1 border rounded"
                          value={item[field]}
                          onChange={(e) =>
                            handleInputChange(item.id, field, field === "quantity" || field === "rate" ? Number(e.target.value) : e.target.value)
                          }
                          onBlur={handleBlur}
                          onKeyPress={handleKeyPress}
                          autoFocus
                        />
                      ) : (
                        <span onClick={() => handleEdit(item.id, field)}>
                          {item[field] || "Click to enter"}
                        </span>
                      )}
                    </td>
                  ))}

                  <td className="p-3">{item.amount}</td>

                  <td className="p-3 text-center">
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(item.id)}>
                      <Delete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {hovered && (
            <div className="flex justify-center mt-2">
              <button
                onClick={addRow}
                className="p-2 bg-blue-500 text-white rounded flex items-center gap-1"
              >
                <Add /> Add Row
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default MinimalInvoiceArticle;
