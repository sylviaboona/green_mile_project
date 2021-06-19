import React from 'react';
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom';

const ViewLoaders = () => {
    return (
        <div className="page-container">

            <SideBar />
            <div className="page-right-panel">
                <br />
                <Link to="/addLoader" className="signup-btn">ADD LOADER</Link>
            </div>
        </div>
    )
}

export default ViewLoaders
