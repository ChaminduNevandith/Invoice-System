import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

function TopBar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for profile dropdown

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  const toggleNotificationDropdown = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const toggleRequestDropdown = () => {
    setIsRequestOpen((prev) => !prev);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="top-0 right-0 w-full h-[75px] bg-white shadow-md flex items-center px-4 relative">
      <div className="relative w-full max-w-[1000px] sm:max-w-[800px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1100px]">
        <input
          type="text"
          className="w-full h-[34px] border border-gray-300 rounded-[24px] px-3 pl-10 text-sm"
          placeholder="Search..."
        />
        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="ml-2 flex items-center space-x-2 sm:space-x-4">
        <div className="hidden md:flex w-[80px] h-[35px] sm:w-[100px] sm:h-[50px] lg:w-[120px] lg:h-[50px] xl:w-[140px] xl:h-[60px] 2xl:w-[160px] 2xl:h-[60px] flex items-center justify-center rounded bg-gray-200">
          <div className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold">{formattedTime}</div>
        </div>

        {/* POS Button */}
        <div>
          <button
            className="w-[60px] h-[35px] rounded-[10%] bg-[#AE69F5] text-white flex items-center justify-center hover:bg-[#9732FF] text-sm"
          >
            POS
          </button>
        </div>

        {/* Request Button */}
        <div className="relative">
          <button
            className="w-[35px] h-[35px] rounded-full bg-[#AE69F5] text-white flex items-center justify-center hover:bg-[#9732FF] text-sm"
            onClick={toggleRequestDropdown}
          >
            <GroupIcon fontSize="small" />
          </button>

          {/* Request Dropdown */}
          {isRequestOpen && (
            <div className="absolute right-[-20px] mt-2 w-64 bg-white shadow-lg rounded-md p-4 z-50">
              <div className="text-sm font-semibold">Requests</div>
              <ul className="mt-2">
                <li className="flex items-center justify-between py-2 border-b">
                  <span>New request received</span>
                  <span className="text-xs text-gray-500">23 hrs ago</span>
                </li>
                {/* Add more requests as needed */}
              </ul>
              <button className="text-xs text-right text-blue-500 mt-2">Clear</button>
            </div>
          )}
        </div>

        {/* Notification Button */}
        <div className="relative">
          <button
            className="w-[35px] h-[35px] rounded-full bg-[#AE69F5] text-white flex items-center justify-center hover:bg-[#9732FF] text-sm"
            onClick={toggleNotificationDropdown}
          >
            <NotificationsIcon fontSize="small" />
          </button>

          {/* Notification Dropdown */}
          {isNotificationOpen && (
            <div className="absolute right-[-20px] mt-2 w-64 bg-white shadow-lg rounded-md p-4 z-50">
              <div className="text-sm font-semibold">Notifications</div>
              <ul className="mt-2">
                <li className="flex items-center justify-between py-2 border-b">
                  <span>New report has been received</span>
                  <span className="text-xs text-gray-500">23 hrs ago</span>
                </li>
                {/* Add more notifications as needed */}
              </ul>
              <button className="text-xs text-right text-blue-500 mt-2">Clear</button>
            </div>
          )}
        </div>

        {/* Profile Button */}
        <div className="relative flex items-center space-x-1">
          <button
            className="w-[35px] h-[35px] rounded-full bg-[#AE69F5] text-white flex items-center justify-center hover:bg-[#9732FF] text-sm"
            onClick={toggleProfileDropdown}
          >
            <AccountCircleIcon fontSize="small" />
          </button>
          <span className="hidden sm:inline text-sm">Chamindu</span>

          {/* Profile Dropdown */}
{isProfileOpen && (
  <div className="absolute right-0 top-[50px] w-48 bg-white shadow-lg rounded-md p-2 z-50">
    <div className="py-2 px-4 text-sm flex items-center space-x-2 hover:bg-[#AE69F5] hover:text-white cursor-pointer">
      <EditIcon fontSize="small" />
      <span>Edit Profile</span>
    </div>
    <div className="py-2 px-4 text-sm flex items-center space-x-2 hover:bg-[#AE69F5] hover:text-white cursor-pointer">
      <PowerSettingsNewIcon fontSize="small" />
      <span>Log Out</span>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
}

export default TopBar;
