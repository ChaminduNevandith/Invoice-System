import React, { useState } from "react";
import {
  Search,
  Add,
  Inventory,
  HomeRepairService,
  PersonAddAlt1,
  Close,
} from "@mui/icons-material";
import { Pagination } from "@mui/material";
import ProductTable from "./ProductTable";
import ServiceTable from "./ServiceTable";
import ZoneManager from "../../../Component/ZoneManagerform/ZoneManager";
import AddNewProductform from "../../../Component/AddNewProductform/AddNewProductform";

const Modal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[600px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button
          onClick={onClose}
          className="w-[28px] h-[28px] rounded-full text-white bg-[#CC7FFF] hover:bg-[#AE69F5] flex items-center justify-center"
        >
          <Close fontSize="small" />
        </button>
      </div>
      <hr className="mb-4" />
      {children}
    </div>
  </div>
);

function AddProduct() {
  const [page, setPage] = useState(1);
  const [currentTable, setCurrentTable] = useState("product"); // State to toggle between tables
  const [modalType, setModalType] = useState(null); // State to manage modal visibility

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const renderTable = () => {
    if (currentTable === "product") {
      return <ProductTable />;
    } else if (currentTable === "service") {
      return <ServiceTable />;
    }
  };

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <div className="bg-white p-6 rounded-md shadow-md w-full pb-10">
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row 2xl:flex-row xxl:flex-row sm:justify-between mb-4">
  <h1 className="text-2xl font-semibold text-[#264164] mb-2 sm:mb-0">Add Product</h1>

  <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row xxl:flex-row space-y-2 md:space-y-2  lg:space-y-0 xl:space-y-0 2xl:space-y-0 xxl:space-y-0 space-x-0 md:space-x-0  lg:space-x-2 xl:space-x-2 2xl:space-x-2 xxl:space-x-2  actions w-full sm:w-auto">
    <button
      onClick={() => openModal("zoneManager")}
      className="w-full h-[28px] 2xl:w-[300px] 2xl:h-[40px] xl:w-[300px] xl:h-[40px] lg:w-[200px] lg:h-[30px] sm:w-full sm:h-[28px] md:w-full md:h-[28px] rounded-[3.9px] bg-[#CC7FFF] text-white hover:bg-[#AE69F5]"
    >
      <PersonAddAlt1 fontSize="small" />
      Zone Manager
    </button>

    <button
      onClick={() => openModal("productSubCategoryManager")}
      className="w-full h-[28px] 2xl:w-[300px] 2xl:h-[40px] xl:w-[300px] xl:h-[40px] lg:w-[200px] lg:h-[30px] sm:w-full sm:h-[28px] md:w-full md:h-[28px] rounded-[3.9px] bg-[#CC7FFF] text-white hover:bg-[#AE69F5]"
    >
      <PersonAddAlt1 fontSize="small" />
      Product Sub Category Manager
    </button>

    <button
      onClick={() => openModal("productCategoryManager")}
      className="w-full h-[28px] 2xl:w-[300px] 2xl:h-[40px] xl:w-[300px] xl:h-[40px] lg:w-[200px] lg:h-[30px] sm:w-full sm:h-[28px] md:w-full md:h-[28px] rounded-[3.9px] bg-[#CC7FFF] text-white hover:bg-[#AE69F5]"
    >
      <PersonAddAlt1 fontSize="small" />
      Product Category Manager
    </button>

    <button onClick={() => openModal("add")}
      className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A]">
      <Add fontSize="small" />
    </button>
  </div>
</div>


        <hr className="bg-black mb-10" />

        <div className="flex justify-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 actions mb-5">
          <button
            className={`w-full h-[28px] 2xl:w-[300px] 2xl:h-[40px] xl:w-[300px] xl:h-[40px] lg:w-[200px] lg:h-[30px] sm:w-[100px] sm:h-[28px] md:w-[150px] md:h-[28px] rounded-[3.9px] ${currentTable === "product" ? "bg-[#CC7FFF]" : "bg-[#F3E5F5]"} text-white hover:bg-[#AE69F5]`}
            onClick={() => setCurrentTable("product")}
          >
            <Inventory fontSize="small" />
            Product
          </button>

          <button
            className={`w-full h-[28px] 2xl:w-[300px] 2xl:h-[40px] xl:w-[300px] xl:h-[40px] lg:w-[200px] lg:h-[30px] sm:w-[100px] sm:h-[28px] md:w-[150px] md:h-[28px] rounded-[3.9px] ${currentTable === "service" ? "bg-[#CC7FFF]" : "bg-[#F3E5F5]"} text-white hover:bg-[#AE69F5]`}
            onClick={() => setCurrentTable("service")}
          >
            <HomeRepairService fontSize="small" />
            Service
          </button>
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row xxl:flex-row justify-between mb-8">
          <div className="relative mb-4 md:mb-0">
            <label className="block text-[#264164] mb-1 text-xs">Search Customer</label>
            <input
              type="text"
              placeholder="Search..."
              className="text-[#264164] text-sm pl-10 p-2 border rounded-md w-full sm:w-full md:w-full lg:w-[150px] xl:w-[200px] 2xl:w-[200px] xxl:w-[200px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
            />
            <Search className="absolute top-7 left-2 text-gray-500" />
          </div>

          <div className="relative">
            <label className="block text-[#264164] mb-1 text-xs">Sort By</label>
            <select className="text-[#264164] text-sm p-2 border rounded-md w-full sm:w-full md:w-full lg:w-[150px] xl:w-[200px] 2xl:w-[200px] xxl:w-[200px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200  focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50">
              <option>All</option>
              <option>Completed</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        {renderTable()}

        <div className="flex justify-end mt-4">
          <Pagination
            count={3} // Replace with dynamic page count
            page={page}
            onChange={handleChangePage}
            className="pagination-custom"
          />
        </div>
      </div>

      {/* Render modals conditionally */}
      {modalType === "zoneManager" && (
        <Modal title="Zone Manager" onClose={closeModal}>
          <ZoneManager />
        </Modal>
      )}
      {modalType === "productSubCategoryManager" && (
        <Modal title="Product Sub Category Manager" onClose={closeModal}>
          <ZoneManager />
        </Modal>
      )}
      {modalType === "productCategoryManager" && (
        <Modal title="Product Category Manager" onClose={closeModal}>
          <ZoneManager />
        </Modal>
      )}
      {modalType === "add" && (
        <Modal title="New Product" onClose={closeModal}>
          <AddNewProductform />
        </Modal>
      )}
    </div>
  );
}

export default AddProduct;
