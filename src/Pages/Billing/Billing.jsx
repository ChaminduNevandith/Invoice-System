import React from 'react';
import SmsIcon from '@mui/icons-material/Sms';


function Billing() {
  return (
    <div className="bg-gray-100 absolute top-[115px] right-0 w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 animate-fadeIn pb-[150px]">
      <ListApps />
    </div>
  );
}

function ListApps() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full">
      <h1 className="text-3xl font-semibold text-[#264164] mb-6 flex items-center">
       Billing
      </h1>
      <hr className="bg-gray-200 mb-8"></hr>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Subscription Card */}
        <div className="p-6 bg-gradient-to-b from-purple-50 to-white h-full rounded-lg shadow-lg border-t-8 border-purple-500 hover:scale-105 transform transition duration-300 ease-in-out">
          <h2 className="text-xl font-semibold mb-4 text-center text-purple-600 flex items-center justify-center">
            <SmsIcon className="mr-2 text-purple-500" /> Asipiya Invoice Plus
          </h2>
          <p className="mb-4 text-center text-sm text-gray-600">TRIAL Ends on 08/04/2024</p>
          <p className="font-bold text-gray-800 mb-4 text-center">
            We hope you're enjoying your trial. To keep using Asipiya Invoice Plus after 08/04/2024, please subscribe.
          </p>
          
          {/* Plan Options */}
          <div className="mb-4 text-sm text-gray-600">
            <button className="flex items-center mb-2 hover:text-purple-500"> Downgrade your plan.</button>
            <button className="flex items-center mb-2 hover:text-purple-500"> Cancel your trial.</button>
            <button className="flex items-center mb-2 hover:text-purple-500"> Upgrade your plan.</button>
          </div>

          {/* Subscription Pricing */}
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <p className="text-center font-bold text-gray-700 mb-2">Subscribe for</p>
            <p className="text-center text-3xl text-purple-600 font-semibold mb-2">$3/mo</p>
            <p className="text-center text-sm text-gray-500">+ applicable taxes</p>
          </div>

          {/* Subscribe Button */}
          <div className="flex justify-center mt-4 animate-slideInUp">
            <button className="px-8 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition-all duration-200">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
