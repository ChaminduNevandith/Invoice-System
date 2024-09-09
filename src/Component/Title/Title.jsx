import React from 'react';
import { useLocation } from 'react-router-dom';

function Title() {
  const location = useLocation();

  // Function to return the title based on the current path
  const getTitle = () => {
    switch (location.pathname) {
      case '/add-customer':
        return 'Customer';
      case '/list-customers':
        return 'Customer';
      case '/customer-credit-log':
        return 'Customer';
      case '/customer-return':
        return 'Customer';
      case '/new-customer-return':
        return 'Customer';

        case '/quotation':
        return 'Quotation';
      case '/add-quotation':
        return 'Quotation';

      case '/Invoice':
        return 'Invoice';
      case '/add-invoice':
        return 'Invoice';

      case '/due-payment':
        return 'Due Payment';

        case '/add-product':
        return 'Stocks';
      case '/list-product':
        return 'Stocks';
      case '/grn':
        return 'Stocks';
      case '/add-grn':
        return 'Stocks';
      case '/barcodes':
        return 'Stocks';
        case '/damagenotes':
        return 'Stocks';
      case '/add-damagenotes':
        return 'Stocks';

      case '/add-supplier':
        return 'Suppliers';
      case '/list-supplier':
        return 'Suppliers';
      case '/Suppliers-Credit-Log':
        return 'Suppliers';
        case '/PurchaseReturns':
          return 'Suppliers';
        case '/NewPurchaseReturn':
          return 'Suppliers';

        case '/add-salesman':
          return 'Salesman';
        case '/list-salesmen':
          return 'Salesman';

        case '/crm':
          return 'CRM';

          case '/Task-Manager':
          return 'Task Manager';

        case '/Earning-&-Expenses':
          return 'Earnings & Expenses';
  
        case '/add-user':
          return 'User';
        case '/list-users':
          return 'User';

        case '/sales-report':
          return 'Reports';
          case '/profit-report':
            return 'Reports';
          case '/invoice-report':
            return 'Reports';
          case '/stock-report':
            return 'Reports';
          case '/profit-Lost-report':
            return 'Reports';
          case '/Supplier-report':
            return 'Reports';
            case '/Earning-report':
            return 'Reports';
          case '/Expenses-report':
            return 'Reports';
    
          case '/app-settings':
            return 'Settings';
          case '/user-settings':
            return 'Settings';

          case '/app':
            return 'Apps';

            case '/billing':
            return 'Billing';

      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="border-t-2 border-black w-full h-[40px] bg-white drop-shadow-sm flex items-center justify-start px-4">
      <span className="text-[#264164] text-base font-semibold sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
        {getTitle()}
      </span>
    </div>
  );
}

export default Title;
