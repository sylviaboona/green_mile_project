import React from 'react';
// import 'bootstrap/dist/bootstrap.min.css';
import './assets/css/App.css';
import Login from './AppPages/Login';
import AddLoader from './AppPages/AddLoader'
import Home from './AppPages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router >
      <div>
        <Switch>
          <Route path="/addLoader">
            <AddLoader />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
