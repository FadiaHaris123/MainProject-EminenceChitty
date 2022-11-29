import React from 'react';
import Navbar from './Navbar';
import classes from './Customer.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auction from './pages/CustomerAuction/Auction';
import Home from './pages/Home';

function Customer() {
  return (
    <div className= {classes.customer}>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/home' exact component={Home} />
          <Route path='/auction' component={Auction} />
        </Switch>
      </Router>
    </div>
  );
}

export default Customer;
