import React from 'react';
import {Link} from 'react-router-dom'

// import Icon from '@material-ui/core/Icon'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewListIcon from '@material-ui/icons/ViewList';
import SettingsIcon from '@material-ui/icons/Settings';
import ReceiptIcon from '@material-ui/icons/Receipt';
// import Footer from './Footer'

const SideBar = () => {
    return (
        <div className="container side-bar">
            {/* <div className="row"> */}
            <br/>
            <br/>
            <DashboardIcon className="sidebar-link sidebar-icon"/> 
            <br />
            <Link to="/adminDash" className="sidebar-link">Dashboard</Link>
            <hr className="linebreak"/>
            <ViewListIcon className="sidebar-link sidebar-icon"/>
            <br/>
            <Link to="/viewLoaders" className="sidebar-link">Loaders</Link>
            <hr className="linebreak"/>
            <ViewListIcon className="sidebar-link sidebar-icon"/>
            <br/>
            <Link to="/viewSuppliers" className="sidebar-link">Suppliers</Link>
            <hr className="linebreak"/>
            <ViewListIcon className="sidebar-link sidebar-icon"/>
            <br/>
            <Link to="/viewReceipients" className="sidebar-link">Receipients</Link>
            <hr className="linebreak"/>
            <ReceiptIcon className="sidebar-link sidebar-icon"/>
            <br/>
            <Link to="/viewInvoices" className="sidebar-link">Invoices</Link>
            <hr className="linebreak"/>
            <SettingsIcon className="sidebar-link sidebar-icon"/>
            <br/>
            <Link to="/settings" className="sidebar-link">Settings</Link>
            {/* <hr className="linebreak"/> */}
        </div>
             
        // </div>
    )
}

export default SideBar
