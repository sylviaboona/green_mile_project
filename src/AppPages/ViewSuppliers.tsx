import React from 'react';
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom';

const ViewSuppliers = () => {
    return (
<div className="page-container">
            <SideBar />
            <div className="page-right-panel">
                <br/>
            <Link to="/addSupplier" className="signup-btn">ADD SUPPLIER</Link>
            </div>
        </div>
    )
}

export default ViewSuppliers
