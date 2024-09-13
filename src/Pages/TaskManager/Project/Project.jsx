import React, { useState } from 'react';
import { Add, Info, Search , Close } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import Task from '../Task/Task';
import Addprojectform from '../../../Component/AddprojectForm/addprojectform';

// Importing images
import P1Image from '../../../../public/group.png'; 
import P2Image from '../../../../public/group.png'; 
import P3Image from '../../../../public/group.png'; 
import P4Image from '../../../../public/group.png'; 
import P5Image from '../../../../public/group.png'; 

function Project() {
  const [currentPage, setCurrentPage] = useState('projectList');  // State to control which page is shown
  const [showModal, setShowModal] = useState(false);  // State to control modal visibility

  // Function to close the modal
  const closeModal = () => setShowModal(false);

  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 pb-[150px]">
      {currentPage === 'projectList' ? (
        <ListGRN setCurrentPage={setCurrentPage} openModal={() => setShowModal(true)} />  // Pass the function to open the modal
      ) : (
        <Task goBack={() => setCurrentPage('projectList')} />  // Render Task and provide goBack function
      )}

      {/* Conditionally render the modal for the customer form */}
      {showModal && (
        <Modal title="Add Project" onClose={closeModal}>
          <Addprojectform />
        </Modal>
      )}
    </div>
  );
}

function ListGRN({ setCurrentPage, openModal }) {
  const projects = [
    { id: 1, title: "Project 1", description: "Motivating the doers.", image: P1Image },
    { id: 2, title: "Project 2", description: "Follow my dreams.", image: P2Image },
    { id: 3, title: "Project 3", description: "Inspire others.", image: P3Image },
    { id: 4, title: "Project 4", description: "Dream big.", image: P4Image },
    { id: 5, title: "Project 5", description: "Focus on the future.", image: P5Image }
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Projects</h1>

        {/* Button to open the Add Customer Form Modal */}
        <button 
          onClick={openModal}
          className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A]"
        >
          <Add fontSize="small" />
        </button>
      </div>

      <hr className="bg-black mb-4"></hr>

      {/* Search Bar */}
      <div className="relative mb-4 md:mb-0 pb-5">
        <label className="block text-[#264164] mb-1 text-xs">Search Customer</label>
        <input 
          type="text" 
          placeholder="Search..." 
          className="text-[#264164] pl-10 p-2 border rounded-md w-full sm:w-full md:w-full lg:w-[150px] xl:w-[200px] 2xl:w-[200px] xxl:w-[200px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200  focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
        />
        <Search className="absolute top-7 left-2 text-gray-500" />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project) => (
          <div key={project.id} onClick={() => setCurrentPage('taskPage')} className="relative p-4 bg-white rounded-lg shadow-md ">
            {/* Info Icon at top-right with Tooltip */}
            <div className="absolute top-2 right-2">
              <Tooltip title="More info" placement="top" arrow>
                <Info fontSize="large" style={{ color: '#7ECB8F' }} />
              </Tooltip>
            </div>

            {/* Center the image */}
            <div className='flex flex-col items-center mt-10'>
              <img src={project.image} alt={project.title} className="w-24 h-24 rounded-full mb-2" />
              <hr className="w-full border-t-2 border-gray-300 mb-4" />
            </div>

            {/* Align text to the left */}
            <div className="text-left">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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

export default Project;
