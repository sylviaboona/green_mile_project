import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewListIcon from '@material-ui/icons/ViewList';
import SettingsIcon from '@material-ui/icons/Settings';
// import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import CardGiftcardSharpIcon from '@material-ui/icons/CardGiftcardSharp';
import gmlogo from '../assets/img/profile3.jpg';
const SideBarSupplier = () => {
    return (
        <div className="side-bar">
             <img src={gmlogo} width="250" alt="GreenMileLogo" className="profile-image-supplier" />
        <br />
        <div >
            <br />
            <Link to="/supplierDash" className="sidebar-link"><DashboardIcon />  My Account</Link>
            <br />
            <br />
            <br />
            <Link to="/viewPackages" className="sidebar-link"> <CardGiftcardSharpIcon />   View Packages</Link>
            <br />
            <br />
            <br />
            <Link to="/viewOrders" className="sidebar-link"><ShoppingCartSharpIcon />   View Orders</Link>
            <br />
            <br />
            <br />
            <Link to="/viewReceipients" className="sidebar-link"><ViewListIcon />   View Receipients</Link>
            {/* <br/>
            <br/>
            <br/>
            <Link to="/viewInvoices" className="sidebar-link">View Invoices</Link> */}
            <br />
            <br />
            <br />
            <Link to="/settings" className="sidebar-link"> <SettingsIcon />    Settings</Link>
        </div>
        </div>
    )
}

export default SideBarSupplier
