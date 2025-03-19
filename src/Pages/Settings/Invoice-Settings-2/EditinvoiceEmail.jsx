import React, { useState } from "react";
import InvoiceEmail from "../../../Component/Invoicesettingscomponents/InvoiceEmail";
import DisplayInvoiceEmail from "../../../Component/Invoicesettingscomponents/DisplayInvoiceEmail/DisplayInvoiceEmail";

function EditinvoiceEmail() {
  // State for email fields
  const [salesFormType, setSalesFormType] = useState("Invoice");
  const [emailSubject, setEmailSubject] = useState("Invoice [Invoice No.] from chamindu");
  const [message, setMessage] = useState(
    "We appreciate your business. Please find your invoice details here. Feel free to contact us if you have any questions.\n\nHave a great day!\nchamindu"
  );
  
  // Additional states for Greetings & Preferences
  const [useGreeting, setUseGreeting] = useState(false);
  const [greetingType, setGreetingType] = useState("Hello");
  const [customerName, setCustomerName] = useState("[FULL NAME]");
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <div className="bg-white p-6 rounded-md shadow-md w-full flex flex-row justify-between">
        {/* Invoice Email Editor */}
        <InvoiceEmail 
          salesFormType={salesFormType} setSalesFormType={setSalesFormType}
          emailSubject={emailSubject} setEmailSubject={setEmailSubject}
          message={message} setMessage={setMessage}
          useGreeting={useGreeting} setUseGreeting={setUseGreeting}
          greetingType={greetingType} setGreetingType={setGreetingType}
          customerName={customerName} setCustomerName={setCustomerName}
          showFullDetails={showFullDetails} setShowFullDetails={setShowFullDetails}
          showSummary={showSummary} setShowSummary={setShowSummary}
          showPdf={showPdf} setShowPdf={setShowPdf}
        />

        {/* Display Updated Email */}
        <div className="w-[900px]">
          <DisplayInvoiceEmail 
            salesFormType={salesFormType}
            emailSubject={emailSubject}
            message={message}
            useGreeting={useGreeting}
            greetingType={greetingType}
            customerName={customerName}
            showFullDetails={showFullDetails}
            showSummary={showSummary}
            showPdf={showPdf}
          />
        </div>
      </div>
    </div>
  );
}

export default EditinvoiceEmail;
