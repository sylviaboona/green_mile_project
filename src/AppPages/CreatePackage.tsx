import React from 'react'
import { useState } from 'react'
import SideBarSupplier from '../components/SideBarSupplier'

// const handleSubmit = ()=>{

// }

const CreatePackage = () => {
    const [packageName, setPackageName] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [time, setTime] = useState('')
    const [cost, setCost] = useState('')


    const onSubmit = (e: any) => {
        e.preventDefault()

        if (!packageName) {
            alert('Please add a package')
            return
        }
        setPackageName('')
        setName('')
        setAddress('')
        setPhone('')
        setTime('')
        setCost('')
    }
    return (
        <div className="page-container">

            <SideBarSupplier />
            <div className="page-right-panel">
                <form className="add-loader-form" onSubmit={onSubmit}>
                    <input type="text" name="packagename" placeholder="Package Name" className="form-control form-signup" value={packageName} onChange={(e) => setPackageName(e.target.value)} />
                    <br />
                    <input type="text" name="receipient" placeholder="Receipent" className="form-control form-signup" value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input type="text" name="address" placeholder="Address" className="form-control form-signup" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <br />
                    <input type="text" name="phone" placeholder="Contact" className="form-control form-signup" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <br />
                    <input type="text" name="delivery time" placeholder="Delivery Time" className="form-control form-signup" value={time} onChange={(e) => setTime(e.target.value)} />
                    <br />
                    <input type="text" name="delivery cost" placeholder="Delivery Cost" className="form-control form-signup" value={cost} onChange={(e) => setCost(e.target.value)} />
                    <br />
                    <input type="submit" value="Create Package" className="btn form-signup" />
                </form>
            </div>

        </div>
    )
}

export default CreatePackage
