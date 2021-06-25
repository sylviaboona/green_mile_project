import React from 'react'
import { Link } from 'react-router-dom'

const SideBarCreatePackage = () => {
    return (
<div className="side-bar side-bar-signup">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/supplierDash" className="sidebar-link">My Account</Link>
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

export default SideBarCreatePackage
