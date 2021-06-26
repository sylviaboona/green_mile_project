import React from 'react'
import { Link } from 'react-router-dom'
import SideBarSupplier from '../components/SideBarSupplier'

const SupplierDash = () => {
    return (
        <div className="page-container">
            <SideBarSupplier />
            <div className="page-right-panel">
                <br />
            <Link to="/viewInvoices" className="btn btn-sm signup-btn">INVOICES</Link>
            </div>
        </div>
    )
}

export default SupplierDash
