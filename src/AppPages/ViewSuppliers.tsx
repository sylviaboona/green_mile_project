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
                <table className="table table-striped table-bordered">
                    <thead className="table-header">
                        <tr>
                            <th className="table-field table-supplier"> No.</th>
                            <th className="table-field table-supplier"> Full Name</th>
                            <th className="table-field table-supplier">Email Address</th>
                            <th className="table-field table-supplier"> Phone Contact</th>
                            <th className="table-field table-supplier"> Date Of Birth</th>
                            <th className="table-field table-supplier"> Update</th>
                            <th className="table-field table-supplier"> Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {suppliers.map(item => (
                            <tr>
                                <td className="table-data">{item.id}</td>
                                <td className="table-data">{item.name}</td>
                                <td className="table-data">{item.email}</td>
                                <td className="table-data">{item.phone}</td>
                                <td className="table-data">{item.dob}</td>
                                <td className="table-data">Update</td>
                                <td className="table-data">Delete</td>
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
