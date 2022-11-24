import './Navigation.css'

import { Link } from 'react-router-dom'
// import Dropdown from 'react-bootstrap/Dropdown';


const Navigation=()=>{
    return(
      
      
      
      <div class="btn-group">
       
<button class="button">About us</button>
<select id = "dropdown">
    <option value="N/A">Products and Services</option>
    <option value="Chitty">Chitty</option>
    <option value="Online bidding">Online bidding</option>
    </select>
        
        
        {/* <button class="button">Products and Services <i class="fas fa-caret-down"></i></button> */}
        <button class="button">Customer Service</button>
        <Link to = "/">
        <button class="logout-button ">Log Out</button>
        </Link>
      </div>
    )
   
}
export default Navigation;