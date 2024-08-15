import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './NotificationButton.css'; 

function TopBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="top-0 right-0 w-full h-[75px] bg-white shadow-md flex items-center px-4">
      <div className="relative w-full max-w-[1000px] h-[34px] sm:max-w-[500px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[800px] 2xl:max-w-[1000px]">
        <input
          type="text"
          className="w-full h-full border border-gray-300 rounded-[24px] px-3 pl-10"
          placeholder="Search..."
        />
        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="ml-2 flex items-center">
        <div className="w-[100px] h-[50px] sm:w-[80px] sm:h-[40px] md:w-[100px] md:h-[50px] lg:w-[140px] lg:h-[50px] xl:w-[160px] xl:h-[60px] 2xl:w-[170px] 2xl:h-[60px] hover:bg-gray-200 flex items-center justify-center rounded">
          <div className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-xl 2xl:text-2xl font-semibold">{formattedTime}</div>
        </div>
        
        {/* POS Button */}
        <div className='ml-4 sm:ml-2'>
          <button
            className="w-[60px] h-[35px] sm:w-[50px] sm:h-[30px] md:w-[60px] md:h-[35px] lg:w-[70px] lg:h-[40px] xl:w-[73px] xl:h-[43px] 2xl:w-[73px] 2xl:h-[43px] rounded-[10%] bg-[#AE69F5] text-white flex items-center justify-center hover:bg-[#9732FF]"
          >
            POS
          </button>
        </div>

        {/* Request Button */}
        <div className='ml-4 sm:ml-2'>
          <button
            className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[43px] xl:h-[43px] 2xl:w-[43px] 2xl:h-[43px] rounded-full bg-[#AE69F5] text-white flex items-center justify-center hover:bg-[#9732FF] animate-pulse"
          >
            <GroupIcon />
          </button>
        </div>

        {/* Notification Button */}
        <div className='ml-4 sm:ml-2'>
          <button
            className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[43px] xl:h-[43px] 2xl:w-[43px] 2xl:h-[43px] rounded-full bg-[#AE69F5] text-white flex items-center justify-center hover:bg-[#9732FF] animate-pulse"
          >
            <NotificationsIcon />
          </button>
        </div>

        {/* Profile Button */}
        <div className="ml-2 flex items-center w-[120px] h-[40px] sm:w-[100px] sm:h-[40px] md:w-[120px] md:h-[50px] lg:w-[140px] lg:h-[50px] xl:w-[160px] xl:h-[60px] 2xl:w-[160px] 2xl:h-[60px] hover:bg-gray-200 rounded">
          <button
            className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] lg:w-[43px] lg:h-[43px] xl:w-[43px] xl:h-[43px] 2xl:w-[43px] 2xl:h-[43px] rounded-full bg-[#AE69F5] text-white flex items-center justify-center hover:bg-[#9732FF]"
          >
            <AccountCircleIcon />
          </button>
          <span className='ml-2 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-md 2xl:text-md'>Chamindu</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
