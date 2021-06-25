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
                <br />
                <Link to="/createPackage" className="signup-btn">ADD PACKAGE</Link>
                <br />
                <br />
                <br />
                <br />
                <table>
                    <thead className="table-header">
                        <tr>
                            <th className="table-field ">Package No.</th>
                            <th className="table-field">Package Name</th>
                            <th className="table-field table-packages"> Receipient</th>
                            <th className="table-field"> Address</th>
                            <th className="table-field"> Phone</th>
                            <th className="table-field"> Delivery Time</th>
                            <th className="table-field"> Delivery Cost</th>
                        </tr>
                    </thead>
                    <tbody >

                    {localStorage.getItem('Password') && (
                        <tr>
                                <td className="table-data">001</td>
                                <td className="table-data">{localStorage.getItem('packagename')}</td>
                                <td className="table-data">{localStorage.getItem('name')}</td>
                                <td className="table-data">{localStorage.getItem('address')}</td>
                                <td className="table-data">{localStorage.getItem('phone')}</td>
                                <td className="table-data">{localStorage.getItem('time')}</td>
                                <td className="table-data">{localStorage.getItem('cost')}</td>
                        </tr>
                    )}
                        {/* {packageItems.map(item => (
                            <tr>
                                <td className="table-data">{item.packageNo}</td>
                                <td className="table-data">{item.packagename}</td>
                                <td className="table-data">{item.name}</td>
                                <td className="table-data">{item.address}</td>
                                <td className="table-data">{item.phone}</td>
                                <td className="table-data">{item.time}</td>
                                <td className="table-data">{item.cost}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewPackages
