import React from 'react';
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const ViewSuppliers = () => {
    return (
<div className="page-container">
            <NavBar />
            <SideBar />
            <div className="page-right-panel">
                <br/>
            <Link to="/addSupplier" className="signup-btn">ADD SUPPLIER</Link>
            </div>
            <Footer />
        </div>
    )
}

export default ViewSuppliers
