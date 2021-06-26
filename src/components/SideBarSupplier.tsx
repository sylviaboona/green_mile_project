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
        <br />
        <div >
        <DashboardIcon className="sidebar-link sidebar-icon"/> 
            <br />
            <Link to="/supplierDash" className="sidebar-link">My Account</Link>
            <hr className="linebreak"/>
            <CardGiftcardSharpIcon className="sidebar-link sidebar-icon"/>
            <br/>
            <Link to="/viewPackages" className="sidebar-link">Packages</Link>
            <hr className="linebreak"/>
            <ShoppingCartSharpIcon className="sidebar-link sidebar-icon"/>
            <br/>
            <Link to="/viewOrders" className="sidebar-link">Orders</Link>
            <hr className="linebreak"/>
            <ViewListIcon className="sidebar-link sidebar-icon"/>
            <br/>
            <Link to="/viewReceipients" className="sidebar-link">Receipients</Link>
            <hr className="linebreak"/>
            <SettingsIcon className="sidebar-link sidebar-icon"/>
            <br/>
            <Link to="/settings" className="sidebar-link">Settings</Link>
        </div>
        </div>
    )
}

export default SideBarSupplier
