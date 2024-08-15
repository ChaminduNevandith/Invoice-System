import React, { useState } from 'react';
import './App.css';
import Sidebar from './Component/SideBar/Sidebar.jsx';
import TopBar from './Component/TopBar/TopBar.jsx';
import SettingButton from './Component/SettingButton/SettingButton.jsx';
import RightSideBar from './Component/RightSideBar/RightSideBar.jsx';
import Title from './Component/Title/Title.jsx';
import DashBoard from './Pages/DashBoard.jsx';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='body'>
      <div className='main-content'>
        <div className='sidebar-container'>
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className='content'>
          <div className='topbar-title-container'>
            <TopBar />
            <Title />
          </div>
          <DashBoard />
        </div>

        {/* Right Sidebar */}
        {isSidebarOpen && <RightSideBar setIsSidebarOpen={setIsSidebarOpen} />}
      </div>

      {/* Setting Button */}
      <div className='setting-button-container'>
        <SettingButton setIsSidebarOpen={setIsSidebarOpen} />
      </div>
    </div>
  );
}

export default App;
