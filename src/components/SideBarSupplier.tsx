import React from 'react'
import { Link } from 'react-router-dom'

const SideBarSupplier = () => {
    return (
<div className="side-bar">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/supplierDash" className="sidebar-link">Supplier Dashboard</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/viewPackages" className="sidebar-link">View Packages</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/viewOrders" className="sidebar-link">View Orders</Link>
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
        </div>
    )
}

export default SideBarSupplier
