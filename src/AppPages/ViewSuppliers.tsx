import React from 'react';
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom';

const ViewSuppliers = () => {

    const packageItems = [
        {
            name: 'Rita Mugume',
            phone: '0789587888',
            email: 'rita@gmail.com',
            dob: '30/07/1987'
        },
        {
            name: 'Sylvia Boona',
            phone: '0789587800',
            email: 'syl@gmail.com',
            dob: '22/10/1990'
        },
        {
            name: 'Helen Mazima',
            phone: '0709587800',
            email: 'helen@gmail.com',
            dob: '20/5/1986'
        },

    ]

    return (
<div className="page-container">
            <SideBar />
            <div className="page-right-panel">
                <br/>
            <Link to="/addSupplier" className="signup-btn">ADD SUPPLIER</Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <table>
                    <thead className="table-header">
                        <tr>
                            <th className="table-field"> Full Name</th>
                            <th className="table-field">Email Address</th>
                            <th className="table-field"> Phone Contact</th>
                            <th className="table-field"> Date Of Birth</th>
                            <th className="table-field"> </th>
                        </tr>
                    </thead>
                    <tbody >
                        {packageItems.map(item => (
                            <tr>
                                <td className="table-data">{item.name}</td>
                                <td className="table-data">{item.email}</td>
                                <td className="table-data">{item.phone}</td>
                                <td className="table-data">{item.dob}</td>
                                <td className="table-data">Update</td>
                                {/* <td className="table-data"><Link to="" className="table-data">Update</Link></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewSuppliers
