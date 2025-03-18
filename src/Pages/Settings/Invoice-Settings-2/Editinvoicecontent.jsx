import React, { useState } from "react";
import Invoicehader from "../../../Component/Invoicesettingscomponents/Invoice/Invoicehader";
import Invoicearticle from "../../../Component/Invoicesettingscomponents/Invoice/Invoicearticle";
import InvoiceFooter from "../../../Component/Invoicesettingscomponents/Invoice/InvoiceFooter";
import Contentsettings from "../../../Component/Invoicesettingscomponents/Contentsettings";
import ContentSettings2 from "../../../Component/Invoicesettingscomponents/ContentSettings2";
import ContentSettings3 from "../../../Component/Invoicesettingscomponents/ContentSettings3";

function EditInvoice() {
  const [selectedSection, setSelectedSection] = useState("header");

  // State for Invoice Header, Article, and Footer
  const [headerData, setHeaderData] = useState({
    businessName: "charmindu",
    phone: "+0725422146",
    email: "cnewa@gmail.com",
    address: "www.asipiya.lk",
    companyReg: "",
    website: "",
    billTo: "Smith Co. 123 Main Street City, CA 12345",
    shipTo: " John Smith 20637 Palm Drive City, CA 12345",
    terms: " John Smith 20637 Palm Drive City, CA 12345",
    paymentMethod : "Cash",
    InvoiceId : "12341",
    dueDate : "2025/09/10",
    
    
    showFields: {
      businessName: true,
      phone: true,
      email: true,
      address: true,
      companyReg: false,
      website: false,
      billingAddress: true,
      shipping: true,
      terms: true,
      dueDate: true,
      paymentMethod: true,
    },
  });

  const [articleData, setArticleData] = useState({
    items: [],
    terms: "",
  });

  const [footerData, setFooterData] = useState({
    notes: "",
    paymentDetails: "",
  });

  // Functions to update the respective states
  const updateHeaderData = (field, value) => {
    setHeaderData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleHeaderFieldVisibility = (field) => {
    setHeaderData((prev) => ({
      ...prev,
      showFields: {
        ...prev.showFields,
        [field]: !prev.showFields[field],
      },
    }));
  };

  const updateArticleData = (field, value) => {
    setArticleData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateFooterData = (field, value) => {
    setFooterData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Function to determine blur and dim effect
  const getSectionStyle = (section) => {
    return selectedSection !== section
      ? "opacity-50 blur-[30] transition-all duration-300"
      : "opacity-100";
  };

  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <div className="bg-white p-6 rounded-md shadow-md w-full flex flex-row justify-between">
        {/* Conditional Rendering of Content Settings */}
        <div className="w-1/3">
          {selectedSection === "header" && (
            <Contentsettings
              headerData={headerData}
              updateHeaderData={updateHeaderData}
              toggleFieldVisibility={toggleHeaderFieldVisibility}
            />
          )}
          {selectedSection === "article" && (
            <ContentSettings2
              articleData={articleData}
              updateArticleData={updateArticleData}
            />
          )}
          {selectedSection === "footer" && (
            <ContentSettings3
              footerData={footerData}
              updateFooterData={updateFooterData}
            />
          )}
        </div>

        {/* Invoice Sections */}
        <div className="w-[900px]">
          <div
            onClick={() => setSelectedSection("header")}
            className={`cursor-pointer ${getSectionStyle("header")}`}
          >
            <Invoicehader headerData={headerData} />
          </div>
          <div
            onClick={() => setSelectedSection("article")}
            className={`cursor-pointer ${getSectionStyle("article")}`}
          >
            <Invoicearticle articleData={articleData} />
          </div>
          <div
            onClick={() => setSelectedSection("footer")}
            className={`cursor-pointer ${getSectionStyle("footer")}`}
          >
            <InvoiceFooter footerData={footerData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditInvoice;
