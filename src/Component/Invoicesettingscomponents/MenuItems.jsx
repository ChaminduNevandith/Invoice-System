import { useState, useRef } from "react";
import { ExpandMore } from "@mui/icons-material";
import InvoiceNav from "./InvoiceNav";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const menuItems = [
  { title: "Change Up the Template", icon: "📜" },
  { title: "Make Logo Edits", icon: "🖼️" },
  { title: "Try Another Colours", icon: "🎨" },
  { title: "Edit Print Settings", icon: "🖨️" },
];

export default function DesignNav({ selectedColor, setSelectedColor, setSelectedTemplate, selectedTemplate }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [logos, setLogos] = useState([]);
  const [printSettings, setPrintSettings] = useState({
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  });
  const colors = ["#A7C7E7", "#FFB3A1", "#B5EAD7", "#C7CEEA", "#FFEBA9"];
  const invoiceRef = useRef();

  const handleThemeColorChange = (color) => setSelectedColor(color);

  const handleLogoUpload = (event) => {
    const files = Array.from(event.target.files);
    const newLogos = files.map((file) => ({
      id: URL.createObjectURL(file),
      file: file,
    }));
    setLogos((prevLogos) => [...prevLogos, ...newLogos]);
  };

  const handleLogoRemove = (id) => {
    setLogos((prevLogos) => prevLogos.filter((logo) => logo.id !== id));
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
  };

  const handlePrintSettingsChange = (field, value) => {
    setPrintSettings(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  const handlePrint = () => {
    const invoiceElement = document.getElementById('invoice-preview');
    
    if (!invoiceElement) {
      console.error("Invoice element not found");
      return;
    }

    html2canvas(invoiceElement, {
      scale: 2, // Higher quality
      logging: false,
      useCORS: true,
      allowTaint: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: invoiceElement.scrollWidth,
      windowHeight: invoiceElement.scrollHeight
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm'
      });

      // Calculate dimensions with margins
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = pageWidth - printSettings.left - printSettings.right;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = printSettings.top;
      
      pdf.addImage(imgData, 'PNG', printSettings.left, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', printSettings.left, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`${selectedTemplate}-invoice.pdf`);
    });
  };

  return (
    <div className="w-[400px] shadow-lg rounded-lg border p-2">
      <InvoiceNav selectedColor={selectedColor} />
      <div className="p-4">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-2">
            <button
              className="flex items-center w-full p-3 border rounded-lg shadow-sm bg-white hover:bg-gray-100"
              onClick={() =>
                setOpenDropdown(openDropdown === index ? null : index)
              }
            >
              <span className="mr-2 text-xl">{item.icon}</span>
              <span className="flex-1 text-left">{item.title}</span>
              <ExpandMore
                className={`w-4 h-4 transition-transform ${
                  openDropdown === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === index && (
              <div className="mt-2 p-2 bg-gray-100 rounded-md text-sm">
                {item.title === "Change Up the Template" && (
                  <div>
                    <p className="mb-2">Select a template:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        className="p-2 border rounded hover:bg-gray-200"
                        onClick={() => handleTemplateChange("Classic")}
                      >
                        Classic
                      </button>
                      <button
                        className="p-2 border rounded hover:bg-gray-200"
                        onClick={() => handleTemplateChange("Modern")}
                      >
                        Modern
                      </button>
                      <button
                        className="p-2 border rounded hover:bg-gray-200"
                        onClick={() => handleTemplateChange("Minimal")}
                      >
                        Minimal
                      </button>
                      <button
                        className="p-2 border rounded hover:bg-gray-200"
                        onClick={() => handleTemplateChange("Professional")}
                      >
                        Professional
                      </button>
                    </div>
                  </div>
                )}

                {item.title === "Make Logo Edits" && (
                  <div className="flex flex-col items-center">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleLogoUpload}
                      className="mb-2"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      {logos.map((logo) => (
                        <div key={logo.id} className="relative">
                          <img
                            src={logo.id}
                            alt="Uploaded Logo"
                            className="w-20 h-20 object-contain border rounded shadow"
                          />
                          <button
                            onClick={() => handleLogoRemove(logo.id)}
                            className="absolute top-0 right-0 bg-red-500 text-white p-1 text-xs rounded-full hover:bg-red-600"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.title === "Try Another Colours" && (
                  <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-full border-2 border-black"
                        style={{ backgroundColor: selectedColor }}
                      />
                      <div className="mt-2 w-[80px] p-1 bg-[#FFFFE0] rounded-md shadow">
                        <span className="text-sm">{selectedColor}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 mt-4 md:mt-0">
                      {colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => handleThemeColorChange(color)}
                          className={`w-8 h-8 rounded-full cursor-pointer relative ${
                            selectedColor === color
                              ? "ring-4 ring-[#264164]"
                              : "ring-2 ring-gray-300"
                          }`}
                          style={{ backgroundColor: color }}
                        >
                          {selectedColor === color && (
                            <div className="absolute inset-0 w-full h-full rounded-full border-2 border-white" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {item.title === "Edit Print Settings" && (
                  <div className="p-3 bg-white rounded-lg shadow-md border">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                      Page Margins (in mm)
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col">
                        <label className="text-xs text-gray-600">Top</label>
                        <input
                          type="number"
                          value={printSettings.top}
                          onChange={(e) => handlePrintSettingsChange('top', e.target.value)}
                          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs text-gray-600">Bottom</label>
                        <input
                          type="number"
                          value={printSettings.bottom}
                          onChange={(e) => handlePrintSettingsChange('bottom', e.target.value)}
                          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs text-gray-600">Left</label>
                        <input
                          type="number"
                          value={printSettings.left}
                          onChange={(e) => handlePrintSettingsChange('left', e.target.value)}
                          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs text-gray-600">Right</label>
                        <input
                          type="number"
                          value={printSettings.right}
                          onChange={(e) => handlePrintSettingsChange('right', e.target.value)}
                          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                      </div>
                    </div>
                    <button 
                      className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={handlePrint}
                    >
                      Generate PDF
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}