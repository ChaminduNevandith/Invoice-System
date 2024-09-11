import React from 'react';
import { Search, ArrowBack, Info } from '@mui/icons-material'; 
import { Tooltip } from '@mui/material';  // Import Tooltip
import { NavLink } from 'react-router-dom';
import Project from '../Project/Project';

// Importing images
import P1Image from '../../../../public/group.png'; 
import P2Image from '../../../../public/group.png'; 
import P3Image from '../../../../public/group.png'; 
import P4Image from '../../../../public/group.png'; 
import P5Image from '../../../../public/group.png'; 

function Task() {
  return (
    <div>
      <ListGRN />
    </div>
  );
}

function ListGRN() {
  const projects = [
    { id: 1, title: "Project 1", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.", image: P1Image },
    { id: 2, title: "Project 2", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.", image: P2Image },
    { id: 3, title: "Project 3", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.", image: P3Image },
    { id: 4, title: "Project 4", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.", image: P4Image },
    { id: 5, title: "Project 1", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.", image: P5Image }
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full mb-[150px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#264164] mb-1 ">Task </h1>
        
        <NavLink to="/Task-Manager">
              <button className="w-[48px] h-[28px] 2xl:w-[80px] 2xl:h-[40px] xl:w-[80px] xl:h-[40px] lg:w-[70px] lg:h-[30px] sm:w-[48px] sm:h-[28px] md:w-[48px] md:h-[28px] rounded-[3.9px] bg-[#CC7FFF] text-white hover:bg-[#AE69F5]">
                <ArrowBack fontSize="small" />
              </button>
        </NavLink>
      </div>

      <hr className="bg-black mb-4"></hr>

      {/* Search Bar */}
      <div className="relative mb-4 md:mb-0 pb-5">
        <label className="block text-[#264164] mb-1 text-xs">Search By Project</label>
        <input 
            type="text" 
            placeholder="Search..." 
            className="text-[#264164] pl-10 p-2 border rounded-md w-full sm:w-full md:w-full lg:w-[150px] xl:w-[200px] 2xl:w-[200px] border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50"
        />
        <Search className="absolute top-7 left-2 text-gray-500" />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
              {/* Line/Divider under the image */}
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

export default Task;
