import React from 'react'
import SideBarSupplier from '../components/SideBarSupplier'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';
const $ = require('jquery')
$.DataTable = require('datatables.net')

const ViewOrders = () => {
    const orders = [
        { id: '01', name: 'Theo Kiwana', phone: '0789587888', email: 'rita@gmail.com', orderDate: '30/07/1987', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '02', name: 'Sylvia Boona', phone: '0789587800', email: 'syl@gmail.com', orderDate: '22/10/1990', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '03', name: 'Helen Mazima', phone: '0709587800', email: 'helen@gmail.com', orderDate: '20/5/1986', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '04', name: 'Theo Kiwana', phone: '0789587888', email: 'rita@gmail.com', orderDate: '30/07/1987', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '06', name: 'Sylvia Boona', phone: '0789587800', email: 'syl@gmail.com', orderDate: '22/10/1990', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '06', name: 'Helen Mazima', phone: '0709587800', email: 'helen@gmail.com', orderDate: '20/5/1986', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '07', name: 'Theo Kiwana', phone: '0789587888', email: 'rita@gmail.com', orderDate: '30/07/1987', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '08', name: 'Sylvia Boona', phone: '0789587800', email: 'syl@gmail.com', orderDate: '22/10/1990', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '09', name: 'Helen Mazima', phone: '0709587800', email: 'helen@gmail.com', orderDate: '20/5/1986', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '10', name: 'Theo Kiwana', phone: '0789587888', email: 'rita@gmail.com', orderDate: '30/07/1987', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '11', name: 'Sylvia Boona', phone: '0789587800', email: 'syl@gmail.com', orderDate: '22/10/1990', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '12', name: 'Helen Mazima', phone: '0709587800', email: 'helen@gmail.com', orderDate: '20/5/1986', orderedItem: 'Gucci Bag', quantity: '2' },
        { id: '13', name: 'Theo Kiwana', phone: '0789587888', email: 'rita@gmail.com', orderDate: '30/07/1987', orderedItem: 'Gucci Bag', quantity: '2' },
    ]

    // $(document).ready(()=>{
    //     $('#example').DataTable();
    // } );

    $(() => {
        $('#example').DataTable();
    });
    return (
        <div className="page-container">

            <SideBarSupplier />
            <div className="page-right-panel">
                <h2>ORDERS</h2>
                <br />
                <br />
                <table 
                id="example" 
                className="table table-container" 
                data-toggle="table"
                data-papagination="true"
                data-search = "true"
                data-search-aligh = "left"
                data-show-toggle = "true"
                data-show-refresh = "true"
                data-pagination-pre-text = "Previous"
                data-pagination-next-text = "Next"
                data-pagination-h-align = "left"
                data-pagination-detail-h-align = "right"
                data-show-pagination-switch = "true"
                data-show-fullscreen = "true"
                >
                    <thead>
                        <tr>
                            {/* <th> No.</th> */}
                            <th data-checkbox="true"> Full Name</th>
                            <th>Email Address</th>
                            <th> Phone Contact</th>
                            <th> Date</th>
                            <th> Item</th>
                            <th> Quantity</th>
                            <th> Status</th>
                            <th> Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {orders.map(item => (
                            <>
                                <tr>
                                    {/* <td>{item.id}</td> */}
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.orderDate}</td>
                                    <td>{item.orderedItem}</td>
                                    <td>{item.quantity}</td>
                                    <td><UpdateRoundedIcon /></td>
                                    <td><DeleteRoundedIcon /></td>
                                </tr>
                            </>
                        ))}

                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default ViewOrders
