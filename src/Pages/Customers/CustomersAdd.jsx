import React from 'react'

function CustomersAdd() {
  return (
    <div className=" bg-white  absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl font-semibold text-blue-900 mb-1">Add Customers</h1>
      <hr className='bg-black mb-4'></hr>
      
      <div className="space-y-8 overflow-auto pb-[150px]">
        {/* General Section */}
        <div className="bg-purple-50 p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-medium text-blue-900 mb-4">General</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="email" />
            </div>
            <div>
              <label className="block text-gray-700">Telephone Number</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">GST NO</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">VAT NO</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div className="bg-purple-50 p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-medium text-blue-900 mb-4">Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Company Name</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">Company Contact</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
          </div>
        </div>

        {/* Branch Section */}
        <div className="bg-purple-50 p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-medium text-blue-900 mb-4">Branch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700">Branch Name</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">Branch Address</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">Branch Contact NO</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-6 py-2 bg-purple-500 text-white rounded-md shadow">+ Add Branch</button>
          </div>
        </div>

        {/* General Section (Second Instance) */}
        <div className="bg-purple-50 p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-medium text-blue-900 mb-4">General</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="email" />
            </div>
            <div>
              <label className="block text-gray-700">Telephone Number</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">GST NO</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">VAT NO</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-purple-50 p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-medium text-blue-900 mb-4">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700">Address Line 1</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">Address Line 2</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">Address Line 3</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">City</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
            <div>
              <label className="block text-gray-700">State</label>
              <input className="p-2 border border-gray-300 rounded-md w-full" type="text" />
            </div>
          </div>
        </div>

        {/* Save Button */}
      <div className=" flex justify-end mt-4 ">
        <button className="px-6 py-2 bg-purple-500 text-white rounded-md shadow">+ Save</button>
      </div>

      </div>
    </div>
  )
}

export default CustomersAdd