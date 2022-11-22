import { useEffect, useState } from 'react';
import './AvailableChit.css'
const AvailableChit =()=>{
    const [chits,setchits] = useState([]);

    useEffect(()=>{
        const fetchChits =async()=>{
            const response = await fetch(
                'link'
            );
            if (!response.ok) {
                throw new Error('Something went wrong!');
              }
        
              const responseData = await response.json();
        
              const loadedChits = [];
        
              const newList = [...responseData._embedded.chittyList]
              for (const key in newList) {
                loadedChits.push({
                  id: key,
                  name: newList[key].name,
                  description: newList[key].description,
                  price: newList[key].price,
                });
              }
        
            
            };
        
      
        }
    )
    return(<div className="container">

        Available Chits

    </div>)
}
export default AvailableChit;