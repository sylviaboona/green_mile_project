import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Settings = () => {
    return (
<div className="page-container">
            <NavBar />
            <SideBar />
            <div className="page-right-panel">
                SETTINGS
            {/* <Link to="/addLoader" className="signup-btn">ADD SUPPLIER</Link> */}
            </div>
            <Footer />
        </div>
    )
}

export default Settings
