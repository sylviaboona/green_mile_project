import React from 'react'
import { Link } from 'react-router-dom'
import SideBarSupplier from '../components/SideBarSupplier'

const ViewPackages = () => {
    return (
        <div className="page-container">
            <SideBarSupplier />
            <div className="page-right-panel">
                <br />
                <Link to="/addSupplier" className="signup-btn">ADD PACKAGE</Link>
                <br />
                <br />
                <br />
                <br />
                <table>
                    <th className="table-header">
                        <td className="table-field"> Package No.</td>
                        <td className="table-field">Package Name</td>
                        <td className="table-field"> Receipient</td>
                    </th>
                    <tr>
                        <td>001</td>
                        <td>Flatcreen TV</td>
                        <td>Sylvia</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ViewPackages
