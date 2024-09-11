import React, { useState } from 'react';
import { Search } from '@mui/icons-material'; // Example of MUI icons
import { Pagination } from '@mui/material';


function CRM() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn  pb-[150px]">
      <ListCustomers />
    </div>
  );
}

function ListCustomers() {

  

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full ">
      <h1 className=" text-2xl font-semibold text-[#264164] mb-1">CRM</h1>
      <hr className="bg-black mb-4"></hr>

    </div>
  );
}

export default CRM;
