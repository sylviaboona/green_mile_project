import React from 'react';
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom';

const ViewSuppliers = () => {

    const suppliers = [
        {
            id: '01',
            name: 'Rita Mugume',
            phone: '0789587888',
            email: 'rita@gmail.com',
            dob: '30/07/1987'
        },
        {
            id: '02',
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
                <br />
                <Link to="/addSupplier" className="btn btn-sm signup-btn">ADD SUPPLIER</Link>
                <br />
                <br />
                <br />
                <br />
                <table className="table table-borderless table-container">
                    <thead className="table-header">
                        <tr>
                            <th> No.</th>
                            <th> Full Name</th>
                            <th>Email Address</th>
                            <th> Phone Contact</th>
                            <th> Date Of Birth</th>
                            <th> Update</th>
                            <th> Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {suppliers.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.dob}</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewSuppliers
