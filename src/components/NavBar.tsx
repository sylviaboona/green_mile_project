import React from 'react'
import { Link } from 'react-router-dom'
// import Login from '../AppPages/Login'
import gmlogo from '../assets/img/mgc_logo2.png';
import profile from '../assets/img/profile3.jpg';

const NavBar = () => {
    // if (<Login />){
    //     return (
    //         <div className="navbar">
    //             <Link to="/adminDash" className="navbar-link">ADMIN DASHBOARD</Link>
    //             <Link to="/supplierDash" className="navbar-link">SUPPLIER DASHBOARD</Link>
    //         </div>
    //     )
    // } else{
    return (
        < div >
            {/* <img src={gmlogo} width="250" alt="GreenMileLogo" className="logo-nav" /> */}
            <div className="navbar">
            <img src={gmlogo} width="250" alt="GreenMileLogo" className="logo-nav"/>
                <Link to="/adminDash" className="navbar-link">ADMIN DASHBOARD</Link>
                <Link to="/supplierDash" className="navbar-link">SUPPLIER DASHBOARD</Link>
                <Link to="/" className="navbar-link">LOGIN</Link>
                <img src={profile} width="250" alt="GreenMileLogo" className="profile-image-supplier" />
            </div>
        </div>
    )

    // }

}

export default NavBar
