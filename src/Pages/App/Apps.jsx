import React from 'react';
import SmsIcon from '@mui/icons-material/Sms';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import TaskIcon from '@mui/icons-material/Task';

function Apps() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <ListApps />
    </div>
  );
}

function ListApps() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full">
      <h1 className="text-2xl font-semibold text-[#264164] mb-4">Apps</h1>
      <hr className="bg-black mb-6"></hr>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* SMS Apps Card */}
        <div className="p-6 bg-white h-[400px] rounded-lg shadow-md text-center">
          <div className="mb-4">
            <SmsIcon style={{ fontSize: 48, color: '#264164' }} />
          </div>
          <h2 className="text-lg font-semibold mb-2">SMS Apps</h2>
          <p className="mb-4">Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.</p>
          <p className="font-bold text-gray-600">Coming Soon</p>
        </div>

        {/* Customer Relationship Management Card */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <div className="mb-4">
            <ContactMailIcon style={{ fontSize: 48, color: '#264164' }} />
          </div>
          <h2 className="text-lg font-semibold mb-2">Customer Relationship Management</h2>
          <p className="mb-4">Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.</p>
          <p className="font-bold text-gray-600">Coming Soon</p>
        </div>

        {/* Task Management Card */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <div className="mb-4">
            <TaskIcon style={{ fontSize: 48, color: '#264164' }} />
          </div>
          <h2 className="text-lg font-semibold mb-2">Task Management</h2>
          <p className="mb-4">Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.</p>
          <p className="font-bold text-gray-600">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

export default Apps;
