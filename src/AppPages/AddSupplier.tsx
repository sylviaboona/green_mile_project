import React from 'react';
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const AddSupplier = () => {
    return (
<div className="page-container">
            <NavBar />
            <SideBar />
            <div className="page-right-panel">
                <form className="add-loader-form">
                    <input type="text" name="name" placeholder="Name" className="form-control form-signup" />
                    <br />
                    <input type="text" name="email" placeholder="Email" className="form-control form-signup" />
                    <br />
                    <input type="text" name="phone" placeholder="Phone" className="form-control form-signup" />
                    <br />
                    <input type="text" name="dob" placeholder="Date of Birth" className="form-control form-signup" />
                    <br />
                    <input type="text" name="password" placeholder="Password" className="form-control form-signup" />
                    <br />
                    <input type="text" name="cpassword" placeholder="Confirm Password" className="form-control form-signup" />
                    <br />
                    <input type="submit" value="Register Supplier" className="btn form-signup" />
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AddSupplier
