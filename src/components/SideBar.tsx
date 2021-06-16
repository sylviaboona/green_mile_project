import React from 'react';
import {Link} from 'react-router-dom'
// import Footer from './Footer'

const SideBar = () => {
    return (
        <div className="side-bar">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/adminDash" className="sidebar-link">Admin Dashboard</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/viewLoaders" className="sidebar-link">View Loaders</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/viewSuppliers" className="sidebar-link">View Suppliers</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/viewReceipients" className="sidebar-link">View Receipients</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/viewInvoices" className="sidebar-link">View Invoices</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/settings" className="sidebar-link">Settings</Link>
            {/* <Footer/> */}
        </div>
    )
}

export default SideBar
