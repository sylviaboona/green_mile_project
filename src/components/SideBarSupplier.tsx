import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewListIcon from '@material-ui/icons/ViewList';
import SettingsIcon from '@material-ui/icons/Settings';
// import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import CardGiftcardSharpIcon from '@material-ui/icons/CardGiftcardSharp';
const SideBarSupplier = () => {
    return (
        <div className="side-bar">

            <br />
            <br />
            <br />
            <div >
                <DashboardIcon className="sidebar-link sidebar-icon" />
                <br />
                <Link to="/supplierDash" className="sidebar-link sidebar-link-supplier">My Account</Link>
                <br />
                <hr className="linebreak" />
                <br />
                <CardGiftcardSharpIcon className="sidebar-link sidebar-icon" />
                <br />
                <Link to="/viewPackages" className="sidebar-link sidebar-link-supplier">Packages</Link>
                <hr className="linebreak" />
                <br />
                <ShoppingCartSharpIcon className="sidebar-link sidebar-icon" />
                <br />
                <Link to="/viewOrders" className="sidebar-link sidebar-link-supplier">Orders</Link>
                <hr className="linebreak" />
                <br />
                <ViewListIcon className="sidebar-link sidebar-icon" />
                <br />
                <Link to="/viewReceipients" className="sidebar-link sidebar-link-supplier">Receipients</Link>
                <hr className="linebreak" />
                <br />
                <SettingsIcon className="sidebar-link sidebar-icon" />
                <br />
                <Link to="/settings" className="sidebar-link sidebar-link-supplier">Settings</Link>
            </div>
        </div>
    )
}

export default SideBarSupplier
