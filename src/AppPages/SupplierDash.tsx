import React from 'react'
// import { Link } from 'react-router-dom'
import SideBarSupplier from '../components/SideBarSupplier'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

const state = {

  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'Packages',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const state3 = {

    labels: ['January', 'February', 'March',
      'April', 'May'],
    datasets: [
      {
        label: 'Orders',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

const state2 = {
    labels: ['January', 'February', 'March',
      'April', 'May'],
    datasets: [
      {
        label: 'Orders',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

const SupplierDash = () => {
    return (
        <div className="page-container">
            <SideBarSupplier />
            <div className="page-right-panel graphs">
            <br />
            <div className="card admin-dash-card">
            <div className="card-body">
              <Bar
                type='bar'
                data={state}
                options={{
                  title: {
                    display: true,
                    text: 'Average Rainfall per month',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position:'left',
                    width: 20
                  }
                }}
              />
            </div>
            </div>
            <br />
            <div className="card admin-dash-card">
            <div className="card-body">
              <Line
                type='line'
                data={state3}
                options={{
                  title: {
                    display: true,
                    text: 'Average Rainfall per month',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </div>
            </div>
            <br />

            <br />
            <div className="card admin-dash-card">
            <div className="card-body">
              <Doughnut
                type='doughnut'
                data={state2}
                options={{
                  title: {
                    display: true,
                    text: 'Average Rainfall per month',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </div>
            </div>
            {/* <Link to="/viewInvoices" className="btn btn-sm signup-btn">INVOICES</Link> */}
            </div>
        </div>
    )
}

export default SupplierDash
