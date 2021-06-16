import React from 'react';
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const ViewLoaders = () => {
    return (
<div className="page-container">
            <NavBar />
            <SideBar />
            <div className="page-right-panel">
                <br/>
            <Link to="/addLoader" className="signup-btn">ADD LOADER</Link>
            </div>
            <Footer />
        </div>
    )
}

export default ViewLoaders
