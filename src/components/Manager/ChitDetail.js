import React from 'react';

import classes from './Chit.module.css';

const ChitDetail = (props) => {
  return (
    <li className={classes.chit}>
    <h2>{props.chitType}</h2>
    <h3>Chit No. :{props.chitNumber}</h3>
    <p>₹{props.amount}</p>
  </li>
  );
};

export default ChitDetail;