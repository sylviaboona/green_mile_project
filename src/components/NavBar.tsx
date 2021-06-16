import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            {/* <Link to="/">HOME</Link> */}
            <Link to="/addLoader" className="navbar-link">ADD LOADER</Link>
            <Link to="/login" className="navbar-link">LOGIN</Link>
            
        </div>
    )
}

export default NavBar
