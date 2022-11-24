import React from 'react';

import classes from './Chit.module.css';

const ChitDetail = (props) => {
  return (
    <li className={classes.chit}>
      <h1>Members : {props.members}</h1>
      <h3>Duration : {props.days} days</h3>
      <p>From {props.startDate}</p>
    </li>
  );
};

export default ChitDetail;