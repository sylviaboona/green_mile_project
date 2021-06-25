import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import NavBar2 from '../components/NavBar2'
import SideBar from '../components/SideBar'


const AdminDash = () => {
  return (
    <div className="page-container">
      <SideBar />
      <div className="page-right-panel">
        {/* <Link to="/addLoader" className="signup-btn">ADD SUPPLIER</Link> */}
      </div>
    </div>
  )
}

export default AdminDash
