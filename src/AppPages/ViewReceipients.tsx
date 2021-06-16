import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
// import { Link } from 'react-router-dom';
import gmlogo from '../assets/img/twitter_header_photo_1.png'

const ViewRecepients = () => {
    return (
        <div className="page-container">
            <img src={gmlogo} width="200" alt="" />
            <NavBar />
            <SideBar />
            <div className="page-right-panel">
                VIEW RECEIPIENTS
                {/* <Link to="/addLoader" className="signup-btn">ADD SUPPLIER</Link> */}
            </div>
            <Footer />
        </div>
    )
}

export default ViewRecepients
