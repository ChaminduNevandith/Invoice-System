import React from "react";
import Invoicehader from "./Invoice/Invoicehader";
import Invoicearticle from "./Invoice/Invoicearticle";
import InvoiceFooter from "./Invoice/InvoiceFooter";

function EditInvoice() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <div className="bg-white p-6 rounded-md shadow-md w-full ">
        <Invoicehader/>
        <Invoicearticle/>
        <InvoiceFooter/>
      </div>
    </div>
  );
}

export default EditInvoice;
