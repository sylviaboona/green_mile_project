import React from 'react'
import SideBar from '../components/SideBar'

const ViewInvoices = () => {
    const clientOrder = [
        [
        {
            clientDetails: {
                name: 'Rita Mugume',
                address: 'Munyonyo',
                phone: '0789587888',
            },
            itemNo: '001',
            item: 'FlatScreen TV',
            supplier: 'Samsung',
            cost: 20000
        },
        {
            clientDetails: {
                name: 'Rita Mugume',
                address: 'Munyonyo',
                phone: '0789587888',
            },
            itemNo: '002',
            item: 'Fridge',
            supplier: 'Samsung',
            cost: 80000
        },
    ],
    [
    {
        clientDetails: {
            name: 'Helen Mazima',
            address: 'Muyenga',
            phone: '0789587888',
        },
        itemNo: '001',
        item: 'FlatScreen TV',
        supplier: 'Samsung',
        cost: 30000
    },
    {
        clientDetails: {
            name: 'Helen Mazima',
            address: 'Muyenga',
            phone: '0789587888',
        },
        itemNo: '002',
        item: 'Fridge',
        supplier: 'Samsung',
        cost: 8000
    },
]
]


    const totalCost = clientOrder[0].map(item => item.cost).reduce((a, b) => a + b)
    return (
        <div className="page-container">
            <SideBar />
            <div className="page-right-panel">
                <h5>INVOICES</h5>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card invoice-card text-dark bg-light mb-3">
                            <div className="card-header">
                            <div className="card-body">
                                <h6 className="card-title">Samsung</h6>
                                {/* <p className="card-text"> Client Name: </p>  */}
                                {/* {clientOrder[0].map(item => (item.clientDetails.name))} */}
                                <p className="card-text total-order-cost">{totalCost}UGX</p>
                                <hr />
                                {clientOrder[0].map(item => (
                                    <>
                                        <p className="card-text">{item.item}: {item.cost}</p>
                                    </>
                                    
                                )
                                )
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewInvoices
