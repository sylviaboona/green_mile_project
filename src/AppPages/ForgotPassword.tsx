import React from 'react'
// import gmlogo from '../assets/img/mgc_logo.png';
import doorDelivery from '../assets/img/doordelivery.jpg'
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
    let history = useHistory();
    return (
        <div className="container login-page-container">

            <div className="login-left-panel">
                <p className="tagline-loginpage">Your number one package delivery partner</p>
                <img src={doorDelivery} alt="Door Delivery img" className="login-left-panel-img" />
            </div>
            <div className="login-right-panel">
                {/* <img src={gmlogo} width="250" alt="GreenMileLogo" className="logo-login" /> */}
                <form className="login-form">
                    <input type="text" name="name" placeholder="Email" className="form-control" />
                    <br />
                    <input type="text" name="npassword" placeholder="New Password" className="form-control" />
                    <br />
                    <input type="text" name="cpassword" placeholder="Confirm Password" className="form-control" />
                    <br />
                    <input type="submit" value="Change Password" className="btn login-btn" onClick={()=>history.push("/")}/>
                </form>
            </div>

        </div>
    )
}

export default ForgotPassword
