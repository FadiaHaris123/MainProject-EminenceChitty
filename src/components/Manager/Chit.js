import React, { useState, useCallback } from 'react';
import classes from './Chit.module.css';

import ChitManage from './ChitManage';
const Chit = (props) => {
  
  const [chits, setChit] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const managechits = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
        const response = await fetch('https://assignchits-default-rtdb.firebaseio.com/assignedchits.json');
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const data = await response.json();

        const loadedChit = [];
        for (let key in data) {
            loadedChit.push({
                id: key,
                amount: data[key].amount,
                chitNumber: data[key].chitNumber,
                chitType: data[key].chitType,
                days: data[key].days,
                members: data[key].members,
                startDate: data[key].startDate,
            });  break;
        }

        setChit(loadedChit);
    } catch (error) {
        setError(error.message);
        }
    setIsLoading(false);
}, []);
let content;

if (chits.length > 0) {
    content = <ChitManage chits={chits} />;
}

if (error) {
    content = <p>{error}</p>;
}

if (isLoading) {
    content = <p>Loading...</p>;
}
  return (
    <div>
    <li className={classes.chit}>
      <h2>{props.chitType}</h2>
      <h3>Chit No. :{props.chitNumber}</h3>
      <p>₹{props.amount}</p>
      <button onClick={managechits}>Manage Chit</button>
      {content} 
    </li>
    </div>
  );
};

export default Chit;
