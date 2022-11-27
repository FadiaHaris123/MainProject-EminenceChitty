import { useState, useEffect} from "react";
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {

  const [chittyCategory, setChittyCategory] = useState("")

  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

    useEffect(() => {
      const fetchChittyCategory = async () => {
        const response = await fetch(
          'http://localhost:8080/api/chittyCategory'
        );
  
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const responseData = await response.json();
  
        const loadedCategory = [];
        const newItemList = [...responseData._embedded.chittyCategory]
        for (const key in newItemList) {
          loadedCategory.push({
            id: key,
            category_name: newItemList[key].categoryName,
          
          });
        }
  
        setCategory(loadedCategory);
        
        setIsLoading(false);
      };
      
      fetchChittyCategory().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
    }, []);
    if (isLoading) {
      return (
       
          <h1>Loading...</h1>
       
      );
    }
  
    if (httpError) {
      return (
       
          <h1>{httpError}</h1>
      
      );
    }
    
  const handleChanger = (event) =>{
      setChittyCategory(event.target.value);
  }


  return (
    <div class="btn-group">
      <button class="button">Auction</button>
      <div class="dropdown">
        <button class="button" onChange={handleChanger}>Chitty <i class="fas fa-caret-down"></i></button>
        <div class="dropdown-content">{category.map(category => (
          <a href="#" value={category.category_name}>{category.category_name}</a>
        ))}
        </div>
      </div>
      <button class="button">Customer Service</button>
      <Link to="/">
        <button class="logout-button ">Log Out</button>
      </Link>
    </div>
  )

}
export default Navigation;