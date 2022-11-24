import React from 'react';

import ChitDetail from './ChitDetail';
import classes from './ChitList.module.css';

const ChitManage = (props) => {
  return (
    <ul className={classes['chits-list']}> 
      {props.chits.map((chit) => (
        <ChitDetail
          amount={chit.amount}
          chitNumber={chit.chitNumber}
          chitType={chit.chitType}
          days={chit.days}
          members={chit.members}
          startDate={chit.startDate}
        />
      ))}
    </ul>
  );
};

export default ChitManage;