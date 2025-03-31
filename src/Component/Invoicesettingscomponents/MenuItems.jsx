import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import InvoiceNav from "./InvoiceNav";

const menuItems = [
  { title: "Change Up the Template", icon: "📜" },
  { title: "Make Logo Edits", icon: "🖼️" },
  { title: "Try Another Colours", icon: "🎨" },
  { title: "Edit Print Settings", icon: "🖨️" },
];

export default function DesignNav({ selectedColor, setSelectedColor }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [logos, setLogos] = useState([]);
  const colors = ["#A7C7E7", "#FFB3A1", "#B5EAD7", "#C7CEEA", "#FFEBA9"];

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
                      <button className="p-2 border rounded hover:bg-gray-200">
                        Classic
                      </button>
                      <button className="p-2 border rounded hover:bg-gray-200">
                        Modern
                      </button>
                      <button className="p-2 border rounded hover:bg-gray-200">
                        Minimal
                      </button>
                      <button className="p-2 border rounded hover:bg-gray-200">
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
                          placeholder="Enter mm"
                          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs text-gray-600">Bottom</label>
                        <input
                          type="number"
                          placeholder="Enter mm"
                          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs text-gray-600">Left</label>
                        <input
                          type="number"
                          placeholder="Enter mm"
                          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs text-gray-600">Right</label>
                        <input
                          type="number"
                          placeholder="Enter mm"
                          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                      </div>
                    </div>
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