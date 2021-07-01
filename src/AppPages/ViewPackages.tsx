import React, {useState} from 'react'
// import { useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import SideBarSupplier from '../components/SideBarSupplier'
import {useHistory} from 'react-router-dom'

const ViewPackages = () => {
    let history = useHistory()
    // const packageItems = [
    //     {
    //         packageNo: '001',
    //         packagename: 'FlatScreen TV',
    //         name: 'Rita Mugume',
    //         address: 'Munyonyo',
    //         phone: '0789587888',
    //         time: '2:00pm',
    //         cost: 20000
    //     },
    //     {
    //         packageNo: '002',
    //         packagename: 'iPhone 12',
    //         name: 'Sylvia Boona',
    //         address: 'Kawempe',
    //         phone: '0789587800',
    //         time: '2:30pm',
    //         cost: 80000
    //     },
    //     {
    //         packageNo: '003',
    //         packagename: 'Car Seat',
    //         name: 'Helen',
    //         address: 'Muyenga',
    //         phone: '0709587800',
    //         time: '1:30pm',
    //         cost: 100000
    //     },

    // ]
    // const[packageItems,  setPackages] = useState([])
    // useEffect(()=>{
    //     setPackages(packageItems)
    //     console.log(packageItems);
    // }, [packageItems])

    const [date, setDate] = useState('')
    const [packagename, setPackageName] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    
    // const [cost, setCost] = useState('')


    const handleSubmit = () => {
        localStorage.setItem('packagename', packagename);
        localStorage.setItem('name', name);
        localStorage.setItem('address', address);
        localStorage.setItem('phone', phone);
        // localStorage.setItem('atatus', atatus);
        // localStorage.setItem('cost', cost);
    };

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (!packagename) {
            alert('Please add a package')
            return
        }
        const item = {
            date: date,
            packagename: packagename,
            name: name,
            address: address,
            phone: phone,
            // 
            // cost: cost
        }

        console.log(item);

        setDate('')
        setPackageName('')
        setName('')
        setAddress('')
        setPhone('')
        
        // setStatus('')
    }

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="page-container">
            <SideBarSupplier />
            <div className="page-right-panel">
                <button type="button" className="btn btn-sm signup-btn" onClick={showModal}>ADD PACKAGE</button>
                <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Header className="modal-header">Add a New Loader</Modal.Header>
                    <Modal.Body>
                        <form className="signup-form" onSubmit={onSubmit}>
                        <input type="text" name="packagename" placeholder="Date" className="form-control signup-form-input" value={packagename} onChange={(e) => setPackageName(e.target.value)} />
                            <br />
                            <input type="text" name="packagename" placeholder="Package Name" className="form-control signup-form-input" value={packagename} onChange={(e) => setPackageName(e.target.value)} />
                            <br />
                            <input type="text" name="receipient" placeholder="Receipent" className="form-control signup-form-input" value={name} onChange={(e) => setName(e.target.value)} />
                            <br />
                            <input type="text" name="address" placeholder="Address" className="form-control signup-form-input" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <br />
                            <input type="text" name="phone" placeholder="Contact" className="form-control signup-form-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            {/* <br /> */}
                            {/* <input type="text" name="cost" placeholder="Delivery Cost" className="form-control signup-form-input" value={time} onChange={(e) => setTime(e.target.value)} /> */}
                            {/* <br /> */}
                            {/* <input type="text" name="status" placeholder="Status" className="form-control signup-form-input" value={status} onChange={(e) => setStatus(e.target.value)} /> */}
                            <br />
                            <input type="submit" value="Create Package" className="btn signup-form-btn signup-form-input" onClick={handleSubmit} />
                        </form>
                        <br />
                        <button className="btn signup-form-btn signup-form-input" onClick={hideModal}>Close</button>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">@My Green Connection</Modal.Footer>
                </Modal>
                <br />
                <br />
                <br />
                <br />
                <table className="table table-container">
                    <thead>
                        <tr>
                            <th>Package No.</th>
                            <th>Date</th>
                            <th>Package Name</th>
                            <th>Receipient</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Delivery Cost</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody >

                        {localStorage.getItem('packagename') && (
                            <tr>
                                <td>001</td>
                                <td>{localStorage.getItem('packagename')}</td>
                                <td>{localStorage.getItem('name')}</td>
                                <td>{localStorage.getItem('address')}</td>
                                <td>{localStorage.getItem('phone')}</td>
                                {/* <td>{localStorage.getItem('cost')}</td> */}
                                {/* <td>{localStorage.getItem('status')}</td> */}
                            </tr>
                        )}
                        {/* {packageItems.map(item => (
                            <tr>
                                <td>{item.packageNo}</td>
                                <td>{item.packagename}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <td>{item.time}</td>
                                <td>{item.cost}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewPackages
