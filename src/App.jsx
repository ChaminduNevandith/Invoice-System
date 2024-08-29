import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Component/SideBar/Sidebar.jsx';
import TopBar from './Component/TopBar/TopBar.jsx';
import SettingButton from './Component/SettingButton/SettingButton.jsx';
import RightSideBar from './Component/RightSideBar/RightSideBar.jsx';
import Title from './Component/Title/Title.jsx';
import DashBoard from './Pages/Dashboard/DashBoard.jsx';
import CustomersAdd from './Pages/Customers/CustomerAdd/CustomersAdd.jsx'
import CustomerList from './Pages/Customers/CustomerList/CustomerList.jsx';
import CustomerCreditLogs from './Pages/Customers/CustomerCreditLogs/CustomerCreditLogs.jsx';
import CustomersReturn from './Pages/Customers/CustomersReturn/CustomersReturn.jsx';
import AddQuotation from './Pages/Quotations/AddQuotation/AddQuotation.jsx';
import Quotation from './Pages/Quotations/Quotation/Quotation.jsx';
import AddInvoice from './Pages/Invoice/AddInvoice/AddInvoice.jsx';
import Invoice from './Pages/Invoice/Invoice/Invoice.jsx';
import AddProduct from './Pages/Stocks/AddProduct/AddProduct.jsx';
import ListProduct from './Pages/Stocks/ListProduct/ListProduct.jsx';
import GRN from './Pages/Stocks/GRN/GRN.jsx';
import AddGRN from './Pages/Stocks/AddGRN/AddGRN.jsx';
import Barcode from './Pages/Stocks/Barcode/Barcode.jsx';
import AddDamageNotes from './Pages/Stocks/AddDamageNotes/AddDamageNotes.jsx';
import DamageNote from './Pages/Stocks/DamageNote/DamageNote.jsx';
import { Add } from '@mui/icons-material';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className='body'>
        <div className='main-content'>
          {/* Sidebar */}
          <div className='sidebar-container'>
            <Sidebar />
          </div>
          
          {/* Main Content */}
          <div className='content'>
            {/* TopBar and Title */}
            <div className='topbar-title-container'>
              <TopBar />
              <Title />
            </div>
            
            {/* Routes */}
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/add-customer" element={<CustomersAdd/>}/> 
              <Route path="/list-customers" element={<CustomerList/>}/>
              <Route path="/customer-credit-log" element={<CustomerCreditLogs/>}/>
              <Route path="/customer-return" element={<CustomersReturn/>}/>
              <Route path="/add-quotation" element={<AddQuotation/>}/>
              <Route path="/quotation" element={<Quotation/>}/>
              <Route path="/add-invoice" element={<AddInvoice/>}/>
              <Route path="/invoice" element={<Invoice/>}/>
              <Route path="/add-product" element={<AddProduct/>}/>
              <Route path="/list-product" element={<ListProduct/>}/>
              <Route path="/grn" element={<GRN/>}/>
              <Route path="/add-grn" element={<AddGRN/>}/>
              <Route path="/Barcodes" element={<Barcode/>}/>
              <Route path="/add-damagenotes" element={<AddDamageNotes/>}/>
              <Route path="/damagenotes" element={<DamageNote/>}/>



            </Routes>
          </div>

          {/* Right Sidebar */}
          {isSidebarOpen && <RightSideBar setIsSidebarOpen={setIsSidebarOpen} />}
        </div>

        {/* Setting Button */}
        <div className='setting-button-container'>
          <SettingButton setIsSidebarOpen={setIsSidebarOpen} />
        </div>
      </div>
    </Router>
  );
}

export default App;
