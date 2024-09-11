import React, { useState } from 'react';
import { Add, Info } from '@mui/icons-material'; 
import { Tooltip } from '@mui/material';
import Task from '../Task/Task';

// Importing images
import P1Image from '../../../../public/group.png'; 
import P2Image from '../../../../public/group.png'; 
import P3Image from '../../../../public/group.png'; 
import P4Image from '../../../../public/group.png'; 
import P5Image from '../../../../public/group.png'; 

function Project() {
  const [currentPage, setCurrentPage] = useState('projectList');  // State to control which page is shown

  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      {currentPage === 'projectList' ? (
        <ListGRN setCurrentPage={setCurrentPage} />  // Render project list and pass the state setter to it
      ) : (
        <Task />  // Render Task page
      )}
    </div>
  );
}

function ListGRN({ setCurrentPage }) {
  const projects = [
    { id: 1, title: "Project 1", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.", image: P1Image },
    { id: 2, title: "Project 2", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.", image: P2Image },
    { id: 3, title: "Project 3", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.", image: P3Image },
    { id: 4, title: "Project 4", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.", image: P4Image },
    { id: 5, title: "Project 1", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.", image: P5Image }
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1">Task Manager</h1>

        {/* Button to switch to the Task Page */}
        <button 
          onClick={() => setCurrentPage('taskPage')}  // Set currentPage to 'taskPage' when clicked
          className="w-[28px] h-[28px] 2xl:w-[40px] 2xl:h-[40px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] rounded-full bg-[#F9CD94] text-white hover:bg-[#FFA93A]"
        >
          <Add fontSize="small" />
        </button>
      </div>

      <hr className="bg-black mb-4"></hr>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="relative p-4 bg-white rounded-lg shadow-lg">
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

export default Project;
