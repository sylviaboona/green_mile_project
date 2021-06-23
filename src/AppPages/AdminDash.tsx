import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import NavBar2 from '../components/NavBar2'
import SideBar from '../components/SideBar'
import AddLoader from './AddLoader'
import AddSupplier from './AddSupplier'
import ViewInvoices from './ViewInvoices'
import ViewLoaders from './ViewLoaders'
import ViewReceipients from './ViewReceipients'
import ViewSuppliers from './ViewSuppliers'

const AdminDash = () => {
    return (
        <Router >
      <div>
      {/* <NavBar2/> */}
        <Switch>

        <Route path="/viewSuppliers">
            <ViewSuppliers />
          </Route>
        <Route path="/viewLoaders">
            <ViewLoaders />
          </Route>
          <Route path="/viewReceipients">
            <ViewReceipients />
          </Route>
          <Route path="/viewInvoices">
            <ViewInvoices/>
          </Route>

          <Route path="/addLoader">
            <AddLoader />
          </Route>

          <Route path="/addSupplier">
            <AddSupplier />
          </Route>


        </Switch>
        <div className="page-container">
            <SideBar />
            <div className="page-right-panel">
                {/* <Link to="/addLoader" className="signup-btn">ADD SUPPLIER</Link> */}
            </div>
        </div>
      </div>
    </Router>

    )
}

export default AdminDash
