import React, { useState } from 'react';
import {
  Dashboard,
  People,
  Receipt,
  LocalAtm,
  Inventory,
  AttachMoney,
  AccountCircle,
  Assessment,
  Settings,
  Apps,
  ReceiptLong,
  ExpandMore,
  ExpandLess,
  ArrowBack,
  PersonAdd,
  Group,
  Description,
  Replay,
  QrCode,
  Groups,
  Man,
  Person,
  Summarize,
  Menu,
} from '@mui/icons-material';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [isStockDropdownOpen, setIsStockDropdownOpen] = useState(false);
  const [isSuppliersDropdownOpen, setIsSuppliersDropdownOpen] = useState(false);
  const [isSalesmenDropdownOpen, setIsSalesmenDropdownOpen] = useState(false);
  const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false);
  const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);
  

  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleCustomerDropdown = () => {
    setIsCustomerDropdownOpen(!isCustomerDropdownOpen);
  };

  const toggleStockDropdown = () => {
    setIsStockDropdownOpen(!isStockDropdownOpen);
  };

  const toggleSuppliersDropdown = () => {
    setIsSuppliersDropdownOpen(!isSuppliersDropdownOpen);
  };

  const toggleSalesmenDropdown = () => {
    setIsSalesmenDropdownOpen(!isSalesmenDropdownOpen);
  };

  const toggleUsersDropdown = () => {
    setIsUsersDropdownOpen(!isUsersDropdownOpen);
  };

  const toggleReportDropdown = () => {
    setIsReportDropdownOpen(!isReportDropdownOpen);
  };

  const toggleSettingsDropdown = () => {
    setIsSettingsDropdownOpen(!isSettingsDropdownOpen);
  };

  return (
    <div
  className={`${
    isCollapsed ? '2xl:w-[5.75rem]' : '2xl:w-[17.56rem]'
  } bg-white h-screen shadow-md flex flex-col transition-all duration-300 ease-in-out
  sm:${isCollapsed ? 'w-[4rem]' : 'w-[8rem]'}
  md:${isCollapsed ? 'w-[4.5rem]' : 'w-[10rem]'}
  lg:${isCollapsed ? 'w-[5rem]' : 'w-[12rem]'}
  xl:${isCollapsed ? 'w-[5.7.5rem]' : 'w-[17rem]'}
  2xl:${isCollapsed ? 'w-[5.75rem]' : 'w-[17.56rem]'}`}
>
      <div className="flex items-center justify-between  p-4">
        <button onClick={toggleSidebar}>
          <Menu fontSize="large" />
        </button>
        {!isCollapsed && (
          <button onClick={toggleSidebar}>
            <span className="material-icons">
              {isCollapsed ? <ExpandMore /> : <ArrowBack />}
            </span>
          </button>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {/* Dashboard */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <Dashboard />
            {!isCollapsed && <span className="ml-4">Dashboard</span>}
          </li>

          {/* Customers with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={toggleCustomerDropdown}
          >
            <People />
            {!isCollapsed && (
              <>
                <span className="ml-4">Customers</span>
                <span className="ml-auto">
                  {isCustomerDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isCustomerDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <PersonAdd />
                <span className="ml-4">Add Customers</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Group />
                <span className="ml-4">List Customers</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Description />
                <span className="ml-4">Customer Credit Log</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Replay />
                <span className="ml-4">Customer Return</span>
              </li>
            </ul>
          )}

          {/* Quotation */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <Receipt />
            {!isCollapsed && <span className="ml-4">Quotation</span>}
          </li>

          {/* Invoice */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <ReceiptLong />
            {!isCollapsed && <span className="ml-4">Invoice</span>}
          </li>

          {/* Due Payment */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <LocalAtm />
            {!isCollapsed && <span className="ml-4">Due Payment</span>}
          </li>

          {/* Stocks with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={toggleStockDropdown}
          >
            <Inventory />
            {!isCollapsed && (
              <>
                <span className="ml-4">Stocks</span>
                <span className="ml-auto">
                  {isStockDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isStockDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Inventory />
                <span className="ml-4">Add Product</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Description />
                <span className="ml-4">List Product</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Receipt />
                <span className="ml-4">GRN</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <QrCode />
                <span className="ml-4">Barcodes</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <ReceiptLong />
                <span className="ml-4">Damage Notes</span>
              </li>
            </ul>
          )}

          {/* Suppliers with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={toggleSuppliersDropdown}
          >
            <Groups />
            {!isCollapsed && (
              <>
                <span className="ml-4">Suppliers</span>
                <span className="ml-auto">
                  {isSuppliersDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isSuppliersDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Groups />
                <span className="ml-4">Add Supplier</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Groups />
                <span className="ml-4">List Suppliers</span>
              </li>
            </ul>
          )}

          {/* Salesmen with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={toggleSalesmenDropdown}
          >
            <Man />
            {!isCollapsed && (
              <>
                <span className="ml-4">Salesmen</span>
                <span className="ml-auto">
                  {isSalesmenDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isSalesmenDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Man />
                <span className="ml-4">Add Salesman</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Man />
                <span className="ml-4">List Salesmen</span>
              </li>
            </ul>
          )}

          {/* CRM */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <AccountCircle />
            {!isCollapsed && <span className="ml-4">CRM</span>}
          </li>

          {/* Earning and Expenses */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <AttachMoney />
            {!isCollapsed && <span className="ml-4">Earning and Expenses</span>}
          </li>

          {/* Users with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={toggleUsersDropdown}
          >
            <Person />
            {!isCollapsed && (
              <>
                <span className="ml-4">Users</span>
                <span className="ml-auto">
                  {isUsersDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isUsersDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Person />
                <span className="ml-4">Add User</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Person />
                <span className="ml-4">List Users</span>
              </li>
            </ul>
          )}

          {/* Report with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={toggleReportDropdown}
          >
            <Summarize />
            {!isCollapsed && (
              <>
                <span className="ml-4">Report</span>
                <span className="ml-auto">
                  {isReportDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isReportDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Assessment />
                <span className="ml-4">Stock Report</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Assessment />
                <span className="ml-4">Stock Details Report</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Assessment />
                <span className="ml-4">Invoice Details Report</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Assessment />
                <span className="ml-4">Stock Card</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Assessment />
                <span className="ml-4">Profit & Lost</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Assessment />
                <span className="ml-4">Supplier Report</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Assessment />
                <span className="ml-4">Earning Report</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Assessment />
                <span className="ml-4">Expenses Report</span>
              </li>
            </ul>
          )}

          {/* Settings with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={toggleSettingsDropdown}
          >
            <Settings />
            {!isCollapsed && (
              <>
                <span className="ml-4">Settings</span>
                <span className="ml-auto">
                  {isSettingsDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isSettingsDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Settings />
                <span className="ml-4">Invoice Settings</span>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <Settings />
                <span className="ml-4">User Settings</span>
              </li>
            </ul>
          )}

          {/* Apps */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <Apps />
            {!isCollapsed && <span className="ml-4">Apps</span>}
          </li>

          {/* Billing */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <ReceiptLong />
            {!isCollapsed && <span className="ml-4">Billing</span>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
