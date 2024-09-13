import React, { useState } from 'react';
import { ArrowBack, Edit, Search, Visibility, Add, Delete, Print, Close } from '@mui/icons-material';
import { Pagination, Tooltip } from '@mui/material';
import AddTaskForm from '../../../Component/AddTaskForm/AddTaskForm';

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="w-[28px] h-[28px] rounded-full text-white bg-[#CC7FFF] hover:bg-[#AE69F5] flex items-center justify-center"
          >
            <Close fontSize="small" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Task({ goBack }) {
  const [customers, setCustomers] = useState([
    { id: 1, invoiceNo: '#12345', customername: 'Akila Perera', date: '04/02/2023', PaidAmount: '2000', Balance: '2000', PaymentType: '2000', Salesman: 'Chamika', note: 'It doesn\'t work well with gluten-free bread—seems to prefer sourdough', status: 'Processed' },
    { id: 2, invoiceNo: '#23456', customername: 'Akila Perera', date: '10/10/2023', PaidAmount: '2000', Balance: '2000', PaymentType: '2000', Salesman: 'Chamara', note: 'These glasses make me look too mysterious—my friends can’t tell if I’m hiding something or just tired', status: 'Processed' },
    { id: 3, invoiceNo: '#34567', customername: 'Akila Perera', date: '04/01/2024', PaidAmount: '2000', Balance: '2000', PaymentType: '2000', Salesman: 'Chandrasena', note: 'I thought this was a magic carpet, but it doesn’t even float.', status: 'Processed' },
  ]);

  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const toggleStatus = (id) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              status: customer.status === 'Processed' ? 'Pending' : 'Processed',
            }
          : customer
      )
    );
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full mb-[150px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Task</h1>

        {/* Container for Add and Back buttons */}
        <div className="flex space-x-2">
          {/* Button to open the modal */}
          <button
            onClick={openModal} // Open modal on click
            className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A]"
          >
            <Add fontSize="small" />
          </button>

          {/* Back Button */}
          <button
            onClick={goBack}
            className="w-[48px] h-[28px] 2xl:w-[80px] 2xl:h-[40px] xl:w-[80px] xl:h-[40px] lg:w-[70px] lg:h-[30px] sm:w-[48px] sm:h-[28px] md:w-[48px] md:h-[28px] rounded-[3.9px] bg-[#CC7FFF] text-white hover:bg-[#AE69F5]"
          >
            <ArrowBack fontSize="small" />
          </button>
        </div>
      </div>

      <hr className="bg-black mb-4" />

      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row xxl:flex-row space-x-0 md:space-x-0  lg:space-x-2 xl:space-x-2 2xl:space-x-2 xxl:space-x-2 mb-4">
        {/* Search Bar */}
            <div className="relative mb-4 md:mb-0 pb-2">
            <label className="block text-[#264164] mb-1 text-xs">Search By Task</label>
            <input 
                type="text" 
                placeholder="Search..." 
                className="text-[#264164] pl-10 p-2 border rounded-md w-full sm:w-full md:w-full lg:w-[150px] xl:w-[200px] 2xl:w-[200px] xxl:w-[200px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200  focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
            />
            <Search className="absolute top-7 left-2 text-gray-500" />
            </div>

            {/* Date Bar 1 */}
            <div className="relative mb-4 md:mb-0 pb-2">
            <label className="block text-[#264164] mb-1 text-xs">Start Date</label>
            <input 
                type="date" 
                className="text-[#264164]  p-2 border rounded-md w-full sm:w-full md:w-full lg:w-[150px] xl:w-[200px] 2xl:w-[200px] xxl:w-[200px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
            />
            </div>

            {/* Date Bar 2 */}
            <div className="relative mb-4 md:mb-0 pb-2">
            <label className="block text-[#264164] mb-1 text-xs">Deadline</label>
            <input 
                type="date" 
                className="text-[#264164] p-2 border rounded-md w-full sm:w-full md:w-full lg:w-[150px] xl:w-[200px] 2xl:w-[200px] xxl:w-[200px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
            />
            </div>
      </div>

      {/* Table from Invoice */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse text-xs">
          <thead>
            <tr className="text-left text-gray-700 bg-[#F2F1F1] ">
              <th className="py-2 px-4 border-b text-[#264164]">Member Name</th>
              <th className="py-2 px-4 border-b text-[#264164]">Task</th>
              <th className="py-2 px-4 border-b text-[#264164]">Start Date</th>
              <th className="py-2 px-4 border-b text-[#264164]">Deadline</th>
              <th className="py-2 px-4 border-b text-[#264164]">Assign By</th>
              <th className="py-2 px-4 border-b text-[#264164]">Status</th>
              <th className="py-2 px-4 border-b text-[#264164]">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="table-row text-gray-700 text-left bg-[#FEF9FF]">
                <td className="py-2 px-4 border-b text-[#264164]"data-label="Member Name">{customer.customername}</td>
                <td className="py-2 px-4 border-b text-[#264164]"data-label="Task">
                  <p className="whitespace-normal break-words">{customer.note}</p>
                </td>
                <td className="py-2 px-4 border-b text-[#264164]"data-label="Start Date">{customer.date}</td>
                <td className="py-2 px-4 border-b text-[#264164]"data-label="Deadline">{customer.date}</td>
                <td className="py-2 px-4 border-b text-[#264164]"data-label="Assign By">{customer.customername}</td>
                <td className="py-2 px-4 border-b text-[#264164]" data-label="Status">
                  <button
                    onClick={() => toggleStatus(customer.id)}
                    className={`px-3 py-1 rounded-[3.9px] text-white w-28 ${
                      customer.status === 'Processed' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {customer.status}
                  </button>
                </td>
                
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2 actions">
                    <Tooltip title="Edit Task" placement="top" arrow>
                      <button className="w-[28px] h-[28px] rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A]">
                        <Edit fontSize="small" />
                      </button>
                    </Tooltip>
                    <Tooltip title="Add Members" placement="top" arrow>
                      <button className="w-[28px] h-[28px] rounded-full bg-[#7ECB8F] text-white hover:bg-[#2BA946]">
                        <Add fontSize="small" />
                      </button>
                    </Tooltip>
                    <Tooltip title="Delete Task" placement="top" arrow>
                      <button className="w-[28px] h-[28px] rounded-full bg-[#CC7FFF] text-white hover:bg-[#AE69F5]">
                        <Delete fontSize="small" />
                      </button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <Pagination
          count={3} // Replace with dynamic page count
          page={page}
          onChange={handleChangePage}
          className="pagination-custom"
        />
      </div>

      {/* Modal for Add Project */}
      {showModal && (
        <Modal title="Add Task" onClose={closeModal}>
          <AddTaskForm />
        </Modal>
      )}
    </div>
  );
}

export default Task;
