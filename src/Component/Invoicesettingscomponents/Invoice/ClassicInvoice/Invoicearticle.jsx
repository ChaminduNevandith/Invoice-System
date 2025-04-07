import { useState, useEffect } from "react";
import { Delete, Add } from "@mui/icons-material";

function Invoicearticle({ articleData, selectedColor }) {
  const [invoiceItems, setInvoiceItems] = useState(() => {
    const savedItems = localStorage.getItem("invoiceItems");
    return savedItems ? JSON.parse(savedItems) : [
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
    ];
  });

  const [editing, setEditing] = useState(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    localStorage.setItem("invoiceItems", JSON.stringify(invoiceItems));
    // Notify parent component of changes
    window.dispatchEvent(new Event('storage'));
  }, [invoiceItems]);

  const handleInputChange = (id, field, value) => {
    setInvoiceItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            [field]: value,
          };
  
          const quantity = field === "quantity" ? Number(value) : item.quantity;
          const rate = field === "rate" ? Number(value) : item.rate;
          updatedItem.amount = quantity * rate;
  
          return updatedItem;
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setInvoiceItems((prevItems) => prevItems.filter((item) => item.id !== id));
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

  const selectedColumns = articleData?.selectedColumns || {
    showInvoice: true,
    Date: true,
    "Product/Services": true,
    Description: true,
    Quantity: true,
    Rate: true,
    Amount: true,
    SKU: true,
  };

  if (!selectedColumns.showInvoice) {
    return null;
  }

  return (
    <div
      className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm mt-6 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
            {selectedColumns.Action && <th className="p-3 text-center">Action</th>}
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

              {selectedColumns["Product/Services"] && (
                <td className="p-3">
                  {editing?.id === item.id && editing.field === "item" ? (
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={item.item}
                      onChange={(e) => handleInputChange(item.id, "item", e.target.value)}
                      onBlur={handleBlur}
                      onKeyPress={handleKeyPress}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => handleEdit(item.id, "item")}>
                      {item.item || "Click to enter"}
                    </span>
                  )}
                </td>
              )}

              {selectedColumns.Description && (
                <td className="p-3">
                  {editing?.id === item.id && editing.field === "description" ? (
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={item.description}
                      onChange={(e) => handleInputChange(item.id, "description", e.target.value)}
                      onBlur={handleBlur}
                      onKeyPress={handleKeyPress}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => handleEdit(item.id, "description")}>
                      {item.description || "Click to enter"}
                    </span>
                  )}
                </td>
              )}

              {selectedColumns.Quantity && (
                <td className="p-3">
                  {editing?.id === item.id && editing.field === "quantity" ? (
                    <input
                      type="number"
                      className="w-full p-1 border rounded"
                      value={item.quantity}
                      onChange={(e) => handleInputChange(item.id, "quantity", Number(e.target.value))}
                      onBlur={handleBlur}
                      onKeyPress={handleKeyPress}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => handleEdit(item.id, "quantity")}>
                      {item.quantity || "Click to enter"}
                    </span>
                  )}
                </td>
              )}

              {selectedColumns.Rate && (
                <td className="p-3">
                  {editing?.id === item.id && editing.field === "rate" ? (
                    <input
                      type="number"
                      className="w-full p-1 border rounded"
                      value={item.rate}
                      onChange={(e) => handleInputChange(item.id, "rate", Number(e.target.value))}
                      onBlur={handleBlur}
                      onKeyPress={handleKeyPress}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => handleEdit(item.id, "rate")}>
                      {item.rate || "Click to enter"}
                    </span>
                  )}
                </td>
              )}

              {selectedColumns.Amount && (
                <td className="p-3">{item.amount}</td>
              )}

              {selectedColumns.SKU && (
                <td className="p-3">
                  {editing?.id === item.id && editing.field === "sku" ? (
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={item.sku}
                      onChange={(e) => handleInputChange(item.id, "sku", e.target.value)}
                      onBlur={handleBlur}
                      onKeyPress={handleKeyPress}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => handleEdit(item.id, "sku")}>
                      {item.sku || "Click to enter"}
                    </span>
                  )}
                </td>
              )}




{selectedColumns.Action && (
  <td className="p-3 text-center">
    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(item.id)}>
      <Delete />
    </button>
  </td>
)}

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
    </div>
  );
}

export default Invoicearticle;