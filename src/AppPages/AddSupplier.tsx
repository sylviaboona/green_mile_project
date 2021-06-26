import React from 'react';
// import SideBar from '../components/SideBar'
import SideBarSignup from '../components/SideBarSignup';


const AddSupplier = () => {
    return (
        <div className="login-page-container">

            <SideBarSignup />
            <div className="page-right-panel page-right-panel-signup">
                <form className="signup-form">
                    <input type="text" name="name" placeholder="Name" className="form-control signup-form-input" />
                    <br />
                    <input type="text" name="email" placeholder="Email" className="form-control signup-form-input" />
                    <br />
                    <input type="text" name="phone" placeholder="Phone" className="form-control signup-form-input" />
                    <br />
                    <input type="text" name="dob" placeholder="Date of Birth" className="form-control signup-form-input" />
                    <br />
                    <input type="text" name="password" placeholder="Password" className="form-control signup-form-input" />
                    <br />
                    <input type="text" name="cpassword" placeholder="Confirm Password" className="form-control signup-form-input" />
                    <br />
                    <input type="submit" value="Register Supplier" className="btn signup-form-input" />
                </form>
            </div>

        </div>
    )
}

export default AddSupplier
