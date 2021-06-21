import React from 'react'
import {Link} from 'react-router-dom'
// import gmlogo from '../assets/img/twitter_header_photo_1.png'

const NavBar = () => {
    return (
        <div className="navbar">
            {/* <img src={gmlogo} width="200" alt="" /> */}
            <Link to="/" className="navbar-link">HOME</Link>
            <Link to="/adminDash" className="navbar-link">ADMIN DASHBOARD</Link>
            <Link to="/supplierDash" className="navbar-link">SUPPLIER DASHBOARD</Link>
            <Link to="/login" className="navbar-link">LOGIN</Link>
            
        </div>
    )
}

export default NavBar
