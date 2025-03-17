import React from "react";
import Invoicehader from "../../../Component/Invoicesettingscomponents/Invoice/Invoicehader";
import Invoicearticle from "../../../Component/Invoicesettingscomponents/Invoice/Invoicearticle";
import InvoiceFooter from "../../../Component/Invoicesettingscomponents/Invoice/InvoiceFooter";
import Menuitems from "../../../Component/Invoicesettingscomponents/MenuItems"
import Contentsettings from "../../../Component/Invoicesettingscomponents/Contentsettings";
import ContentSettings2 from "../../../Component/Invoicesettingscomponents/ContentSettings2";
import ContentSettings3 from "../../../Component/Invoicesettingscomponents/ContentSettings3";
import InvoiceNav from "../../../Component/Invoicesettingscomponents/InvoiceNav";
import DisplayInvoiceEmail from "../../../Component/Invoicesettingscomponents/DisplayInvoiceEmail/DisplayInvoiceEmail";

function EditInvoice() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <div className="bg-white p-6 rounded-md shadow-md w-full flex flex-row justify-between ">
        <Contentsettings/>
        <div className="w-[900px]">
        <Invoicehader/>
        <Invoicearticle/>
        <InvoiceFooter/>
        </div>
      </div>
    </div>
  );
}

export default EditInvoice;
