import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
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
    <div className=" top-0 right-0 2xl:w-full 2xl:h-[75px] xl:w-[1240px] xl:h-[75px] lg:w-[743px]  md:w-[487px] lg:h-[75px] md:h-[75px] sm:w-[400px] sm:h-[75px] bg-white shadow-md">
      <div className="flex items-center h-full ml-4">
        <div className="relative 2xl:w-[1000px] 2xl:h-[38px] xl:w-[900px] xl:h-[38px] lg:w-[800px] lg:h-[34px]">
          <input
            type="text"
            className="w-full h-full border border-gray-300 rounded-[24px] px-3 pl-10"
            placeholder="Search..."
          />
          <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="ml-2 2xl:w-[170px] 2xl:h-[60px] xl:w-[160px] xl:h-[60px] lg:w-[140px] lg:h-[50px] hover:bg-gray-200 flex items-center justify-center rounded">
        <div className="ml-1 2xl:text-2xl  xl:text-xl lg:text-base font-semibold">{formattedTime}</div>
        </div>
        
        {/*POS Button */}

        <div className='ml-10'>
          <IconButton
            sx={{
              width: 73,
              height: 43,
              borderRadius: '10%',
              backgroundColor: '#AE69F5',
              '&:hover': {
                backgroundColor: '#9732FF',
              },
              color: 'white', // Icon color
            }}
          >
            POS
          </IconButton>
        </div>

        {/*Request Button */}
<div className='ml-10 relative'>
      <IconButton
        sx={{
          width: 43,
          height: 43,
          borderRadius: '50%',
          backgroundColor: '#AE69F5',
          '&:hover': {
            backgroundColor: '#9732FF',
          },
          color: 'white', // Icon color
          animation: 'ring 5s ease-in-out infinite', // Apply the ringing animation
        }}
      >
        <GroupIcon />
      </IconButton>
      

    </div>

         {/*Notification Button */}

         <div className='ml-6'>
      <IconButton
        sx={{
          width: 43,
          height: 43,
          borderRadius: '50%',
          backgroundColor: '#AE69F5',
          '&:hover': {
            backgroundColor: '#9732FF',
          },
          color: 'white', // Icon color
          animation: 'ring 2s ease-in-out infinite', // Apply the ringing animation
        }}
      >
        <NotificationsIcon />
      </IconButton>
    </div>

          {/*Profile Button */}

        <div className="ml-2 w-[160px] h-[60px] hover:bg-gray-200 flex items-center justify-center rounded">
          <IconButton
            sx={{
              width: 43,
              height: 43,
              borderRadius: '50%',
              backgroundColor: '#AE69F5',
              '&:hover': {
                backgroundColor: '#9732FF',
              },
              color: 'white', // Icon color
            }}
          >
            <AccountCircleIcon />
          </IconButton>
          <span className='ml-2'>Chamindu</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
