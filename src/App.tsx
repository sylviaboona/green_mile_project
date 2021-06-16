import React from 'react';
// import 'bootstrap/dist/bootstrap.min.css';
import './assets/css/App.css';
import Login from './AppPages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <Router >
    <div>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>

      </Switch>
    </div>
  </Router>
    // <div className="App">
    //   {/* <NavBar /> */}
    //   {/* <SideBarLogin /> */}
    //   <LoginForm />
    // </div>
  );
}

export default App;
