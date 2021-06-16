import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-link">ABOUT</Link>
            <Link to="/login" className="navbar-link">LOGIN</Link>
            {/* <Link to="/projects">Projects</Link> */}
        </div>
    )
}

export default NavBar
