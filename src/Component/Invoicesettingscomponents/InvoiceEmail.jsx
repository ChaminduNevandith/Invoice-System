import { useState } from "react";
import InvoiceNav from "./InvoiceNav";

export default function InvoiceEmail() {
  const [salesFormType, setSalesFormType] = useState("Invoice");
  const [emailSubject, setEmailSubject] = useState("Invoice [Invoice No.] from chamindu");
  const [message, setMessage] = useState(
    "We appreciate your business. Please find your invoice details here. Feel free to contact us if you have any questions.\n\nHave a great day!\nchamindu"
  );
  
  return (
    <div className="w-[400px] shadow-lg rounded-lg border p-2">

      <InvoiceNav/>
      <div className="p-4">
      <h2 className="text-lg font-semibold">Sales form type</h2>
      <select 
        className="w-full p-2 border rounded mt-1" 
        value={salesFormType} 
        onChange={(e) => setSalesFormType(e.target.value)}
      >
        <option>Invoice</option>
      </select>
      
      <h3 className="mt-4 font-medium">How your invoice appears in emails</h3>
      <div className="mt-2 space-y-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Full Details</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Summarised details</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>PDF Attachments</span>
        </label>
      </div>
      
      <h3 className="mt-4 font-medium">Standard email</h3>
      <p className="text-sm text-gray-600">Edit the email your customers get with every sent form</p>
      <select className="w-full p-2 border rounded mt-1">
        <option>Invoice</option>
      </select>
      
      <input 
        type="text" 
        className="w-full p-2 border rounded mt-2" 
        value={emailSubject} 
        onChange={(e) => setEmailSubject(e.target.value)}
      />
      
      <label className="flex items-center space-x-2 mt-3">
        <input type="checkbox" className="form-checkbox" />
        <span>Using greetings</span>
        <select className="p-1 border rounded">
          <option>Invoice</option>
        </select>
        <select className="p-1 border rounded">
          <option>[FULL NAME]</option>
        </select>
      </label>
      
      <h3 className="mt-4 font-medium">Message to Customer</h3>
      <textarea 
        className="w-full p-2 border rounded mt-1" 
        rows="4" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      
      <h3 className="mt-4 font-medium text-blue-600">Reminder email</h3>
    </div>
    </div>
  );
}
