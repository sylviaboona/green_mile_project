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
        <div className="side-bar">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/adminDash" className="sidebar-link"> <DashboardIcon/>   Admin Dashboard</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/viewLoaders" className="sidebar-link"> <ViewListIcon/>     View Loaders</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/viewSuppliers" className="sidebar-link"><ViewListIcon/>     View Suppliers</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/viewReceipients" className="sidebar-link"><ViewListIcon/>    View Receipients</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/viewInvoices" className="sidebar-link"><ReceiptIcon/>   View Invoices</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/settings" className="sidebar-link"><SettingsIcon/>    Settings</Link>
            {/* <Footer/> */}
        </div>
    )
}

export default SideBar
