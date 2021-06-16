import React from 'react';
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
const AddLoader = () => {
    return (
        <div className="page-container">
            <NavBar />
            <SideBar />
            <form className="add-loader-form">
                    <input type="text" name="name" placeholder="Name" className="form-control" />
                    <br />
                    <input type="text" name="email" placeholder="Email" className="form-control" />
                    <br />
                    <input type="text" name="phone" placeholder="Phone" className="form-control" />
                    <br />
                    <input type="text" name="dob" placeholder="Date of Birth" className="form-control" />
                    <br />
                    <input type="text" name="password" placeholder="Password" className="form-control" />
                    <br />
                    <input type="text" name="cpassword" placeholder="Confirm Password" className="form-control" />
                    <br />
                    <input type="submit" value="Register Loader" className="btn" />
            </form>
            <Footer/>
        </div>
    )
}

export default AddLoader
