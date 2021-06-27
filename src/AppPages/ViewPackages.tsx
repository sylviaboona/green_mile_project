import React from 'react'
// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideBarSupplier from '../components/SideBarSupplier'

const ViewPackages = () => {
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
    return (
        <div className="page-container">
            <SideBarSupplier />
            <div className="page-right-panel">
                <Link to="/createPackage" ><button type="button" className="btn btn-sm signup-btn">ADD PACKAGE</button></Link>
                <br />
                <br />
                <br />
                <br />
                <table className="table table-borderless table-container">
                    <thead>
                        <tr>
                            <th>Package No.</th>
                            <th>Package Name</th>
                            <th>Receipient</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Delivery Time</th>
                            <th>Delivery Cost</th>
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
                                <td>{localStorage.getItem('time')}</td>
                                <td>{localStorage.getItem('cost')}</td>
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
