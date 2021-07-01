import React from 'react';
import SideBar from '../components/SideBar'
import Modal from "react-bootstrap/Modal";

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
        {
            id: '03',
            name: 'Helen Mazima',
            phone: '0709587800',
            email: 'helen@gmail.com',
            dob: '20/5/1986'
        },
        {
            id: '04',
            name: 'Theo Kiwana',
            phone: '0789587888',
            email: 'rita@gmail.com',
            dob: '30/07/1987'
        },
        {
            id: '06',
            name: 'Sylvia Boona',
            phone: '0789587800',
            email: 'syl@gmail.com',
            dob: '22/10/1990'
        },
        {
            id: '06',
            name: 'Helen Mazima',
            phone: '0709587800',
            email: 'helen@gmail.com',
            dob: '20/5/1986'
        },
        {
            id: '07',
            name: 'Theo Kiwana',
            phone: '0789587888',
            email: 'rita@gmail.com',
            dob: '30/07/1987'
        },
        {
            id: '08',
            name: 'Sylvia Boona',
            phone: '0789587800',
            email: 'syl@gmail.com',
            dob: '22/10/1990'
        },
        {
            id: '09',
            name: 'Helen Mazima',
            phone: '0709587800',
            email: 'helen@gmail.com',
            dob: '20/5/1986'
        },
        {
            id: '10',
            name: 'Theo Kiwana',
            phone: '0789587888',
            email: 'rita@gmail.com',
            dob: '30/07/1987'
        },

    ]

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="page-container">
            <SideBar />
            <div className="page-right-panel">
                <button type="button" className="btn btn-sm signup-btn" onClick={showModal}>ADD SUPPLIER</button>
                <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Header className="modal-header">Add New Supplier</Modal.Header>
                    <Modal.Body>
                        <form className="signup-form">
                            <input type="text" name="name" placeholder="Name" className="form-control signup-form-input" />
                            <br />
                            <input type="text" name="email" placeholder="Email" className="form-control signup-form-input" />
                            <br />
                            <input type="text" name="phone" placeholder="Phone" className="form-control signup-form-input" />
                            <br />
                            <input type="text" name="dob" placeholder="Date of Birth" className="form-control signup-form-input" />
                            <br />
                            <input type="text" name="password" placeholder="Password" className="form-control signup-form-input" />
                            <br />
                            <input type="text" name="cpassword" placeholder="Confirm Password" className="form-control signup-form-input" />
                            <br />
                            <input type="submit" value="Register Supplier" className="btn signup-form-btn signup-form-input" />
                        </form>
                        <br />
                        <button className="btn signup-form-btn signup-form-input" onClick={hideModal}>Close</button>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">@My Green Connection</Modal.Footer>
                </Modal>
                <br />
                <br />
                <table className="table table-container">
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
