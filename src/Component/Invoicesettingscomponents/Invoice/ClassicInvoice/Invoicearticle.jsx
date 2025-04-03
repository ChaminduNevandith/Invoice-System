import { useState } from "react";
import { Delete, Add } from "@mui/icons-material";

function InvoiceArticle({ articleData, selectedColor }) {
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

  return (
    <div
      className="p-4 border border-gray-300 rounded-md bg-white mt-6 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-300 text-gray-700" style={{ backgroundColor: selectedColor }}>
            <th className="p-2">Date</th>
            <th className="p-2">Product/Services</th>
            <th className="p-2">Description</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Rate</th>
            <th className="p-2">Amount</th>
            <th className="p-2">SKU</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((item) => (
            <tr key={item.id} className="border-t bg-[#F8F8F8] border-gray-300">
              <td className="p-2">
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

              {["item", "description", "quantity", "rate", "sku"].map((field) => (
                <td className="p-2" key={field}>
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

              <td className="p-2">{item.amount}</td>

              <td className="p-2 text-center">
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
