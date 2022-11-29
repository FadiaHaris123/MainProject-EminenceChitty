import React from 'react';
import Navbar from './Navbar';
import classes from './Customer.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Customer() {
  return (
    <div className= {classes.customer}>
        <Navbar />
    </div>
  );
}

export default Customer;
