import React from 'react'
import { useState } from 'react'
import SideBarSupplier from '../components/SideBarSupplier'

// const handleSubmit = ()=>{

// }

const CreatePackage = () => {
    const [packagename, setPackageName] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [time, setTime] = useState('')
    const [cost, setCost] = useState('')


    const handleSubmit = () => {
        localStorage.setItem('packagename', packagename);
        localStorage.setItem('name', name);
        localStorage.setItem('address', address);
        localStorage.setItem('phone', phone);
        localStorage.setItem('time', time);
        localStorage.setItem('cost', cost);
    };

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (!packagename) {
            alert('Please add a package')
            return
        }
        const item = {
            packagename: packagename,
            name: name,
            address: address,
            phone: phone,
            time: time,
            cost: cost
        }

        console.log(item);
        
        setPackageName('')
        setName('')
        setAddress('')
        setPhone('')
        setTime('')
        setCost('')
    }
    return (
        <div className="page-container">

            <SideBarSupplier/>
            <div className="page-right-panel page-right-panel-signup">
                <form className="signup-form" onSubmit={onSubmit}>
                    <input type="text" name="packagename" placeholder="Package Name" className="form-control signup-form-input" value={packagename} onChange={(e) => setPackageName(e.target.value)} />
                    <br />
                    <input type="text" name="receipient" placeholder="Receipent" className="form-control signup-form-input" value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input type="text" name="address" placeholder="Address" className="form-control signup-form-input" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <br />
                    <input type="text" name="phone" placeholder="Contact" className="form-control signup-form-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <br />
                    <input type="text" name="delivery time" placeholder="Delivery Time" className="form-control signup-form-input" value={time} onChange={(e) => setTime(e.target.value)} />
                    <br />
                    <input type="text" name="delivery cost" placeholder="Delivery Cost" className="form-control signup-form-input" value={cost} onChange={(e) => setCost(e.target.value)} />
                    <br />
                    <input type="submit" value="Create Package" className="btn signup-form-input" onClick={handleSubmit}/>
                </form>
            </div>

        </div>
    )
}

export default CreatePackage
