import React from 'react';
import {Link} from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="side-bar">
            <Link to="/adminDash" className="sidebar-link">Admin Dashboard</Link>
            <br/>
            <Link to="/viewLoaders" className="sidebar-link">View Loaders</Link>
            <br/>
            <Link to="/viewSuppliers" className="sidebar-link">View Suppliers</Link>
            <br/>
            <Link to="/viewReceipients" className="sidebar-link">View Receipients</Link>
            <br/>
            <Link to="/viewInvoices" className="sidebar-link">View Invoices</Link>
            <br/>
            <Link to="/settings" className="sidebar-link">Settings</Link>
            
        </div>
    )
}

export default SideBar
