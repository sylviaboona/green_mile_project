import React from 'react'
import SideBarSupplier from '../components/SideBarSupplier'

const CreatePackage = () => {
    return (
<div className="page-container">

<SideBarSupplier />
<div className="page-right-panel">
    <form className="add-loader-form">
        <input type="text" name="package name" placeholder="Package Name" className="form-control form-signup" />
        <br />
        <input type="text" name="receipient" placeholder="Receipent" className="form-control form-signup" />
        <br />
        <input type="text" name="phone" placeholder="Address/Contact" className="form-control form-signup" />
        <br />
        <input type="text" name="delivery time" placeholder="Delivery Time" className="form-control form-signup" />
        <br />
        <input type="text" name="delivery cost" placeholder="Delivery Cost" className="form-control form-signup" />
        <br />
        <input type="text" name="cpassword" placeholder="Confirm Password" className="form-control form-signup" />
        <br />
        <input type="submit" value="Create Package" className="btn form-signup" />
    </form>
</div>

</div>
    )
}

export default CreatePackage
