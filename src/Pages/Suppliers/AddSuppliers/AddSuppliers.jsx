import React from 'react'

function AddSuppliers() {
  return (
    
    <div className="bg-white absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn ">
      <h1 className="text-2xl font-semibold text-[#264164] mb-1">Add Suppliers</h1>
      <hr className="bg-black mb-4"></hr>
      
      <div className="space-y-8 overflow-auto pb-[150px] ">
        {/* General Section */}
        <div className="bg-purple-50 p-6 rounded-md shadow-sm animate-slideInUp ">
          <h2 className="text-lg font-medium text-[#264164] mb-4">General</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[#264164]">Name</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
            <div>
              <label className="block text-[#264164]">Email</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="email" />
            </div>
            <div>
              <label className="block text-[#264164]">Contact No (1) </label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
            <div>
              <label className="block text-[#264164]">Contact No (2) </label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
            <div>
              <label className="block text-[#264164]">Contact No (3) </label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div className="bg-purple-50 p-6 rounded-md shadow-sm animate-slideInUp">
          <h2 className="text-lg font-medium text-[#264164] mb-4">Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#264164]">Company Name</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
            <div>
              <label className="block text-[#264164]">Company Contact</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
          </div>
        </div>

        {/* Branch Section */}
        <div className="bg-purple-50 p-6 rounded-md shadow-sm animate-slideInUp">
          <h2 className="text-lg font-medium text-[#264164] mb-4">Branch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[#264164]">Branch Name</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
            <div>
              <label className="block text-[#264164]">Branch Address</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
            <div>
              <label className="block text-[#264164]">Branch Contact NO</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-6 py-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 transition-all duration-200">+ Add Branch</button>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-purple-50 p-6 rounded-md shadow-sm animate-slideInUp">
          <h2 className="text-lg font-medium text-[#264164] mb-4">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[#264164]">Address Line 1</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
            <div>
              <label className="block text-[#264164]">Address Line 2</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
            <div>
              <label className="block text-[#264164]">Address Line 3</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
            <div>
              <label className="block text-[#264164]">City</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
            <div>
              <label className="block text-[#264164]">State</label>
              <input className="p-2 border border-gray-300 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50" type="text" />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-4 animate-slideInUp">
          <button className="px-6 py-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 transition-all duration-200 ">+ Add Supplier</button>
        </div>

      </div>
    </div>
  )
}

export default AddSuppliers
