import React, {useState} from 'react';
import SideBar from '../components/SideBar'
import Modal from "react-bootstrap/Modal";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';

const ViewSuppliers = () => {

    const [date, setDate] = useState('')
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDOB] = useState('')
    const [company, setCompany] = useState('')
    const [password, setPassword] = useState('')
    

    const suppliers = [
        {
            id: '01',
            fullname: 'Rita Mugume',
            phone: '0789587888',
            email: 'rita@gmail.com',
            dob: '30/07/1987'
        },
        {
            id: '02',
            fullname: 'Helen Mazima',
            phone: '0709587800',
            email: 'helen@gmail.com',
            dob: '20/5/1986'
        },
        {
            id: '03',
            fullname: 'Helen Mazima',
            phone: '0709587800',
            email: 'helen@gmail.com',
            dob: '20/5/1986'
        },
        {
            id: '04',
            fullname: 'Theo Kiwana',
            phone: '0789587888',
            email: 'rita@gmail.com',
            dob: '30/07/1987'
        },
        {
            id: '06',
            fullname: 'Sylvia Boona',
            phone: '0789587800',
            email: 'syl@gmail.com',
            dob: '22/10/1990'
        },
        {
            id: '06',
            fullname: 'Helen Mazima',
            phone: '0709587800',
            email: 'helen@gmail.com',
            dob: '20/5/1986'
        },
        {
            id: '07',
            fullname: 'Theo Kiwana',
            phone: '0789587888',
            email: 'rita@gmail.com',
            dob: '30/07/1987'
        },
        {
            id: '08',
            fullname: 'Sylvia Boona',
            phone: '0789587800',
            email: 'syl@gmail.com',
            dob: '22/10/1990'
        },
        {
            id: '09',
            fullname: 'Helen Mazima',
            phone: '0709587800',
            email: 'helen@gmail.com',
            dob: '20/5/1986'
        },
        {
            id: '10',
            fullname: 'Theo Kiwana',
            phone: '0789587888',
            email: 'rita@gmail.com',
            dob: '30/07/1987'
        },

    ]

    const handleSubmit = () => {
        localStorage.setItem('date', date);
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);
        localStorage.setItem('dob', dob);
        localStorage.setItem('company', company);
        localStorage.setItem('password', password);
    };

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (fullname==='') {
            alert('Field cant be empty')
            return
        }
        const item = {
            date: date,
            fullname: fullname,
            phone: phone,
            email: email,
            dob: dob,
            company: company,
            password: password,
        }

        console.log(item);

        setDate('')
        setFullname('')
        setPhone('')
        setEmail('')
        setDOB('')
        setCompany('')
        setPassword('')

    }

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const addSupplierFormValidation = ()=>{
        let fullnameRegex = /^[a-zA-Z0-9]+$/;
        let isfullnameValid = fullnameRegex.test(fullname)
        if (!isfullnameValid) {
            alert("Please enter Valid fullname")
        }
        let emailRegex = /^[a-zA-Z0-9]+$/;
        let isemailValid = emailRegex.test(email)
        if (!isemailValid) {
            // setState({ emailError: "Invalid email" })
            alert("Invalid email")
        let PhoneRegex = /^[0-9]+$/;
        let isphoneValid = PhoneRegex.test(phone);
        if (!isphoneValid) {
            // setState({ phoneError: "Invalid phone number" })
            alert("Invalid phonenumber")
        }
        }
        let passwordRegex = /^[a-zA-Z0-9]+$/;
        let ispasswordValid = passwordRegex.test(password)
        if (!ispasswordValid) {
            // setState({ passwordError: "Invalid Password" })
            alert("Invalid password")
        }



    }

    return (
        <div className="page-container">
            <SideBar />
            <div className="page-right-panel">
                <button type="button" className="btn btn-sm signup-btn" onClick={showModal}>ADD SUPPLIER</button>
                <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Header className="modal-header">Add New Supplier</Modal.Header>
                    <Modal.Body>
                        <form className="signup-form" onSubmit={onSubmit}>
                            <input type="text" name="dor" placeholder="Date of Registration" className="form-control signup-form-input" value={date} onChange={(e) => setDate(e.target.value)} />
                            <br />
                            <input type="text" name="fullname" placeholder="fullname" className="form-control signup-form-input" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                            <br />
                            <input type="text" name="email" placeholder="Email" className="form-control signup-form-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <br />
                            <input type="text" name="phone" placeholder="Phone" className="form-control signup-form-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <br />
                            <input type="text" name="dob" placeholder="Date of Birth" className="form-control signup-form-input" value={dob} onChange={(e) => setDOB(e.target.value)} />
                            <br />
                            <input type="text" name="company" placeholder="Company" className="form-control signup-form-input" value={company} onChange={(e) => setCompany(e.target.value)} />
                            <br />
                            <input type="text" name="password" placeholder="Password" className="form-control signup-form-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br />
                            <input type="text" name="cpassword" placeholder="Confirm Password" className="form-control signup-form-input" />
                            <br />
                            <input type="submit" value="Register Supplier" className="btn signup-form-btn signup-form-input" onClick={handleSubmit} />
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
                            <th>Date</th>
                            <th> Full Name</th>
                            <th>Email Address</th>
                            <th> Phone Contact</th>
                            <th> Date Of Birth</th>
                            <th> Company</th>
                            <th> Update</th>
                            <th> Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                    {localStorage.getItem('fullname') && (
                            <tr>
                                <td>001</td>
                                <td>{localStorage.getItem('date')}</td>
                                <td>{localStorage.getItem('fullname')}</td>
                                <td>{localStorage.getItem('email')}</td>
                                <td>{localStorage.getItem('phone')}</td>
                                <td>{localStorage.getItem('dob')}</td> 
                                <td>{localStorage.getItem('company')}</td>
                                <td><UpdateRoundedIcon /></td>
                                <td><DeleteRoundedIcon /></td>
                            </tr>
                        )}
                        {/* {suppliers.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.fullname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.dob}</td>
                                <td><UpdateRoundedIcon /></td>
                                <td><DeleteRoundedIcon /></td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ViewSuppliers
