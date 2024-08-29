import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Dashboard,
  People,
  Receipt,
  ReceiptLong,
  ExpandMore,
  ExpandLess,
  ArrowBack,
  PersonAdd,
  Group,
  Description,
  Replay,
  QrCode,
  Inventory,
  Groups,
  Man,
  Person,
  Summarize,
  Settings,
  Apps,
  TaskAlt,
  AccountBalanceWallet,
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
  const [isQuotationDropdownOpen, setIsQuotationDropdownOpen] = useState(false);
  const [isInvoiceDropdownOpen, setIsInvoiceDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${
        isCollapsed ? '2xl:w-[5.75rem]' : '2xl:w-[17.56rem]'
      } bg-white h-screen shadow-md flex flex-col transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleSidebar}>
          <Apps fontSize="large" />
        </button>
        {!isCollapsed && (
          <button onClick={toggleSidebar}>
            {isCollapsed ? <ExpandMore /> : <ArrowBack />}
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
            <NavLink to="/" activeClassName="text-purple-600">
              <Dashboard />
              {!isCollapsed && <span className="ml-4">Dashboard</span>}
            </NavLink>
          </li>

          {/* Customers with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={() => setIsCustomerDropdownOpen(!isCustomerDropdownOpen)}
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
                <NavLink to="/add-customer">
                  <PersonAdd />
                  <span className="ml-4">Add Customers</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/list-customers">
                  <Group />
                  <span className="ml-4">List Customers</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/customer-credit-log">
                  <Description />
                  <span className="ml-4">Customer Credit Log</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/customer-return">
                  <Replay />
                  <span className="ml-4">Customer Return</span>
                </NavLink>
              </li>
            </ul>
          )}


           {/* Quotation with Dropdown */}
           <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={() => setIsQuotationDropdownOpen(!isQuotationDropdownOpen)}
          >
            <Receipt />
            {!isCollapsed && (
              <>
                <span className="ml-4">Quotation</span>
                <span className="ml-auto">
                  {isQuotationDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isQuotationDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/quotation">
                  <Receipt />
                  <span className="ml-4">Quotation</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/add-quotation">
                  <Receipt />
                  <span className="ml-4">Add Quotation</span>
                </NavLink>
              </li>
            </ul>
          )}


          {/* Invoice with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={() => setIsInvoiceDropdownOpen(!isInvoiceDropdownOpen)}
          >
            <NavLink to="/Invoice">
              <ReceiptLong />
            </NavLink>
            {!isCollapsed && (
              <>
                <span className="ml-4">Invoice</span>
                <span className="ml-auto">
                  {isInvoiceDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isInvoiceDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/Invoice">
                  <ReceiptLong />
                  <span className="ml-4">Invoice</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/add-invoice">
                  <ReceiptLong />
                  <span className="ml-4">Add Invoice</span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* Due Payment */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <NavLink to="/due-payment" activeClassName="text-purple-600">
              <Receipt />
              {!isCollapsed && <span className="ml-4">Due Payment</span>}
            </NavLink>
          </li>

          {/* Stock with Dropdown*/}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={() => setIsStockDropdownOpen(!isStockDropdownOpen)}
          >
            <Inventory />
            {!isCollapsed && (
              <>
                <span className="ml-4">Stock</span>
                <span className="ml-auto">
                  {isStockDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isStockDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/add-product">
                  <Inventory />
                  <span className="ml-4">Add Product</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/list-product">
                  <People />
                  <span className="ml-4">List Product</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/grn">
                  <People />
                  <span className="ml-4">GRN</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/add-grn">
                  <People />
                  <span className="ml-4">Add GRN</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/barcodes">
                  <QrCode />
                  <span className="ml-4">Barcodes</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/damagenotes">
                  <Receipt />
                  <span className="ml-4">Damage Notes</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/add-damagenotes">
                  <Receipt />
                  <span className="ml-4">Add Damage Notes</span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* Suppliers with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={() => setIsSuppliersDropdownOpen(!isSuppliersDropdownOpen)}
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
                <NavLink to="/add-supplier">
                  <PersonAdd />
                  <span className="ml-4">Add Supplier</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/list-suppliers">
                  <Group />
                  <span className="ml-4">List Suppliers</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/list-suppliers">
                  <Group />
                  <span className="ml-4">Suppliers Credit Log</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/list-suppliers">
                  <Group />
                  <span className="ml-4">Returns</span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* Salesmen with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={() => setIsSalesmenDropdownOpen(!isSalesmenDropdownOpen)}
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
                <NavLink to="/add-salesman">
                  <PersonAdd />
                  <span className="ml-4">Add Salesman</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/list-salesmen">
                  <Group />
                  <span className="ml-4">List Salesmen</span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* CRM */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <NavLink to="/crm" activeClassName="text-purple-600">
              <People />
              {!isCollapsed && <span className="ml-4">CRM</span>}
            </NavLink>
          </li>

          {/* Task Manager */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <NavLink to="/Task-Manager" activeClassName="text-purple-600">
              <TaskAlt />
              {!isCollapsed && <span className="ml-4">Task Manager</span>}
            </NavLink>
          </li>

          {/* Earning & Expenses  */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
          >
            <NavLink to="/Earning-&-Expenses" activeClassName="text-purple-600">
              <AccountBalanceWallet />
              {!isCollapsed && <span className="ml-4">Earning & Expenses </span>}
            </NavLink>
          </li>


          



          {/* Users with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={() => setIsUsersDropdownOpen(!isUsersDropdownOpen)}
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
                <NavLink to="/add-user">
                  <PersonAdd />
                  <span className="ml-4">Add User</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/list-users">
                  <Group />
                  <span className="ml-4">List Users</span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* Reports with Dropdown */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={() => setIsReportDropdownOpen(!isReportDropdownOpen)}
          >
            <Summarize />
            {!isCollapsed && (
              <>
                <span className="ml-4">Reports</span>
                <span className="ml-auto">
                  {isReportDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                </span>
              </>
            )}
          </li>
          {isReportDropdownOpen && !isCollapsed && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/sales-report">
                  <Description />
                  <span className="ml-4">Stock Report</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/profit-report">
                  <Description />
                  <span className="ml-4">Stock Details Report</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/profit-report">
                  <Description />
                  <span className="ml-4">Invoice Details Report</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/profit-report">
                  <Description />
                  <span className="ml-4">Stock Card</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/profit-report">
                  <Description />
                  <span className="ml-4">Profit & Lost</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/profit-report">
                  <Description />
                  <span className="ml-4">Supplier Report</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/profit-report">
                  <Description />
                  <span className="ml-4">Earning Report</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/profit-report">
                  <Description />
                  <span className="ml-4">Expenses Report</span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* Settings */}
          <li
            className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
              isCollapsed ? 'justify-center text-center' : ''
            }`}
            onClick={() => setIsSettingsDropdownOpen(!isSettingsDropdownOpen)}
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
                <NavLink to="/app-settings">
                  <Settings />
                  <span className="ml-4">Invoice Settings</span>
                </NavLink>
              </li>
              <li className="flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer">
                <NavLink to="/user-settings">
                  <Person />
                  <span className="ml-4">App Settings</span>
                </NavLink>
              </li>

              
            </ul>
          )}

<li
                className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
                  isCollapsed ? 'justify-center text-center' : ''
                }`}
              >
                <NavLink to="/app">
                  <Apps />
                  {!isCollapsed && <span className="ml-4">App</span>}
                </NavLink>
              </li>

    
              <li
                className={`flex items-center p-2 text-[#ADB5BD] hover:bg-purple-300 hover:text-white rounded-md cursor-pointer ${
                  isCollapsed ? 'justify-center text-center' : ''
                }`}
              >
                <NavLink to="/billing">
                  <ReceiptLong />
                  {!isCollapsed && <span className="ml-4">Billing</span>}
                </NavLink>
              </li>


         
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
