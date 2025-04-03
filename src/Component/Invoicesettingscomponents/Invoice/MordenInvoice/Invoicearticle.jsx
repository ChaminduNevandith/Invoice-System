import { useState, useEffect } from "react";
import { Delete, Add } from "@mui/icons-material";

function InvoiceArticle({ articleData, selectedColor }) {
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

  // Define columns with their corresponding keys from selectedColumns
  const columns = [
    { key: "date", label: "Date", editable: true, settingKey: "Date" },
    { key: "item", label: "Product/Services", editable: true, settingKey: "Product/Services" },
    { key: "description", label: "Description", editable: true, settingKey: "Description" },
    { key: "quantity", label: "Quantity", editable: true, settingKey: "Quantity" },
    { key: "rate", label: "Rate", editable: true, settingKey: "Rate" },
    { key: "amount", label: "Amount", editable: false, settingKey: "Amount" },
    { key: "sku", label: "SKU", editable: true, settingKey: "SKU" },
  ];

  // Get selectedColumns from articleData or use defaults
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

  // Save invoice items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("invoiceItems", JSON.stringify(invoiceItems));
  }, [invoiceItems]);

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
    setInvoiceItems((prevItems) => prevItems.filter((item) => item.id !== id));
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

  const addRow = () => {
    const newId = Date.now();
    setInvoiceItems([
      ...invoiceItems,
      {
        id: newId,
        date: "2024-01-01",
        item: "",
        description: "",
        quantity: 1,
        rate: 0,
        amount: 0,
        sku: "",
      },
    ]);
  };

  // Don't render if showInvoice is false
  if (!selectedColumns.showInvoice) {
    return null;
  }

  return (
    <div
      className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md mt-6 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <table className="w-full border-collapse rounded-lg overflow-hidden">
        <thead>
          <tr className="text-left text-gray-800" style={{ backgroundColor: selectedColor }}>
            {columns.map((col) => (
              selectedColumns[col.settingKey] && (
                <th key={col.key} className="p-3">{col.label}</th>
              )
            ))}
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((item) => (
            <tr key={item.id} className="border-t bg-white hover:bg-gray-100">
              {columns.map((col) => (
                selectedColumns[col.settingKey] && (
                  <td key={col.key} className="p-3">
                    {editing?.id === item.id && editing.field === col.key ? (
                      <input
                        type={col.key === "quantity" || col.key === "rate" ? "number" : "text"}
                        className="w-full p-1 border rounded"
                        value={item[col.key] || ""}
                        onChange={(e) =>
                          handleInputChange(
                            item.id,
                            col.key,
                            col.key === "quantity" || col.key === "rate" ? Number(e.target.value) : e.target.value
                          )
                        }
                        onBlur={handleBlur}
                        onKeyPress={handleKeyPress}
                        autoFocus
                      />
                    ) : (
                      <span onClick={() => col.editable && handleEdit(item.id, col.key)}>
                        {item[col.key] || "Click to enter"}
                      </span>
                    )}
                  </td>
                )
              ))}
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
    </div>
  );
}

export default InvoiceArticle;