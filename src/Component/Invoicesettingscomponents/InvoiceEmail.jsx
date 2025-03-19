import InvoiceNav from "./InvoiceNav";

export default function InvoiceEmail({ 
  salesFormType, setSalesFormType,
  emailSubject, setEmailSubject,
  message, setMessage,
  useGreeting, setUseGreeting,
  greetingType, setGreetingType,
  customerName, setCustomerName,
  showFullDetails, setShowFullDetails,
  showSummary, setShowSummary,
  showPdf, setShowPdf
}) {
  return (
    <div className="w-[400px] shadow-lg rounded-lg border p-2">
      <InvoiceNav />
      <div className="p-4">
        {/* Sales Form Type */}
        <h2 className="text-lg font-semibold">Sales Form Type</h2>
        <select 
          className="w-full p-2 border rounded mt-1" 
          value={salesFormType} 
          onChange={(e) => setSalesFormType(e.target.value)}
        >
          <option>Invoice</option>
          <option>Estimate</option>
          <option>Sales Receipt</option>
          <option>Credit Note</option>
        </select>

        {/* Email Preferences */}
        <h3 className="mt-4 font-medium">How Your Invoice Appears in Emails</h3>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="form-checkbox" 
              checked={showFullDetails} 
              onChange={() => setShowFullDetails(!showFullDetails)} 
            />
            <span>Full Details</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="form-checkbox" 
              checked={showSummary} 
              onChange={() => setShowSummary(!showSummary)} 
            />
            <span>Summarized Details</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="form-checkbox" 
              checked={showPdf} 
              onChange={() => setShowPdf(!showPdf)} 
            />
            <span>PDF Attachments</span>
          </label>
        </div>

        {/* Standard Email */}
        <h3 className="mt-4 font-medium">Standard Email</h3>
        <p className="text-sm text-gray-600">Edit the email your customers receive.</p>
        <select className="w-full p-2 border rounded mt-1">
          <option>Invoice</option>
          <option>Estimate</option>
          <option>Sales Receipt</option>
          <option>Credit Note</option>
        </select>

        {/* Email Subject */}
        <input 
          type="text" 
          className="w-full p-2 border rounded mt-2" 
          value={emailSubject} 
          onChange={(e) => setEmailSubject(e.target.value)}
        />

        {/* Greeting Option */}
        <label className="flex items-center space-x-2 mt-3">
          <input 
            type="checkbox" 
            className="form-checkbox" 
            checked={useGreeting} 
            onChange={() => setUseGreeting(!useGreeting)} 
          />
          <span>Using Greetings</span>
          <select 
            className="p-1 border rounded"
            value={greetingType}
            onChange={(e) => setGreetingType(e.target.value)}
          >
            <option>Hello</option>
            <option>Dear</option>
            <option>Hi</option>
          </select>
          <select 
            className="p-1 border rounded"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          >
            <option>[FULL NAME]</option>
            <option>[FIRST NAME]</option>
            <option>[LAST NAME]</option>
          </select>
        </label>

        {/* Message to Customer */}
        <h3 className="mt-4 font-medium">Message to Customer</h3>
        <textarea 
          className="w-full p-2 border rounded mt-1" 
          rows="4" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/* Reminder Email */}
        <h3 className="mt-4 font-medium text-blue-600">Reminder Email</h3>
      </div>
    </div>
  );
}
