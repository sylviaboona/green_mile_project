import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../AppPages/Login'
// import gmlogo from '../assets/img/twitter_header_photo_1.png'

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
            <div className="navbar">
                <Link to="/adminDash" className="navbar-link">ADMIN DASHBOARD</Link>
                <Link to="/supplierDash" className="navbar-link">SUPPLIER DASHBOARD</Link>
                <Link to="/" className="navbar-link">LOGIN</Link>
            </div>
        )

    // }
        
}

export default NavBar
