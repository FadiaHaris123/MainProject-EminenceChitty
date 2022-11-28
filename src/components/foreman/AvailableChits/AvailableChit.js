import { useEffect, useState } from 'react';
import classes from './AvailableChit.module.css'
import ChitList from './ChitList';

const AvailableChit =()=>{

  const [chits, setChits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchChits = async () => {
      const response = await fetch(
        'http://localhost:8080/api/chittylist'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedChits = [];
      const newItemList = [...responseData._embedded.chittyList]

      for (const key in newItemList) {
        loadedChits.push({
          id: key,
          name: newItemList[key].chittyName,
          duration: newItemList[key].duration,
          totalAmount: newItemList[key].totalAmount,
        });
      }

      setChits(loadedChits);
      setIsLoading(false);
    };

    fetchChits().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  

  if (isLoading) {
    return (
      <section className={classes.chitsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.chitsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const chitList = chits.map((chit) => (
    <ChitList
      key={chit.id}
      id={chit.id}
      name={chit.name}
      duration={chit.duration}
      totalAmount={chit.totalAmount}
    />
  ));

   return(
   <div className={classes.container}>

       <h4>Available Chits</h4> 
       <ul>
        {chitList}
       </ul>

    </div>
    )
}
export default AvailableChit;