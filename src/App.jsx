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
import AddSuppliers from './Pages/Suppliers/AddSuppliers/AddSuppliers.jsx';
import SupplierList from './Pages/Suppliers/SupplierList/SupplierList.jsx';
import PurchaseReturns from './Pages/Suppliers/PurchaseReturns/PurchaseReturns.jsx';
import SupplierCreditLogs from './Pages/Suppliers/Supplier Credit Logs/SupplierCreditLogs.jsx';
import NewPurchaseReturns from './Pages/Suppliers/NewPurchaseReturns/NewPurchaseReturns.jsx';
import Addsalesman from './Pages/Salesman/Addsalesman/Addsalesman.jsx';
import ListSalesmans from './Pages/Salesman/ListSalesmans/ListSalesmans.jsx';
import EarningsandExpenses from './Pages/Earnings-and-Expenses/Earnings-and-Expenses.jsx';
import AddUser from './Pages/AddUser/AddUser.jsx';
import ListUser from './Pages/User/ListUser/ListUser.jsx';
import StockReport from './Pages/Reports/StockReport/StockReport.jsx';
import StockDetailReport from './Pages/Reports/StockDetailReport/StockDetailReport.jsx';
import InvoiceDetailReport from './Pages/Reports/InvoiceDetailReport/InvoiceDetailReport.jsx';
import Stockcard from './Pages/Reports/StockCard/stockCard.jsx';
import SupplierReport from './Pages/Reports/SupplierReport/SupplierReport.jsx';
import EarningReport from './Pages/Reports/EarningReport/EarningReport.jsx';
import ExpensesReport from './Pages/Reports/ExpensesReport/ExpensesReport.jsx';
import PLReport from './Pages/Reports/PLReport/PLReport.jsx';
import InvoiceSettings from './Pages/Settings/Invoice-Settings/InvoiceSettings.jsx';
import SystemSettings from './Pages/Settings/System-Settings/SystemSettings.jsx';
import Apps from './Pages/App/Apps.jsx';



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
              <Route path="/add-supplier" element={<AddSuppliers/>}/>
              <Route path="/list-suppliers" element={<SupplierList/>}/>
              <Route path="/PurchaseReturns" element={<PurchaseReturns/>}/>
              <Route path="/Suppliers-Credit-Log" element={<SupplierCreditLogs/>}/>
              <Route path="/NewPurchaseReturn" element={<NewPurchaseReturns/>}/>
              <Route path="/add-salesman" element={<Addsalesman/>}/>
              <Route path="/list-salesmen" element={<ListSalesmans/>}/>
              <Route path="/Earning-&-Expenses" element={<EarningsandExpenses/>}/>
              <Route path="/add-user" element={<AddUser/>}/>
              <Route path="/list-users" element={<ListUser/>}/>
              <Route path="/sales-report" element={<StockReport/>}/>
              <Route path="/profit-report" element={<StockDetailReport/>}/>
              <Route path="/invoice-report" element={<InvoiceDetailReport/>}/>
              <Route path="/stock-report" element={<Stockcard/>}/>
              <Route path="/Supplier-report" element={<SupplierReport/>}/>
              <Route path="/Earning-report" element={<EarningReport/>}/>
              <Route path="/Expenses-report" element={<ExpensesReport/>}/>
              <Route path="/profit-Lost-report" element={<PLReport/>}/>
              <Route path="/app-settings" element={<InvoiceSettings/>}/>
              <Route path="/user-settings" element={<SystemSettings/>}/>
              <Route path="/app" element={<Apps/>}/>
              




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
