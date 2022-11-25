import { useEffect, useState } from 'react';
import './ChittyManagers.css'

const ChittyManagers =()=>{

  const [managers, setManager] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchManagers = async () => {
      const response = await fetch(
        'http://localhost:8080/api/managers'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedManagers = [];
      const newItemList = [...responseData._embedded.chittyList]

      for (const key in newItemList) {
        loadedManagers.push({
          id: key,
          firstName: newItemList[key].firstName,
          lastName: newItemList[key].emp_lastname,
          email: newItemList[key].email,
        });
      }

      setManager(loadedManagers);
      setIsLoading(false);
    };

    fetchManagers().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  

  if (isLoading) {
    return (
      <section className="managersLoading">
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="managersError">
        <p>{httpError}</p>
      </section>
    );
  }

  const managerList = managers.map((manager) => (
    <ChitList
      key={manager.id}
      firstName={manager.firstName}
      lastName={manager.lastName}
      email={chit.email}
    />
  ));

   return(
   <div className="container">
       <ul>
        {managerList}
       </ul>
    </div>
    )
}
export default ChittyManagers;