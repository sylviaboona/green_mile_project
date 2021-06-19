import React from 'react';
// import 'bootstrap/dist/bootstrap.min.css';
import './assets/css/App.css';
import Login from './AppPages/Login';
import AddLoader from './AppPages/AddLoader'
import Home from './AppPages/Home';
import ViewLoaders from './AppPages/ViewLoaders';
import ViewSuppliers from './AppPages/ViewSuppliers'
import AdminDash from './AppPages/AdminDash';
import ViewReceipients from './AppPages/ViewReceipients'
import  Settings  from './AppPages/Settings';
import ViewInvoices from './AppPages/ViewInvoices';
import AddSupplier from './AppPages/AddSupplier';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router >
      <div>
      <NavBar/>
        <Switch>
          
        <Route path="/adminDash">
            <AdminDash />
          </Route>
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
          <Route path="/settings">
            <Settings/>
          </Route>
          <Route path="/addLoader">
            <AddLoader />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/addSupplier">
            <AddSupplier />
          </Route>
     
          <Route path="/login">
            <Login />
          </Route>
         
          

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
