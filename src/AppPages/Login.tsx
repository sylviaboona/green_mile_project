import React, { useState } from 'react'
// import gmlogo from '../assets/img/mgc_logo.png';
import doorDelivery from '../assets/img/doordelivery.jpg'
import { Link, useHistory } from 'react-router-dom';


const LoginForm = () => {
    let history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handleSubmit = () => {
    //     localStorage.setItem('Email', email);
    //     localStorage.setItem('Password', password);
    // };


    const submitUserData = (e: any) => {
        e.preventDefault()

        if (!email) {
            alert('Please enter email')
            return
        }
        const user = {
            email: email,
            password: password,

        }

        const storedEmail = localStorage.getItem('email');
        const storedPwd = localStorage.getItem('password');
        if (user.email !== storedEmail || user.password !== storedPwd) {
            alert('oooooops')
        } else {
            history.push("/adminDash")
        }

    }
    return (
        <>
            <div className="container login-page-container">

                <div className="login-left-panel">
                    <p className="tagline-loginpage">Your number one package delivery partner</p>
                    <img src={doorDelivery} alt="Door Delivery img" className="login-left-panel-img" />
                </div>
                <div className="login-right-panel">
                    {/* <img src={gmlogo} width="30%" alt="GreenMileLogo" className="logo-login" /> */}
                    <form className="login-form" onSubmit={submitUserData}>
                        <input type="text" name="name" placeholder="Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <input type="text" name="password" placeholder="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <input type="submit" value="Login" className="btn login-btn" />
                        {/* //onClick={() => { history.push("/adminDash")}} */}
                        <p className="forgot-password"><Link to="/forgotPassword" className="forgot-password"><i>Forgot Password?</i></Link></p>
                    </form>
                </div>
            </div>

        </>



    )
}

export default LoginForm
