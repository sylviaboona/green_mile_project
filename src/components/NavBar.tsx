import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/addLoader" className="navbar-link">ADD LOADER</Link>
            <Link to="/" className="navbar-link">LOGIN</Link>
            {/* <Link to="/projects">Projects</Link> */}
        </div>
    )
}

export default NavBar
