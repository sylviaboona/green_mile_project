import React from 'react';
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom';
// const dt = require('datatables.net')()
// const dt = require('datatables.net-dt')

const ViewLoaders = () => {
    const loaders = [
        {
            id: '01',
            name: 'Theo Kiwana',
            phone: '0789587888',
            email: 'rita@gmail.com',
            dob: '30/07/1987'
        },
        {
            id: '02',
            name: 'Sylvia Boona',
            phone: '0789587800',
            email: 'syl@gmail.com',
            dob: '22/10/1990'
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
        // {
        //     id: '11',
        //     name: 'Sylvia Boona',
        //     phone: '0789587800',
        //     email: 'syl@gmail.com',
        //     dob: '22/10/1990'
        // },
        // {
        //     id: '12',
        //     name: 'Helen Mazima',
        //     phone: '0709587800',
        //     email: 'helen@gmail.com',
        //     dob: '20/5/1986'
        // },

    ]

    // $(document).ready(()=>{
    //     $('#example').DataTable();
    // } );

    // $(()=>{
    //     $(('#example') as any).DataTable();
    // } );

    return (
        <div className="page-container">

            <SideBar />
            <div className="page-right-panel">
                <Link to="/addLoader" className="btn btn-sm signup-btn">ADD LOADER</Link>
                <br />
                <br />
                <table id="example" className="table table-borderless table-container">
                    <thead>
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
                        {loaders.map(item => (
                            <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.dob}</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                            </>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewLoaders
