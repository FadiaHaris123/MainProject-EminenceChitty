import React from 'react';

import classes from './Chit.module.css';

const ChitDetail = (props) => {
  return (
    <li className={classes.chit}>
    <h2>Members : {props.members}</h2>
    <h3>Duration :{props.days}</h3>
    <p>From {props.startDate}</p>
</li>
  );
};

export default ChitDetail;