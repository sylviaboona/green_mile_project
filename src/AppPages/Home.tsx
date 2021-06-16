import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="login-left-panel">
                <p className="tagline-loginpage">Your number one delivery partner</p>
                {/* <img src={doorDelivery} alt="Door Delivery img" className="login-left-panel-img" /> */}
            </div>
        </div>
    )
}

export default Home
