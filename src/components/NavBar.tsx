import React from 'react'
import gmlogo from '../assets/img/mgc_logo2.png';
import profile from '../assets/img/profile3.jpg';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const NavBar = () => {
    return (
        < div >
            <div className="navbar">
                <img src={gmlogo} alt="GreenMileLogo" className="logo-nav" />
                <input type="search" name="" id="" placeholder="Search" className="form-control search-input" /><SearchRoundedIcon/>
                <img src={profile} alt="GreenMileLogo" className="profile-image-supplier" />
            </div>
        </div>
    )
}

export default NavBar
